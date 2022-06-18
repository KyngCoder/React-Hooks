import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ContextTest from "./hooks/useContext/ContextTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextTest>
      <App />
    </ContextTest>
  </React.StrictMode>
);
