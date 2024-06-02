import { renderHook } from "@testing-library/react";
import useGiphy from "./useGiphy";
import { GiphyProvider } from "../../contexts/GiphyContext";

describe("useGiphy hook", () => {
  test("should be possible to access the trendingGifs variable of GiphyContext", () => {
    const { result } = renderHook(() => useGiphy(), { wrapper: GiphyProvider } as any);
    expect(result.current.trendingGifs).toBeDefined();
  });
});
