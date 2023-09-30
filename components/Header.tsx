"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge';
import {RxCaretLeft,RxCaretRight} from 'react-icons/rx'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { FaUserAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


interface HeaderProps{
    children:React.ReactNode;
    className?:string;
}

const Header:React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    const {onOpen} = useAuthModal()
    const {user} = useUser();
    const supabaseClient = useSupabaseClient();

    const handleLogout = async () =>{
        const {error} = await supabaseClient.auth.signOut();
        router.refresh();

        if(error){
            toast.error(error.message)
        }else{
            toast.success("logged out!")
        }
    }
    useEffect(()=>{
        if(user){
            console.log("userrrrrr: ",user)
        }else{
            console.log("not user currently")
        }
    },[user])
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6 border border-white`,className)}>
        <div className='w-full mb-4 flex items-center justify-between'>
            <div className='hidden md:flex gap-x-2 items-center'>
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={()=>router.back()}>
                    <RxCaretLeft className="text-white" size={35}/>
                </button>
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"  onClick={()=>router.forward()}>
                    <RxCaretRight className="text-white" size={35}/>
                </button>
            </div>
            {/* visible only to mobile users */}
            <div className='flex md:hidden gap-x-2 items-center'>
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <HiHome size={20} className="text-black"/>
                </button>
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <BiSearch size={20} className="text-black"/>
                </button>
            </div>
            
            
        </div>
        {children}
    </div>
  )
}

export default Header