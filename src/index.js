import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HashRouter basename={process.env.PUBLIC_URL + "/"}>
    <App />
  </HashRouter>
);
