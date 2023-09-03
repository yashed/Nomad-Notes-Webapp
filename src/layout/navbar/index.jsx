import React, { useState, useEffect } from "react";
// import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100)
        setIsScrolled(true);
      else
        setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="navbar" className={`fixed w-screen z-50 ${isScrolled ? "isScrolled" : ""}`}>
    <div className="nav-wrapper flex justify-between items-center p-4 px-16">
      <div className="logo-wrap w-1/4">
        <div className="logo w-16">
          <img src="/images/logo/logo.png" alt="Logo" className="img logo" />
        </div>
      </div>
      <div className="links-wrap text-xl font-bold text-white w-1/3 flex justify-center">
        <Link to="/" className="link text-white mr-16">Destination</Link>
        <Link to="/contact" className="link text-white mr-16">Stories</Link>
        <Link to="/signin" className="link text-white">Reviews</Link>
      </div>
      <div className="cta-wrap flex items-center justify-end w-1/4">
        <div className="search-btn flex items-center text-white cursor-pointer">
          <i className="bx bx-search text-2xl font-bold mt-1"></i>
        </div>
        <Link to="/signup" className="btn rounded-md py-2 px-3 text-xl font-bold
        text-white ml-4">Sign Up</Link>
        <Link to="/signin"
          className="btn rounded-full bg-white py-2 px-8 text-xl font-bold
        text-black shadow-sm hover:bg-black hover:text-white
         focus:outline-none focus:ring-2 ml-4">Login</Link>

      </div>
    </div>
  </div>;
}
