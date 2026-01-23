import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

export const InputField = () => {
  return (
    <div className='flex gap-2'>
       <div className='flex relative items-center grow'>
        <IoSearchOutline className='text-white text-3xl absolute ml-2'/>
        <input type="text" className='bg-transparent border border-white rounded-md h-10 grow text-white pl-9' />
      </div>
      <div>
      <FaCirclePlus className='text-white text-5xl cursor-pointer ml-2' />
      </div>
     </div>
  )
}
