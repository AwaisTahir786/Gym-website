"use client";

import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import MobileView from './MobileView';
import Image from 'next/image';
import Link from 'next/link';
import {MdMenu} from "react-icons/md"

const Header = () => {

  const [headerActive, setHeaderActive] = useState(false);
  const [isopen, setIsopen]=useState(false)

  useEffect(() => {
      const handleScroll = () => {
          setHeaderActive(window.scrollY > 50); // Use window.scrollY to get the vertical scroll position
      };
  
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Remove scroll event listener on component unmount
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, [headerActive]);

  console.log(headerActive)
  
  return (
    <header className={` ${headerActive ? "lg:h-[100px] " : "lg:h-[124px]"} fixed w-full top-0 bg-primary-200 transition-all z-50`}>
        <div className='container mx-auto flex flex-row items-center h-[100px] justify-between '>
          {/* logo  */}
          <Link href="">
          <Image src="/assets/img/logo.png" alt="logo" width={117} height={55} />
          </Link>

          {/* Mobile nav hidden on  large devices */}
        <MobileView containerStyles={` ${isopen ? "" : "hidden"} lg:hidden uppercase cursor-pointer text-white text-center flex flex-col fixed left-0 top-[20px] gap-8 py-10 mt-20 w-full fixed bg-primary-200`}/>

        {/* desktop nav hidden on mobile devices  */}
      <Nav containerStyles="flex flex-row gap-4 text-base uppercase font-medium transtion-all hidden lg:flex text-white"/>

      {/* hide/open menu bar  */}
      <div className='flex gap-10 flex-row '>
        <div className='flex gap-4 text-white items-center'>
           <button className='hover:text-accent transition-all text-base font-medium uppercase'>Login</button>
        <button className='hover:text-accent transition-all text-base font-medium uppercase'>SignIn</button></div>
       
        <button className='text-white lg:hidden' onClick={()=>setIsopen(!isopen)}>
          <MdMenu className='text-4xl' />
        </button>
      </div>
    </div>

    </header>
  
  )
}

export default Header;