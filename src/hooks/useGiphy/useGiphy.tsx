import { useContext } from "react";
import { GiphyContext } from "../../contexts/GiphyContext";

const useGiphy = () => useContext(GiphyContext);

export default useGiphy;
