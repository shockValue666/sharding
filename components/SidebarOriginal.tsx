"use client";
import React, { useMemo } from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';

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
    <div className='flex h-full border-8 border-yellow-600 '>
    {/* <div className='flex flex-col h-full border-8 border-yellow-600 '> */}
      <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2 border border-green-500'>
      {/* <div className='hidden md:flex gap-y-2 bg-black p-2 border border-green-500'> */}
        {/* poutsa */}
        <Box>
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
        <Box className='overflow-y-auto h-full '>
          <Library/>
        </Box>
      </div>
      {/* <main className='h-full flex-1 overflow-y-auto py-2 border border-yellow-00'> */}
      <main className='h-full flex-1 overflow-y-auto border-4 border-red-500'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar