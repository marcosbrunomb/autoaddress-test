import { act, fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { MOCK } from "../../hooks/useFetchData/mock";
import { GiphyContext } from "../../contexts/GiphyContext";

const mockSetGif = vitest.fn();

const MockContextValues = {
  inputValue: "",
  loading: false,
  removeGif: mockSetGif,
  search: "",
  selectedGif: MOCK[0],
  setInputValue: () => {},
  trendingGifs: MOCK,
  setGif: () => {},
};

describe("Modal Component", () => {
  test("deve mostrar o título do gif", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues }}>
        <Modal />
      </GiphyContext.Provider>
    );

    const title = await screen.findByText(MOCK[0].title);
    expect(title).toBeInTheDocument();
  });

  test("deve inserir a classe flex no fundo se houver um selectedGif", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues }}>
        <Modal />
      </GiphyContext.Provider>
    );

    const background = (await screen.findByTestId('background'));
    expect(background.classList.value.includes('flex')).toBe(true);
  });

  test("deve inserir a classe hidden no fundo se não houver um selectedGif", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues, selectedGif: undefined }}>
        <Modal />
      </GiphyContext.Provider>
    );

    const background = (await screen.findByTestId('background'));
    expect(background.classList.value.includes('hidden')).toBe(true);
  });

  test("should call the setGif function when clicking on the button", async () => {
    render(
      <GiphyContext.Provider value={{ ...MockContextValues }}>
        <Modal />
      </GiphyContext.Provider>
    );

    const button = await screen.findByTestId("close-button");
    await act(async () => {
      await fireEvent.click(button);
    });

    expect(mockSetGif).toHaveBeenCalled();
  });
});
