import { act, fireEvent, render, screen } from "@testing-library/react";
import GifCard from "./GifCard";
import { MOCK } from "../../hooks/useFetchData/mock";
import { GiphyContext } from "../../contexts/GiphyContext";

const mockSetGif = vitest.fn();

describe("GiftCard Component", () => {
  test("should be an image", async () => {
    render(<GifCard gif={MOCK[0]} />);
    const image = await screen.findByTestId("image-gif-card");
    expect(image).toBeInTheDocument();
  });

  test("should call the setGif function when clicking on the card", async () => {
    render(
      <GiphyContext.Provider
        value={{
          inputValue: "",
          loading: false,
          removeGif: () => {},
          search: "",
          selectedGif: undefined,
          setInputValue: () => {},
          trendingGifs: [],
          setGif: mockSetGif,
        }}
      >
        <GifCard gif={MOCK[0]} />
      </GiphyContext.Provider>
    );
    const gifCard = await screen.findByTestId("gifcard");

    await act(async () => {
      await fireEvent.click(gifCard);
    });

    expect(mockSetGif).toHaveBeenCalled();
  });
});
