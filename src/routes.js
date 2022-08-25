import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./components/index";
import Header from "./components/header";
import Footer from "./components/footer";
import Cars from "./components/cars";

const MyRoutes = () => (
  <BrowserRouter>
    <Header />
    <main role="main" className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cars" element={<Cars />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default MyRoutes;
