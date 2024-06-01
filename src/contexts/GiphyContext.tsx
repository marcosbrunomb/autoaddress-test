import {
  createContext,
  useEffect,
  useState,
} from "react";
import { GiphyData } from "../models/ITrending";
import useFetchData from "../hooks/useFetchData";
import { MOCK } from "./mock";
import useSelectedGif from "../hooks/useSelectedGif";

interface GiphyContextType {
  trendingGifs: GiphyData[];
  loading: boolean;
  inputValue: string;
  search: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectedGif: GiphyData | undefined;
  setGif: (gif: GiphyData) => void;
  removeGif: () => void;
}
const GiphyContext = createContext({} as GiphyContextType);

interface IGiphyProvider {
  children: React.ReactNode;
}

const GiphyProvider = ({ children }: IGiphyProvider) => {
  const [trendingGifs, setTrendingGifs] = useState<GiphyData[]>(MOCK);
  const [inputValue, setInputValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { fetchData, loading } = useFetchData();
  const { selectedGif, setGif, removeGif } = useSelectedGif();

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setSearch(inputValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, 500]);

  // useEffect(() => {
  //   getTrending();
  // }, [search]);

  const getTrending = async () => {
    const trending = await fetchData(search);
    setTrendingGifs(trending.data);
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
