import React from 'react'
import { Modal } from './Modal'
import { Formik, Form, Field } from 'formik'

export const AddUpdateComponent = ({isOpen, close}) => {
  return (
    <Modal isOpen = {isOpen} open = {open} close = {close}> 
          <Formik 
          initialValues={{name: "", email: ""}} onSubmit={(values)=> console.log(values)}>
            <Form className = "flex flex-col gap-3" >
           <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
           <Field name = "name"  className = "h-10 border"/>
           </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
           <Field name = "email"  className = "h-10 border"/>
           </div>
           <button className='bg-orange px-3 py-1.5 border self-end'>Add Contact</button>
            </Form>
          </Formik>
        </Modal>
  )
}
