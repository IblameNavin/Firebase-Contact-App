import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ContactCard } from "./components/ContactCard";
import { InputField } from "./components/InputField";
import { AddUpdateComponent } from "./components/AddUpdateComponent";
import { useDisclouser } from "./hooks/useDisclouser";
import { ToastContainer } from "react-toastify";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, open, close } = useDisclouser();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const contactsRef = collection(db, "contacts");

    // Real-time listener
    const unsubscribe = onSnapshot(
      contactsRef,
      (snapShot) => {
        const contactLists = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Apply search filter if there's a value
        if (searchValue.trim() !== "") {
          setContacts(
            contactLists.filter((contact) =>
              contact.name.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        } else {
          setContacts(contactLists);
        }
      },
      (error) => {
        console.error("Failed to fetch contacts:", error);
      }
    );

    return () => unsubscribe(); // Clean up listener on unmount
  }, [searchValue]); // Re-run if searchValue changes

  // Handle input changes
  const filterContacts = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="mx-auto max-w-[570px]">
      <Navbar />
      <InputField open={open} filterContacts={filterContacts} />
      <ContactCard contacts={contacts} />
      <AddUpdateComponent close={close} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </div>
  );
};
