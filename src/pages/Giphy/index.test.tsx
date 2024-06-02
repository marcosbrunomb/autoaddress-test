import { render, screen } from "@testing-library/react";
import Giphy from ".";
import { MOCK } from "../../hooks/useFetchData/mock";
import { GiphyContext } from "../../contexts/GiphyContext";

describe("Giphy Page", () => {
  const MockContextValues = {
    inputValue: "",
    loading: false,
    removeGif: () => {},
    search: "",
    selectedGif: undefined,
    setInputValue: () => {},
    trendingGifs: MOCK,
    setGif: () => {},
  };

  test("should render the main div of the page", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues }}>
        <Giphy />
      </GiphyContext.Provider>
    );
    const page = await screen.findByTestId("giphy-page");
    expect(page).toBeInTheDocument();
  });
});
