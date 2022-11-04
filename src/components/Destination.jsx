import React from 'react'
import Beach from '../assets/Beach.jpg'
import Morning from '../assets/morning.jpg'
import Pinksea from '../assets/Pinksea.jpg'
import Sky from '../assets/sky.jpg'
import Coconut from '../assets/coconut.jpg'
 
const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 flex flex-col justify-center items-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-3'>On the Caribbean's Best Beaches</p>

        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Beach} alt="/" />
            <img className='w-full h-full object-cover' src={Morning} alt="/" />
            <img className='w-full h-full object-cover' src={Pinksea} alt="/" />
            <img className='w-full h-full object-cover' src={Sky} alt="/" />
            <img className='w-full h-full object-cover' src={Coconut} alt="/" />
        </div>

    </div>
  )
}

export default Destination