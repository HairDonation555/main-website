import React from 'react'
import RollingNumber from './RollCount'

function Impact() {
  return (
    <div className='shorts-header '>
        <div className='flex md:flex-row flex-col items-center text-center w-full justify-around md:gap-28 gap-10 '>

           <div className='p-12 bg-green-300/90 items-center justify-center rounded-xl'>
              <RollingNumber count="1M+" countname="Subscribers" />
            </div>
            <div className='p-12 bg-green-300/90 items-center justify-center rounded-xl'>
            <RollingNumber count="50+" countname="Saloons" />
            </div>
            <div className='p-12 bg-green-300/90 items-center justify-center rounded-xl'>
             <RollingNumber count="3000+" countname="Donors" />
            </div>
        </div>
 </div>
  )
}

export default Impact