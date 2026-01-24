import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

export const Modal = ({isOpen, close, children}) => {
  return createPortal(
    <>
    {isOpen &&
    <div className='absolute top-0 h-screen w-screen backdrop-blur z-40 grid place-items-center'>
     <div className='relative z-50 min-h-[200px] min-w-[80%] m-auto bg-white p-4'>
      <div className='flex justify-end'>
        <AiOutlineClose onClick = {close} className='self-end text-2xl cursor-pointer'/>
      </div>
        {children}
      </div>
    </div>
      }
    </>
 ,document.getElementById("modal-root")
 )
}
