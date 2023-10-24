"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="pt-20 flex justify-center items-center flex-col text-center text-txtPrimary">
        <div>
          <h2 className='text-2xl font-semibold pb-5'>
            Log In
          </h2>
          <p className='text-sm w-[234px]'>
            Are you ready to take the next step towards a succesful future?
          </p>
        </div>

      <form className='pt-2 text-xs w-[50vw]'>
        <div className='pt-5'>
          <p className='text-left pb-1'>Email Address</p>
          <input className='w-full p-3 border border-txtinput rounded-[5px]' type='email' placeholder='e.g: Samuel John'/>
        </div>
        <div className='pt-5'>
          <p className='text-left pb-1'>Password</p>
          <input className='w-full p-3 border border-txtinput rounded-[5px]' type='email' placeholder='Your Password'/>
          <p className='text-right pt-1'><Link href='#' className='text-bgSecondary font-medium'>Forgot Password?</Link></p>
        </div>
        <button className='bg-bgSecondary text-bgPrimary'>Log In</button>
      </form>

    </main>
  )
}
