import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Models from "./pages/Models";
import Heritage from "./pages/Heritage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="models" element={<Models />} />
          <Route path="heritage" element={<Heritage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
