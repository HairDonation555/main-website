import React from 'react'
import Anims from './Anims'
function Buttons(props) {
  return (
    <div>  
  <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
      <a className='primary text-2xl text-white px-4 py-2 border-2 border-white hover:drop-shadow-xl rounded-xl hover:cursor-pointer hover:font-bold' href={props.btnlink}>{props.text}</a>
      </Anims>  
   </div>
  )
}

export default Buttons