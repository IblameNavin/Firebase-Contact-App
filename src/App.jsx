  import React, { useEffect, useState } from 'react'
  import "./App.css"
  import { Navbar } from "./components/Navbar"
  import { collection, onSnapshot } from 'firebase/firestore';
  import { db } from './config/firebase';
  import { ContactCard } from './components/ContactCard';
  import { InputField } from './components/InputField';
import { AddUpdateComponent } from './components/AddUpdateComponent';
import { useDisclouser } from './hooks/useDisclouser';

  import { ToastContainer, toast } from 'react-toastify';


  export const App = () => {

    const [contacts, setContacts] = useState([])
    const {isOpen, open, close} = useDisclouser()

  
    useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        close()


   onSnapshot(contactsRef, (snapShot) =>{
           const contactLists = snapShot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setContacts(contactLists);
        return contactLists
      })
      
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
        <ToastContainer position='bottom-center'/>
      </div>
    )
  }
