"use client";
import AuthModal from '@/components/AuthModal';
import React, { useEffect, useState } from 'react'

const ModalProvider= () => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null;
    }

  return (
    <div className=''>
        <AuthModal/>
    </div>
  )
}

export default ModalProvider