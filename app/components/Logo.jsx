import React from 'react'

function Logo() {
  return (
    <a href='/'>
    <div className="flex items-center gap-2">

        <img className="primary rounded-full p-6 bg-black w-14 h-14" alt="logo" />
        <div className="flex text-left flex-col">
          <h1 className="md:text-xl md:w-[200px] text-lg font-bold">Hair Donation555</h1>
          <p className="font-lg">Gift your hair!</p>
        </div>
    
  </div>
  </a>
  )
}

export default Logo