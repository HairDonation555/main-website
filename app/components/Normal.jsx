import React from 'react'

function Normal(props) {
  return (
    <div>
        <button
          className="group relative inline-flex hover:cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark hover:pointer focus:outline-none"
        >
         <a href='#Saloons'>
          <span className="absolute inset-0 rounded-xl bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
          <span className="relative z-10">{props.text}</span>
        </a>
        </button>
    </div>
  )
}

export default Normal;
