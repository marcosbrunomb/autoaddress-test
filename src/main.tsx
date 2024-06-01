import ReactDOM from "react-dom/client";
import Giphy from "./pages/Giphy";
import "./styles/tailwind.css";
import "./styles/index.css";
import { GiphyProvider } from "./contexts/GiphyContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GiphyProvider>
    <Giphy />
  </GiphyProvider>
  // </React.StrictMode>,
);
