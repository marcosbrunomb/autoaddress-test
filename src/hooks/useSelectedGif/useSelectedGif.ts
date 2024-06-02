import { useState } from "react";
import { GiphyData } from "../../models/ITrending";

const useSelectedGif = () => {
  const [selectedGif, setSelectedGif] = useState<GiphyData | undefined>();
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const bodyElement = document.body;

  const setGif = async (gif: GiphyData) => {
    await sleep(200);
    setSelectedGif(gif);
    bodyElement.classList.add("overflow-hidden");
    return;
  };

  const removeGif = () => {
    setSelectedGif(undefined);
    bodyElement.classList.remove("overflow-hidden");
  };

  return { setGif, removeGif, selectedGif };
};

export default useSelectedGif;
