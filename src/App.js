// App.js
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Why from "./pages/why";
import Download from "./pages/download";
import LeadModalManager from "./components/layout/LeadModalManager";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/why" element={<Why />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      {/* Sticky Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com/TheChairbord" target="_blank" rel="noopener noreferrer" style={{ color: "#4267B2" }}>
          <FaFacebookF />
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FTheChairbord" target="_blank" rel="noopener noreferrer" style={{ color: "#1DA1F2" }}>
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/company/chairbord/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ color: "#0077B5" }}>
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/chairbord.official/" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C" }}>
          <FaInstagram />
        </a>
      </div>

      {/* Lead Modal manager lives inside Router context */}
      <LeadModalManager />
    </Router>
  );
}

export default App;
