import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Why from "./pages/why";
import Download from "./pages/download";
import LeadModal from "./components/layout/leadmodal";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./App.css";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasOpenedOnce = useRef(false);
  const reopenTimeout = useRef(null);
  // const scrollTriggered = useRef(false);
  const initialTimeout = useRef(null);

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  useEffect(() => {
    // Open modal after 5 seconds
    initialTimeout.current = setTimeout(() => {
      if (!hasOpenedOnce.current) {
        openModal();
      }
    }, 15000);

    // // Scroll event listener
    // const handleScroll = () => {
    //   if (!hasOpenedOnce.current && !scrollTriggered.current) {
    //     scrollTriggered.current = true;
    //     openModal();
    //     clearTimeout(initialTimeout.current); // prevent double open
    //   }
    // };

   // window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(initialTimeout.current);
      clearTimeout(reopenTimeout.current);
    //  window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    hasOpenedOnce.current = true;
  };

  const closeModal = () => {
    setIsModalOpen(false);

    // Schedule modal to reopen in 15 seconds
    reopenTimeout.current = setTimeout(() => {
      setIsModalOpen(false);
    }, 15000);
  };

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

    { /* Sticky Social Media Icons */}
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

      {/* Global Lead Modal */}
      {isModalOpen && <LeadModal isOpen={isModalOpen} onClose={closeModal} />}
    </Router>
  );
}

export default App;
