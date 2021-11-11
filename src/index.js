import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";

import dotenv from "dotenv";
import { BrowserRouter } from "react-router-dom";
dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
