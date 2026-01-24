import React from "react";
import { Modal } from "./Modal";
import { Formik, Form, Field } from "formik";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const AddUpdateComponent = ({
  isOpen,
  close,
  isUpdate,
  contact,
}) => {
  const addContact = async (values) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, values);
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (id, values) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <Formik
        enableReinitialize
        initialValues={{
          name: contact?.name || "",
          email: contact?.email || "",
        }}
        onSubmit={async (values) => {
          if (isUpdate && contact?.id) {
            await updateContact(contact.id, values);
          } else {
            await addContact(values);
          }
          close();
        }}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              type="text"
              className="h-10 border"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className="h-10 border"
            />
          </div>

          <button
            type="submit"
            className="bg-orange px-3 py-1.5 border self-end cursor-pointer"
          >
            {isUpdate ? "Update" : "Add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};
