import { useState } from "react";
import { GiphyData } from "../../models/ITrending";

export interface UseSelectedGif {
  /**
   * Function to set the selected GIF
   * @param gif - The selected gif
   * @returns A promise that resolves when the GIF is set
   */
  setGif: (gif: GiphyData) => Promise<void>;

  /** Function to remove the selected GIF */
  removeGif: () => void;

  /** The currently selected GIF */
  selectedGif: GiphyData | undefined;
}

/**
 *
 * Hook customised to handle modal opening events
 * @return {*}  {UseSelectedGif}
 */
const useSelectedGif = (): UseSelectedGif => {
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
