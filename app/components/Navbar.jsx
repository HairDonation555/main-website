"use client";

import React, { useState, useEffect, useRef } from "react";
import Buttons from "./Buttons";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import Anims from "./Anims";
import Normal from "./Normal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navItems = ["About", "Achievements", "Donations", "Events"];

  // Close menu when clicking outside or on scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 bg-white shadow-md z-150 flex items-center justify-between">
      
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item, idx) => (
          <Anims key={idx} inAnimation="fadeIn" outAnimation="fadeOut">
            <a
              href={`#${item.toLowerCase()}`}
              className="relative text-lg font-semibold text-gray-800 transition-all duration-300 hover:text-primary after:block after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
            >
              {item}
            </a>
          </Anims>
        ))}
        {/* <Anims inAnimation="fadeIn" outAnimation="fadeOut">
          <Buttons text="Donate" btnlink="/" />
        </Anims> */}
         <Normal model text="Process" />
      </div>

      {/* Mobile Menu Toggle - only visible on small screens */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden text-3xl text-primary focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Overlay + Slide Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Partial Vertical Menu */}
          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-full h-[60vh] bg-white shadow-lg flex flex-col items-center justify-center gap-8 z-50 animate-slideDown p-6 rounded-b-2xl"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-bold text-primary hover:text-secondary transition-transform duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Buttons text="Donate" btnlink="/" />

            <div className="absolute bottom-4 text-gray-500 text-center text-sm">
             <h1 className="font-semibold">Get to know the process for donating!</h1>
             <a href="#Saloons" className="underline hover:text-primary"> Click Here </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
