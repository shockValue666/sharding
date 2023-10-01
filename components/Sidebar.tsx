"use client";
import React, { useMemo } from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Box from './Box';
import SidebarItem from './SidebarItem';
import LogInOrSignUp from './LogInOrSignUp';

interface SidebarProps{
    children:React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {

  const pathname=usePathname()
  console.log("pathname: ",pathname)
  const routes = useMemo(()=>[
    {
      icon:HiHome,
      label:"Home",
      active:pathname !== "/search",
      href:"/"
    },{
      icon:BiSearch,
      label:"Search",
      active:pathname == "/search",
      href:"/search"
    }
  ],[pathname])

  return (
    <div className='flex flex-col  '>
      <div className='hidden md:flex gap-y-2 bg-black p-2 '>
        <Box className='flex-1 w-1/3 text-white font-bold text-[28px] px-8 py-3 '>
            Shard
        </Box>
        {/* poutsa */}
        <Box className=" flex-2 w-2/5">
          <div className='flex gap-y-4 px-5 py-4 '>
            main
            {
              routes.map((item)=>(
                <SidebarItem 
                  key={item.label}
                  Icon={item.icon}
                  {...item}
                />
              ))
            }
          </div>
        </Box>
        <Box className='flex-1 w-1/3'>
          {/* <Library/> */}
          <LogInOrSignUp/>
        </Box>
      </div>
      {/* <main className='h-full flex-1 overflow-y-auto py-2 border border-yellow-00'> */}
      {/* <main className='h-full flex-1 overflow-y-auto border-4 border-red-500'>
        {children}
      </main> */}
    </div>
  )
}

export default Sidebar