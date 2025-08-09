import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header_top from "./Header_top";
import useHeader from "../Hooks/useHeader";
import logo from "../Utils/img/logo.svg";
const navLinks = [
  { name: "Innovations", href: "#" },
  { name: "Bootcamp", href: "#" },
  { name: "Business Services", href: "#" },
  { name: "Financial Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Blogs", href: "#" },
];

const Header = ({ onMenuClick }) => {
  const active = useHeader();
  return (
    <>
      {active && <Header_top onMenuClick={onMenuClick} />}
      <div className="w-full bg-[#d4942e] pb-25 relative">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 pt-10  ">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 cursor-pointer pt-10   ">
            {/* Placeholder SVG logo */}
            <img
              src="https://www.lejhro.com/lejhro_logo_white.png"
              className="w-auto h-8 px-2  object-fill"
            />
            <span className="text-3xl font-bold text-[#1976d2] tracking-wide cursor-pointer  "></span>
          </div>
          {/* Navigation (Desktop) */}
          <div className=" ml-90 justify-between pt-5">
            <nav className="hidden md:flex space-x-10   ">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-base font-normal hover:cursor-pointer  hover:scale-105 transform transition "
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md focus:outline-none"
              onClick={onMenuClick}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#222"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="8" x2="18" y2="8" />
                <line x1="6" y1="12" x2="18" y2="12" />
              </svg>
            </button>
          </div>
          {/* Hamburger Menu (Desktop) */}
          <div className="flex items-center">
            <button
              className="w-13 h-13 rounded-full bg-white flex items-center justify-center shadow-md focus:outline-none hover:cursor-pointer hover:scale-105 transform transition"
              onClick={onMenuClick}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#222"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="8" x2="18" y2="8" />
                <line x1="3" y1="12" x2="18" y2="12" />
                <line x1="3" y1="12" x2="18" y2="12" />
              </svg>
            </button>
          </div>
        </div>
        {/* Blogs Heading */}
        <div className="max-w-7xl mx-auto px-8 mt-24">
          <h1 className="text-white text-5xl font-bold">Blogs</h1>
        </div>
        {/*  */}
      </div>
    </>
  );
};
export default Header;
