import React from 'react'
import Logo from '../components/Logo'
import Buttons from '../components/Buttons'
import { FiFacebook, FiYoutube, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row gap-12 items-center justify-between p-6 md:p-10 bg-gray-100 w-full'>

      {/* Left Section */}
      <div className='flex flex-col gap-6 items-center md:items-start text-center md:text-left w-full md:w-1/3'>
        <Logo />
        <p className='text-lg md:w-[400px] text-gray-700'>
          Wig donation organizations host hair collection drives where people can donate their hair. 
          They then create high-quality wigs from the donated hair, ensuring a natural look.
        </p>
        <Buttons text="Donate" btnlink="/" />
      </div>        

      {/* Middle Section - Contact & Address */}
      <div className='flex flex-col gap-8 items-center md:items-start w-full md:w-1/3'>

        {/* Contact Info */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h1 className='text-2xl font-bold text-gray-900'>Contact</h1>

          <div className='flex flex-col gap-2 text-center md:text-left'>
            <p className='text-gray-700'><span className='font-bold text-primary'>Email:</span> hairdonation555@gmail.com</p>
            <p className='text-gray-700'><span className='font-bold text-primary'>Phone:</span> +91 8056890200</p>
          </div>
        </div>

        {/* Address */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h1 className='text-2xl font-bold text-gray-900'>Address</h1>
          <p className='text-gray-700 text-center md:text-left md:w-[300px]'>
            Trunk Rd, Jakrama Nagar, Kabadipalem, Ongole, 
            Andhra Pradesh 523001
          </p>
        </div>

      </div>

      {/* Right Section - Socials & WhatsApp */}
      <div className='flex flex-col gap-8 items-center md:items-start w-full md:w-1/3'>

        {/* Socials */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h1 className='text-2xl font-bold text-gray-900'>Socials</h1>
          <div className='flex gap-4'>
            <a className='hover:text-blue-800 text-primary transition-transform hover:scale-110 cursor-pointer'><FiFacebook className='w-8 h-8' /></a>
            <a className='hover:text-red-700 text-primary transition-transform hover:scale-110 cursor-pointer'><FiYoutube className='w-8 h-8 ' /></a>
            <a className='hover:text-blue-500 text-primary transition-transform hover:scale-110 cursor-pointer'><FiTwitter className='w-8 h-8 ' /></a>
            <a className='hover:text-pink-600 text-primary transition-transform hover:scale-110 cursor-pointer'><FiInstagram className='w-8 h-8 ' /></a>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h1 className='text-2xl font-bold text-gray-900'>Reach us</h1>
          <p className='text-gray-700'>Contact us through WhatsApp!</p>
          <div className="flex items-center gap-2 text-black">
            <FaWhatsapp className='text-primary w-8 h-8' />
            <p className="text-primary text-2xl">
              <a href="https://wa.me/918056890200" className="hover:underline">WhatsApp Us</a>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
