import React from 'react'
import ContactImg from "../assets/contact.png"

export const NotFoundContact = () => {
  return (
    <div className='flex m-auto h-[80vh]  gap-4 justify-center items-center'>
        <div>
        <img src={ContactImg} alt='Contact Image'/>
        </div>
        <h3 className='text-white text-2xl font-semibold'>Contact Not Found</h3>
    </div>
  )
}
