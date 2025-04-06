import React from 'react'
import RollingNumber from './RollCount'
import Anims from '../components/Anims'
function Impact() {
  return (
    <div className='shorts-header mb-12'>
        <div className='flex md:flex-row flex-col items-center text-center w-full justify-around md:gap-28 gap-10 '>
        <Anims inAnimation='fadeIn' outAnimation='fadeOut' delay={0.15}>
       
           <div className='p-12 bg-primary items-center justify-center rounded-xl'>
              <RollingNumber count="1M+" countname="Subscribers" />
            </div>
            </Anims> 
            <Anims inAnimation='fadeIn' outAnimation='fadeOut' delay={0.25}>
       
            <div className='p-12 bg-primary items-center justify-center rounded-xl'>
            <RollingNumber count="50+" countname="Saloons" />
            </div>
            </Anims> 
            <Anims inAnimation='fadeIn' outAnimation='fadeOut' delay={0.5}>
       
            <div className='p-12 bg-primary items-center justify-center rounded-xl'>
             <RollingNumber count="3000+" countname="Donors" />
            </div>
            </Anims> 
        </div>
 </div>
  )
}

export default Impact