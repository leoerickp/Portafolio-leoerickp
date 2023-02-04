import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Portafolio } from "./Portafolio";
import "./assets/css/styles.css";
import "./styles.css";
import "animate.css/animate.min.css";
import { Provider } from "react-redux";
import store from "./store/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Portafolio />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
