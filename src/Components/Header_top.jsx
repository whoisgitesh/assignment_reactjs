import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import blue_logo from "../Utils/img/blue_logo.png";

const Header_top = ({ onMenuClick }) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowHeader(y > 100); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0 shadow bg-white" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2 ml-50 hover: cursor-pointer">
          <img
            src="https://www.lejhro.com/lejhro_logo_blue.png"
            className="h-8 w-auto overflow-hidden bg-white p-1 rounded "
          />
          <span className="text-2xl font-bold text-blue-600"></span>
        </div>
        <div className="flex items-center gap-0">
          <a
            href="/"
            className="text-blue-600  mr-10  text-xl font-semibold flex items-center gap-1 "
          >
            Let's Talk <span className="text-lg ">➡️</span>
          </a>
          <button
            onClick={onMenuClick}
            className="text-white w-10 h-10 mr-40 rounded-full bg-black flex items-center justify-center  shadow-md focus:outline-none  p-4 hover:cursor-pointer"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header_top;
