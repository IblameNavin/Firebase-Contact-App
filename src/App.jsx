  import React, { useEffect, useState } from 'react'
  import "./App.css"
  import { Navbar } from "./components/Navbar"
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from './config/firebase';
  import { ContactCard } from './components/ContactCard';
  import { InputField } from './components/InputField';
import { AddUpdateComponent } from './components/AddUpdateComponent';


  export const App = () => {

    const [contacts, setContacts] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const open = ()=>{
      setIsOpen((prev)=>!prev)
    }

    const close = ()=>{
      setIsOpen((prev)=>!prev)
    }
  
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
      <InputField open = {open} />
    
        <ContactCard contacts = {contacts}/>
        <AddUpdateComponent close = {close} isOpen = {isOpen} />
      </div>
    )
  }
