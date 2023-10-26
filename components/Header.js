import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi';

export default function Header({page}){
  const [menuStatus,setMenuStatus]=useState(false);

  return(
    <>
      
      {page !== 'home' ? <header className=' p-7 pb-5'>
        <h1 className='text-bgSecondary text-2xl'>
          <Link href='/' className='font-extrabold'>JAPA</Link>
        </h1>
      </header> : 

      <header className="flex justify-between items-center px-7 py-5">
        <div>
            <h1 className='text-bgSecondary text-2xl'>
              <Link href='/' className='font-extrabold'>JAPA</Link>
            </h1>
        </div>

        <div className="hidden text-xs font-medium sm:flex gap-7 md:gap-16">
            <Link href='/' className="border-b-2 border-bgSecondary">Home</Link>
            <Link href='/#jobs'>Jobs</Link>
            <Link href='/#courses'>Courses</Link>
            <Link href='/#blog'>Blog</Link>
        </div>

        <div className="hidden sm:flex gap-3">
            <Link href='/sign_up' className="font-semibold text-xs py-2 px-9 md:px-12 border border-gray-700 rounded-[4px]">Sign Up</Link>
            <Link href='/log_in' className="font-semibold text-sm py-2 px-9 md:px-12 rounded-[4px] bg-bgSecondary text-bgPrimary">Sign In</Link>
        </div>

        <div className="block sm:hidden">
        {menuStatus ? 
        <IoMdClose size={22} onClick={()=>setMenuStatus(!menuStatus)} className='cursor-pointer'/> 
        : <FiMenu size={22} onClick={()=>setMenuStatus(!menuStatus)} className='cursor-pointer'/>}
        </div>

        {menuStatus &&
          <div className="z-20 absolute right-2 top-24 text-bgPrimary font-medium bg-bgSecondary p-7 pt-10 w-[200px] rounded-md text-[13px]">
            <Link href='/' className="block">Home</Link>
            <Link href='/' className="block my-3 ">Jobs</Link>
            <Link href='/' className="block my-3 ">Courses</Link>
            <Link href='/' className="block my-3 ">Blog</Link>
            <Link href='/sign_up' className="block mt-3 py-2 px-3 -mx-1 text-center bg-bgPrimary text-bgSecondary rounded">Sign Up</Link>
            <Link href='/sign_in' className="block mt-3 py-2 px-3 -mx-1 text-center bg-bgPrimary text-bgSecondary rounded">Sign In</Link>
          </div>
        }

      </header>
      }

    </>
  )
}