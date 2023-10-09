import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Con from "./pages/Con";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./custom.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Con />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
