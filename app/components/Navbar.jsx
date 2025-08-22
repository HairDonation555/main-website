"use client";

import React, { useState } from 'react';
import Buttons from './Buttons';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
// import Anims from './Anims';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Achievements', 'Donations', 'Events'];

  return (
    <div className="flex fixed py-3 px-6 w-full items-center justify-between shadow-md bg-white backdrop-blur-lg z-50">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item, idx) => (
          // <Anims key={idx} inAnimation='fadeIn' outAnimation='fadeOut'>
            <a
              key ={idx}
              href={`#${item.toLowerCase()}`}
              className="relative text-lg font-semibold text-gray-800 transition-all duration-300 hover:text-primary after:block after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
            >
              {item}
            </a>
          // </Anims>
        ))}
        {/* <Anims inAnimation='fadeIn' outAnimation='fadeOut'> */}
          <Buttons text='Donate' btnlink='/' />
        {/* </Anims> */}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl text-primary focus:outline-none z-50"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Dark transparent background */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Slide down menu */}
          <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center gap-6 py-8 rounded-b-2xl animate-slideDown z-50">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-semibold text-gray-700 hover:text-primary hover:scale-105 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Buttons text='Donate' btnlink='/' />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
