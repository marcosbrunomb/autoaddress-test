import { useContext } from "react";
import { GiphyContext } from "../../contexts/GiphyContext";

/**
 *
 * Customised hook to return the Giphy context
 */
const useGiphy = () => useContext(GiphyContext);

export default useGiphy;
