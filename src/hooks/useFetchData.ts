import { useState } from "react";
import { ITrending } from "../models/ITrending";

interface UseFetchData {
  loading: boolean;
  fetchData: (search?: string) => Promise<ITrending>;
}

const useFetchData = (): UseFetchData => {
  const [loading, setLoading] = useState<boolean>(false);
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchData = async (search?: string): Promise<ITrending> => {
    const url = search ? `search?q=${search}&` : "trending?";
    setLoading(true);
    try {
        await sleep(3000);
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
