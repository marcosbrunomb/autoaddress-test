import DarkMode from "../../components/DarkMode/DarkMode";
import Gifs from "../../components/Gifs/Gifs";
import Modal from "../../components/Modal/Modal";
import Search from "../../components/Search/Search";

const Giphy = () => {
  return (
    <div data-testid='giphy-page' className="flex justify-center w-full">
      <div className="w-full max-w-8xl ">
        <DarkMode />
        <Search />
        <Gifs />
        <Modal />
      </div>
    </div>
  );
};

export default Giphy;
