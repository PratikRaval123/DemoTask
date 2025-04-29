import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <App />
    {/* <Footer /> */}
  </BrowserRouter>
);
