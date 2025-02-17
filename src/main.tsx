import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MoviesProvider } from "./contexts/MoviesProvider";
import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </StrictMode>
);
