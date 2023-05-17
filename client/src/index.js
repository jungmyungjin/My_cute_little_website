import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    {/* 실제프로젝트에서 없어질 것*/}
    <App />
  </React.StrictMode>
);
