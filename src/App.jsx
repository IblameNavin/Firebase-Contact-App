import React, { useEffect, useState } from 'react'
import "./App.css"
import { Navbar } from "./components/Navbar"
import { IoSearchOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import { ContactCard } from './components/ContactCard';


export const App = () => {

  const [contacts, setContacts] = useState([])
 
  useEffect(() => {
  const fetchContacts = async () => {
    try {
      const ref = collection(db, "contacts");
      const snapshot = await getDocs(ref);

      const contacts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setContacts(contacts);
      console.log(contacts)
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  fetchContacts();
}, []);
  


  return (
    <div className='mx-auto max-w-[570px]'>
      <Navbar/>
     <div className='flex gap-2'>
       <div className='flex relative items-center grow'>
        <IoSearchOutline className='text-white text-3xl absolute ml-2'/>
        <input type="text" className='bg-transparent border border-white rounded-md h-10 grow text-white pl-9' />
      </div>
      <div>
      <FaCirclePlus className='text-white text-5xl cursor-pointer ml-2' />
      </div>
     </div>
      <ContactCard contacts = {contacts}/>
    </div>
  )
}
