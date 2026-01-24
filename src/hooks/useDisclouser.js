import React, { useState } from 'react'

export const useDisclouser = () => {

      const [isOpen, setIsOpen] = useState(false)
    
        const open = ()=>{
          setIsOpen((prev)=>!prev)
        }
    
        const close = ()=>{
          setIsOpen((prev)=>!prev)
        }
      
    
  return {isOpen, close, open}
   
}
