import { useState } from "react";
import { ITrending } from "../../models/ITrending";

export interface UseFetchData {
  /** Loading status while data is being fetched */
  loading: boolean;

  /**
   * Function to fetch data based on an optional search string
   * @param search - Optional parameter to define whether the query will be carried out in the search or trending API
   * @returns A promise that resolves the query data
   */
  fetchData: (search?: string) => Promise<ITrending>;
}

/**
 *
 * Customised hook to fetch data from the Giphy API
 * @return {*}  {UseFetchData}
 */
const useFetchData = (): UseFetchData => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (search?: string): Promise<ITrending> => {
    const url = search ? `search?q=${search}&` : "trending?";
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_GIPHY_URL}/${url}api_key=${
          import.meta.env.VITE_GIPHY_API_KEY
        }&offset=0&rating=g&bundle=messaging_non_clips`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch trending GIFs");
      }

      const trending: ITrending = await response.json();
      return trending;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchData };
};

export default useFetchData;
