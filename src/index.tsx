import React from "react";
import ReactDOM from "react-dom/client";
import { MainWebsite } from "./components/MainWebsite";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MainWebsite />
  </React.StrictMode>
);
