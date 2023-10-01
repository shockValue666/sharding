"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useUser } from '@/hooks/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import useAuthModal from '@/hooks/useAuthModal';
import ConnectButton from './ConnectButton';
import { useAccount, useBalance } from 'wagmi'


const LogInOrSignUp = () => {
    const {user} = useUser();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {onOpen} = useAuthModal()
    const account = useAccount();
    const balance = useBalance()
    const [address,setAddress] = useState("")

    useEffect(()=>{
        if(account.address){
            setAddress(account.address)
        }
        if(account && balance){
            console.log("account: ",account.address, " balance: ",balance.data)
        }
    },[account,balance])



    const handleLogout = async () =>{
        const {error} = await supabaseClient.auth.signOut();
        router.refresh();

        if(error){
            toast.error(error.message)
        }else{
            toast.success("logged out!")
        }
    }


  return (
    <div className='flex justify-evenly items-center gap-x-4'>
        <ConnectButton className='bg-white px-6 py-2'/>
                {
                    user && address ? (
                        <div className='flex gap-x-4 items-center justify-end'>
                            <Button
                                onClick={handleLogout}
                                className='bg-white px-6 py-2'
                            >
                                Logout
                            </Button>
                            <Button onClick={()=>router.push('/account')} className='bg-white'>
                                {/* <FaUserAlt/> */}
                                <Avatar>
                                    <AvatarImage src={user.user_metadata.avatar_url} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                            </Button>
                            <p className='text-white'>{address}</p>
                        </div>
                    ):
                    (
                        <>
                            <div className='py-3'>
                                <Button
                                    className='bg-transparent text-neutral-300 font-medium'
                                    onClick={()=>{onOpen()}}
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className='bg-white px-6 py-2'
                                    onClick={()=>{onOpen()}}
                                >
                                    Log In
                                </Button>
                            </div>
                        </>
                    )
                }
            </div>
  )
}

export default LogInOrSignUp