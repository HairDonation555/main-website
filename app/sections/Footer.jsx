import React from 'react';
import Logo from '../components/Logo';
import Buttons from '../components/Buttons';
import { FiFacebook, FiYoutube, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

function Footer() {
  const navItems = ['About', 'Achievements', 'Donations', 'Events'];

  return (
    <div className="flex flex-col md:flex-row flex-wrap p-8 bg-gray-100 w-full justify-between gap-8">

      {/* Left Section */}
      <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left w-full md:w-1/4">
        <Logo />
        <p className="text-md text-gray-700">
          We host hair collection drives where people can donate their hair
          and create high-quality wigs from the donated hair, ensuring a natural look.
        </p>
        <Buttons text="Donate" btnlink="/" />
      </div>

      {/* Contact, Address & Navigation Links */}
      <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left w-full md:w-1/4">
        <h1 className="text-2xl font-bold text-gray-900">Contact</h1>
        <p className="text-gray-700">
          <span className="font-bold text-primary">Email:</span> hairdonation555@gmail.com
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-primary">Phone:</span> +91 73309-31729
        </p>

        <h1 className="text-2xl font-bold text-gray-900 mt-4">Address</h1>
        <p className="text-gray-700 flex-col">
          Hair Donation for Cancer Patients, Trunk Rd, Jakrama Nagar, Kabadipalem, Ongole, <br />
          Andhra - Pradesh 523001,
          <br />
          <span className='text-primary'>Contact: +91 73309-31729</span> 
        </p>

        {/* <h1 className="text-2xl font-bold text-gray-900 mt-4">Navigation</h1>
        <div className="flex flex- gap-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div> */}
      </div>

      {/* Socials & WhatsApp */}
      <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left w-full md:w-1/4">
        <h1 className="text-2xl font-bold text-gray-900">Reach us</h1>
        <p className="text-gray-700">Contact us through WhatsApp!</p>
        <div className="flex items-center gap-2 text-black">
          <FaWhatsapp className="text-primary w-8 h-8" />
          <p className="text-primary text-lg">
            <a href="https://wa.me/917330931729" className="hover:underline">WhatsApp Us</a>
          </p>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mt-4">Socials</h1>
        <div className="flex gap-6 justify-center">
          <a className="hover:text-blue-800 text-primary transition-transform hover:scale-110 cursor-pointer"
          href='https://www.facebook.com/share/19vkMzJWCT/' target='_blank' rel='noreferrer'>
            <FiFacebook className="w-8 h-8" />
          </a>
          <a className="hover:text-red-700 text-primary transition-transform hover:scale-110 cursor-pointer"
            href='https://youtube.com/@hair_donation555?si=vouESVlzAOM5-9j8' target='_blank' rel='noreferrer'>
            <FiYoutube className="w-8 h-8" />
          </a>
          <a className="hover:text-pink-600 text-primary transition-transform hover:scale-110 cursor-pointer"
          href='https://www.instagram.com/hair_donation555?igsh=eHMxNGllcDV0OTlw' target='_blank' rel='noreferrer'>
            <FiInstagram className="w-8 h-8" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
