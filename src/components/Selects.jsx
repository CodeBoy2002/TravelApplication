import React from 'react'
import Maldives from '../assets/maldives.jpg'
import Bluesea from '../assets/Bluesea.jpg'
import Waterhouse from '../assets/Waterhouse.jpg'
import Seahome from '../assets/Seahome.jpg'
import Tropic from '../assets/Tropic.jpg'
import Island from '../assets/Island.jpg'
import Selectcard from './Selectcard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        
        <Selectcard bg={Maldives} title='Maldives' />
        <Selectcard bg={Bluesea} title='Bali' />
        <Selectcard bg={Waterhouse} title='Andaman and Necobar' />
        <Selectcard bg={Seahome} title='Greece' />
        <Selectcard bg={Tropic} title='Phillipines' />
        <Selectcard bg={Island} title='Pataya' />


    </div>
  )
}

export default Selects