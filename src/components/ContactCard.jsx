import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from 'react-icons/ri';
import { IoMdTrash } from 'react-icons/io';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AddUpdateComponent } from './AddUpdateComponent';
import { useDisclouser } from '../hooks/useDisclouser';
import { toast } from 'react-toastify';
import { NotFoundContact } from './NotFoundContact';

export const ContactCard = ({contacts}) => {

        const {isOpen, close, open} = useDisclouser()
        const [selectedContact, setSelectedContact] = useState(null)
      

  const deleteContact = async(id)=>{
    try {
      const contactRef = doc(db, "contacts", id)
   await deleteDoc(contactRef) 
   toast.success("Deleted Contact Successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {
      contacts.length <= 0 ? <NotFoundContact/> : contacts.map((contact)=>
         <div key={contact.id} className='bg-yellow-100 flex justify-between items-center p-3 rounded-lg mt-4'>
        <div className='flex gap-2'>
            <FaRegUserCircle className='text-5xl cursor-pointer text-amber-500'/>
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
          </div>
        </div>
          <div className='flex text-2xl gap-3'>
            <RiEditCircleLine onClick={()=>{
              setSelectedContact(contact)
               open() }}  className='cursor-pointer'/>
            <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-amber-500 cursor-pointer'/>
          </div>
        </div>
        )}
        <AddUpdateComponent contact = {selectedContact} isUpdate = {!!selectedContact} isOpen={isOpen} close={close}/>
     </div>
  )
}
