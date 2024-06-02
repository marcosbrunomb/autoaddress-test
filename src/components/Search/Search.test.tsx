import { act, fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
import { GiphyContext } from "../../contexts/GiphyContext";

describe("Search Component", () => {
  const mockSetInputValue = vitest.fn();

  const MockContextValues = {
    inputValue: "",
    loading: false,
    removeGif: () => {},
    search: "",
    selectedGif: undefined,
    setInputValue: mockSetInputValue,
    trendingGifs: [],
    setGif: () => {},
  };

  test("should be an input", async () => {
    render(<Search />);
    const input = await screen.findByTestId("search-input");
    expect(input).toBeInTheDocument();
  });

  test("should call the setInput function when a text is inserted into the input", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues }}>
        <Search />
      </GiphyContext.Provider>
    );

    const input = await screen.findByTestId("search-input");
    await act(async () => {
      await fireEvent.change(input, {
        target: {
          value: "test",
        },
      });
    });

    expect(mockSetInputValue).toHaveBeenCalled();
  });
});
