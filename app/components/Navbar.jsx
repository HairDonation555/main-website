"use client"
import React, { useState } from 'react';
import Buttons from './Buttons';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex fixed py-2 md:px-8 px-4 gap-2 w-full items-center justify-between shadow-xl relative">
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img className="primary rounded-full p-6 bg-black w-14 h-14" alt="logo" />
        <div className="flex text-left flex-col">
          <h1 className="md:text-xl md:w-[200px] text-lg font-bold">Hair Donation555</h1>
          <p className="font-lg">Gift your hair!</p>
        </div>
      </div>
  
      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-4  w-full justify-between'> 
      <div className="md:ml-[450px] flex justify-between gap-14 items-center">
        <a className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">About</a>
        <a className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">Achievements</a>
        <a className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">Donations</a>
        <a className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">Events</a>
      </div>
      <Buttons text='Donate' btnlink='/' />
      </div>

      
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl focus:outline-none">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-25 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 md:hidden">
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>About</a>
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>Achievements</a>
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>Donations</a>
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>Events</a>
          <Buttons text='Donate' btnlink='/' />
        </div>
      )}
    </div>
  );
}

export default Navbar;
