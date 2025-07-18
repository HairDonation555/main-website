"use client";

import React, { useState } from 'react';
import Buttons from './Buttons';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import Anims from './Anims';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex fixed py-3 px-6 w-full items-center justify-between shadow-md bg-white/60 backdrop-blur-lg z-50">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {['About', 'Achievements', 'Donations', 'Events'].map((item, idx) => (
          <Anims key={idx} inAnimation='fadeIn' outAnimation='fadeOut'>
            <a href={`#${item.toLowerCase()}`} className="relative text-lg font-semibold text-gray-800 transition-all duration-300 hover:text-primary after:block after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0">
              {item}
            </a>
          </Anims>
        ))}
        <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
          <Buttons text='Donate' btnlink='/' />
        </Anims>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl text-primary focus:outline-none">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 animate-fadeIn z-40">
          {['About', 'Achievements', 'Donations', 'Events'].map((item, idx) => (
            <Anims key={idx} inAnimation='fadeIn' outAnimation='fadeOut'>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-gray-800 hover:text-primary transition"
                onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </Anims>
          ))}
          <Buttons text='Donate' btnlink='/' />
        </div>
      )}
    </div>
  );
}

export default Navbar;
