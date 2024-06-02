import { act, renderHook } from "@testing-library/react";
import useDarkMode from "./useDarkMode";

describe("useDarkMode hook", () => {
  
  test("should start in light mode", () => {
    const body = document.body;
    renderHook(() => useDarkMode());
    const classDark = body.classList.value.includes('dark');
    expect(classDark).toBe(false);
  });

  test("should activate dark mode when this is currently in the light theme", () => {
    const body = document.body;
    
    const { result } = renderHook(() => useDarkMode());
    if (!result.current.isDarkMode) {
      act(() => {
        result.current.toggleDarkMode();
      });
    }
    
    const classDark = body.classList.value.includes('dark');
    expect(classDark).toBe(true);
  });

  test("should activate light mode when this is currently in the dark theme", () => {
    const body = document.body;
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.toggleDarkMode();
    });

    if (result.current.isDarkMode) {
      act(() => {
        result.current.toggleDarkMode();
      });
    }

    const classDark = body.classList.value.includes('dark');
    expect(classDark).toBe(false);
  });
});