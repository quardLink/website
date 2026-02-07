import React, { useState } from "react";
import { navLists } from "../data";
import { Menu, X } from "lucide-react"; // using Lucide icons
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full py-5 px-5 md:px-10 flex justify-between items-center bg-black text-white">
      <nav className="flex w-full justify-between items-center">
        <h3 className="text-2xl font-semibold bg-gradient-to-br from-white via-neutral-200 to-gray-300 text-transparent bg-clip-text drop-shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)] transition duration-300">
          <a href="/">QuardLink</a>
        </h3>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          {navLists.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-3 cursor-pointer lg:text-base text-gray-400 hover:text-white transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/#contact"
            className="relative inline-block px-7 lg:px-10 py-2 rounded-full font-semibold text-white border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.1)]"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={25} /> : <Menu size={30} className="mr-3" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-0 left-0 w-full h-screen bg-black z-50 flex flex-col items-center  p-6 gap-4"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-white mb-4"
          >
            <X size={30} />
          </button>
          {navLists.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="px-3 cursor-pointer lg:text-base text-gray-400 hover:text-white transition-all w-3/4 py-2 border-b text-center"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="mt-8 px-7 lg:px-10 py-2 rounded-full font-semibold text-white border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.1)] text-center w-2/3 sm:w-auto"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
