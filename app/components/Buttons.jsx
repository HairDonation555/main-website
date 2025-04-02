import React from 'react'

function Buttons(props) {
  return (
    <div>    
      <a className='primary text-2xl text-white px-4 py-2 border-2 border-white hover:drop-shadow-xl rounded-xl hover:cursor-pointer hover:font-bold' href={props.btnlink}>{props.text}</a>
    </div>
  )
}

export default Buttons