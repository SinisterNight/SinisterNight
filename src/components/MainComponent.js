import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from 'react-router-dom';

function Main() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default Main;
