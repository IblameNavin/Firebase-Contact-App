import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from 'react-icons/ri';
import { IoMdTrash } from 'react-icons/io';

export const ContactCard = ({contacts}) => {
  return (
    <div>
      {
        contacts.map((contact)=>
         <div key={contact.id} className='bg-yellow-100 flex justify-between items-center p-3 rounded-lg mt-4'>
        <div className='flex gap-2'>
            <FaRegUserCircle className='text-5xl cursor-pointer text-amber-500'/>
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
          </div>
        </div>
          <div className='flex text-2xl gap-3'>
            <RiEditCircleLine/>
            <IoMdTrash className='text-amber-500'/>
          </div>
        </div>
        )
      }
     </div>
  )
}
