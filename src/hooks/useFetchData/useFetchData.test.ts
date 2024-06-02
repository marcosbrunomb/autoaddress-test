import { act, renderHook } from "@testing-library/react";
import useFetchData from "./useFetchData";
import { GiphyData } from "../../models/ITrending";
import { MOCK } from "./mock";

global.fetch = vitest.fn();

function createFetchResponse(ok: boolean, data: GiphyData[]) {
  return { ok: ok, json: () => new Promise((resolve) => resolve(data)) };
}

describe("useFetchData hook", () => {
  test("should start loading false", () => {
    const { result } = renderHook(() => useFetchData());
    expect(result.current.loading).toBe(false);
  });

  test("should call the trending API if there is no search parameter", async () => {
    (fetch as jest.Mock).mockResolvedValue(createFetchResponse(true, MOCK));
    const { result } = renderHook(() => useFetchData());
    await act(async () => await result.current.fetchData());
    expect(fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_GIPHY_URL}/trending?api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
      }&offset=0&rating=g&bundle=messaging_non_clips`
    );
  });

  test("should call the search API if there is search parameter", async () => {
    (fetch as jest.Mock).mockResolvedValue(createFetchResponse(true, MOCK));
    const mockSearchParam = 'mockSearchParam';
    const { result } = renderHook(() => useFetchData());
    await act(async () => await result.current.fetchData(mockSearchParam));
    expect(fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_GIPHY_URL}/search?q=${mockSearchParam}&api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
      }&offset=0&rating=g&bundle=messaging_non_clips`
    );
  });

  test("should return an error with a message if an error occurs in the request", async () => {
    (fetch as jest.Mock).mockResolvedValue(createFetchResponse(false, MOCK));
    const { result } = renderHook(() => useFetchData());
    await expect(act(async () => await result.current.fetchData())).rejects.toThrow('Failed to fetch trending GIFs');
  });

});
