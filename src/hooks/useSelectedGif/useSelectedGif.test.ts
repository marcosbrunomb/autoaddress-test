import { act, renderHook } from "@testing-library/react";
import useSelectedGif from "./useSelectedGif";
import { MOCK } from "../useFetchData/mock";

describe("useSelectedGif hook", () => {
  test("should add the overflow-hidden class to the body when the modal is open", async () => {
    const body = document.body;

    const { result } = renderHook(() => useSelectedGif());
    await act(async () => {
     await result.current.setGif(MOCK[0]);
    });

    const classOverflowHidden = body.classList.value.includes("overflow-hidden");
    expect(classOverflowHidden).toBe(true);
  });

  test("should remove the overflow-hidden class from the body when the modal is closed", async () => {
    const body = document.body;

    const { result } = renderHook(() => useSelectedGif());
    await act(async () => {
     await result.current.removeGif();
    });

    const classOverflowHidden = body.classList.value.includes("overflow-hidden");
    expect(classOverflowHidden).toBe(false);
  });
});
