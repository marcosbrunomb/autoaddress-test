import { useState } from "react";
import { GiphyData } from "../models/ITrending";

const useSelectedGif = () => {
  const [selectedGif, setSelectedGif] = useState<GiphyData | undefined>();
  const bodyElement = document.body;

  const setGif = (gif: GiphyData) => {
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
