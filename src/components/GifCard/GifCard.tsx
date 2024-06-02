import { memo } from "react";
import { GiphyData } from "../../models/ITrending";
import { motion } from "framer-motion";
import useGiphy from "../../hooks/useGiphy/useGiphy";

interface IGifCard {
  gif: GiphyData;
}

const GifCard = ({ gif }: IGifCard) => {
  const { setGif } = useGiphy();

  return (
    <motion.div
      data-testid="gifcard"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700"
      onClick={() => setGif(gif)}
    >
      <div className="flex w-full h-full justify-center">
        <img
          data-testid="image-gif-card"
          src={gif.images.fixed_height.url}
          alt={gif.alt_text}
        />
      </div>
    </motion.div>
  );
};

export default memo(GifCard);
