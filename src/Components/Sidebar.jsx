import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import logo from "../Utils/img/blue_logo.png";
import {
  FaTimes,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-[9999] bg-opacity-90 backdrop-blur-md shadow-2xl  transform transition-transform duration-300 easy-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b cursor-pointer space-y-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://www.lejhro.com/lejhro_logo_blue.png"
              alt="LEJHRO"
              className="h-7 w-auto px-2 object-fill"
            />
            <span className="text-xl font-bold text-blue-600"></span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white transition hover:cursor-pointer"
          >
            X
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4 p-4 text-gray-800 font-serif text-1xl font-bold  ">
          <Link
            to="/Innovation"
            onClick={onClose}
            className="hover:text-blue-600 transition-colors py-2 cursor-pointer"
          >
            Innovation
          </Link>
          <Link
            to="/BootCamp"
            onClick={onClose}
            className="hover:text-blue-600 transition-colors py-2 cursor-pointer"
          >
            BootCamp
          </Link>
          <Link
            to="/BusinessServices"
            onClick={onClose}
            className="hover:text-blue-600 transition-colors py-2 cursor-pointer"
          >
            Business Services
          </Link>
          <Link
            to="/FinancialServices"
            onClick={onClose}
            className="hover:text-blue-600 transition-colors py-2 cursor-pointer "
          >
            Financial Services
          </Link>
          <Link
            to="/About"
            onClick={onClose}
            className="hover:text-blue-600 transition-colors py-2 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/ContactUs"
            onClick={onClose}
            className="hover:text-blue-600 transition-colors py-2 cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            to="#"
            className="hover:text-blue-600 transition-colors py-2 cursor-pointer"
          >
            Blogs
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 px-4 pt-6">
          <a href="#">
            <FaTwitter className="text-xl " />
          </a>
          <a href="#">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="#">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a href="#">
            <FaYoutube className="text-xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
