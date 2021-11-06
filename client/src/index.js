import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider } from "./context/ResultsContextProvider";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </CookiesProvider>,

  document.getElementById("root")
);
