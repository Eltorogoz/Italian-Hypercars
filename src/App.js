import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Models from "./pages/Models";
import Heritage from "./pages/Heritage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component contains your Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="models" element={<Models />} />
          <Route path="heritage" element={<Heritage />} />
        </Route>
      </Routes>
    </Router>
  );
}