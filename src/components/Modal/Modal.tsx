import { AnimatePresence, motion } from "framer-motion";
import useGiphy from "../../hooks/useGiphy/useGiphy";

const Modal = () => {
  const { selectedGif, removeGif } = useGiphy();
  return (
    <>
      <div
        data-testid="background"
        className={`fixed w-full h-full bg-black bg-opacity-70 top-0 left-0 ${
          selectedGif ? `flex` : `hidden`
        }`}
      ></div>
      <AnimatePresence>
        {selectedGif && (
          <motion.div
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500 }}
            className="fixed flex w-full justify-center items-center h-full top-0 left-0"
          >
            <div className="flex flex-col w-full max-w-4xl bg-gray-50 dark:bg-gray-800">
              <div className="flex flex-col-reverse sm:flex-row w-full justify-between p-6">
                <div className="flex flex-col flex-1 w-full overflow-hidden">
                  <h3 className="w-full text-3xl font-bold tracking-tight truncate text-gray-700 dark:text-gray-300">
                    {selectedGif.title}
                  </h3>
                  <a
                    className="text-sm text-gray-500 underline"
                    href={selectedGif.url}
                    target="_blank"
                  >
                    {selectedGif.url}
                  </a>
                </div>
                <div className="flex w-auto justify-end">
                  <button
                    data-testid="close-button"
                    onClick={() => removeGif()}
                    type="button"
                    className="mb-3 sm:mb-0 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-2.5"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex w-full h-full justify-center items-center p-10">
                <img
                  src={selectedGif.images.original.url}
                  alt={selectedGif.alt_text}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
