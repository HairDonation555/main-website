import React from 'react'

function Steps(props) {
  return (
    <div>         
        <li className="flex flex-col bg-green-300/30 w-[400px] py-4 items-center text-center gap-2">
             {props.step}
             <span className="text-primary text-md mr-2  bg-green-300 rounded-full px-4 p-2">{props.num}</span>
        </li>
  </div>
  )
}

export default Steps