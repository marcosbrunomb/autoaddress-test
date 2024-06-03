import { createContext, useEffect, useState } from "react";
import { GiphyData } from "../models/ITrending";
import useFetchData from "../hooks/useFetchData/useFetchData";
import useSelectedGif from "../hooks/useSelectedGif/useSelectedGif";

export interface GiphyContextType {
  /** List of trending Gifs */
  trendingGifs: GiphyData[];

  /** Loading status while a data search is being performed */
  loading: boolean;

  /** Value returned from the search input */
  inputValue: string;

  /** Function to set the input value in the search input */
  setInputValue: React.Dispatch<React.SetStateAction<string>>;

  /** String to perform search, triggered only when user stops typing for a while */
  search: string;

  /** Gif selected to render in the modal */
  selectedGif: GiphyData | undefined;

  /** Function to set the selected GIF */
  setGif: (gif: GiphyData) => void;

  /** Function to remove the selected GIF*/
  removeGif: () => void;
}

/** Context to provide the other components with the state of the gif list, search field and modal */
const GiphyContext = createContext({} as GiphyContextType);

export interface IGiphyProvider {
  children: React.ReactNode;
}

const GiphyProvider = ({ children }: IGiphyProvider) => {
  const [trendingGifs, setTrendingGifs] = useState<GiphyData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { fetchData, loading } = useFetchData();
  const { selectedGif, setGif, removeGif } = useSelectedGif();

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setSearch(inputValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  useEffect(() => {
    getGifs();
  }, [search]);

  const getGifs = async () => {
    const _gifs = await fetchData(search);
    setTrendingGifs(_gifs.data);
  };

  return (
    <GiphyContext.Provider
      value={{
        trendingGifs,
        loading,
        inputValue,
        setInputValue,
        search,
        selectedGif,
        setGif,
        removeGif,
      }}
    >
      {children}
    </GiphyContext.Provider>
  );
};

export { GiphyContext, GiphyProvider };
