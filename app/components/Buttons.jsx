import React from 'react'

function Buttons(props) {
  return (
    <div>    
      <a className='primary text-2xl text-white px-4 py-2 rounded-xl hover:font-bold' href={props.btnlink}>{props.text}</a>
    </div>
  )
}

export default Buttons