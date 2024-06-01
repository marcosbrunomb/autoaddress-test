import useGiphy from "../../hooks/useGiphy";
import { GiphyData } from "../../models/ITrending";
import GifCard from "../GifCard/GifCard";
import Loading from "../Loading/Loading";

const Gifs = () => {
  const { trendingGifs, loading, search } = useGiphy();

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="flex flex-col w-full items-center py-10">
        <h2 className="mb-2 text-4xl font-bold tracking-tight truncate text-gray-600 dark:text-white">
          {search && `Showing by ${search}`}
          {!search && `The most popular gifs of the moment`}
        </h2>
      </div>
      <div className="flex flex-wrap w-full h-full justify-center items-center gap-4">
        {trendingGifs.map((item: GiphyData) => (
          <GifCard key={item.id} gif={item} />
        ))}
      </div>
    </>
  );
};

export default Gifs;
