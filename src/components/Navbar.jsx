import React from 'react'
import firebaseImg from "../assets/firebase.svg"
import contactImg from "../assets/contact.png"

export const Navbar = () => {
  return (
    <div className='h-[60px] gap-2 bg-white m-8 border rounded-lg flex justify-center items-center text-xl font-medium my-4'>
            <img src={firebaseImg} alt="" />
            <h1>Firebase Contact App</h1>
    </div>
  )
}
