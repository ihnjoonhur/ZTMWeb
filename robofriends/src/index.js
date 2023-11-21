import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./App"; // Correct import
import { robots } from "./robots";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App robots={robots} /> {/* Pass robots data to the App component */}
  </React.StrictMode>,
  root
);

reportWebVitals();
