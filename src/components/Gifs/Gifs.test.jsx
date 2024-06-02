import { render, screen } from "@testing-library/react";
import { GiphyContext } from "../../contexts/GiphyContext";
import Gifs from "./Gifs";
import { MOCK } from "../../hooks/useFetchData/mock";

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

describe("Gifs Component", () => {
  test("should render the Loading component when the context sets loading to true", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues, loading: true }}>
        <Gifs />
      </GiphyContext.Provider>
    );

    const loading = await screen.findByTestId("loading");
    expect(loading).toBeInTheDocument();
  });

  test("should render the cards div when the context sets loading to false", async () => {
    render(
      <GiphyContext.Provider value={MockContextValues}>
        <Gifs />
      </GiphyContext.Provider>
    );

    const gifsCards = await screen.findByTestId("gifs_cards");
    expect(gifsCards).toBeInTheDocument();
  });

  test("should render the search content when there is a search", async () => {
    const search = 'searching';
    render(
      <GiphyContext.Provider value={{ ...MockContextValues, search: search }}>
        <Gifs />
      </GiphyContext.Provider>
    );

    const textSearch = await screen.findByText(`Showing by ${search}`);
    expect(textSearch).toBeInTheDocument();
  });

  test("should render a standard text when there is no search", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues }}>
        <Gifs />
      </GiphyContext.Provider>
    );

    const textSearch = await screen.findByText(`The most popular gifs of the moment`);
    expect(textSearch).toBeInTheDocument();
  });
});
