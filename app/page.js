"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <main className=" pt-12 sm:pt-20 flex justify-center items-center flex-col text-center text-txtPrimary">
        
      <div className='absolute right-[10vw] top-[7vh] sm:right-[20vw] sm:top-[10vh]'>
        <Image
          src='/yellow_circle.png'
          alt='yellow_circle'
          width={90}
          height={90}
        />
      </div> 

      <div className='absolute left-[2vw] sm:left-[10vw] sm:top-[50vh]'>
        <Image
          src='/pink_circle.png'
          alt='pink_circle'
          width={40}
          height={40}
          className='w-5 h-5 sm:w-10 sm:h-10'
        />
      </div> 

      <div className='absolute right-[9vw] bottom-[13vh] sm:right-[29vw] sm:bottom-[10vh]'>
        <Image
          src='/blue_circle.png'
          alt='blue_circle'
          width={20}
          height={20}
        />
      </div> 

      <div>
        <h2 className='text-3xl font-semibold pb-5'>
          Log In
        </h2>
        <p className='text-sm w-[234px]'>
          Are you ready to take the next step towards a succesful future?
        </p>
      </div>

      <form className='pt-2 text-xs w-[80vw] sm:w-[60vw] md:w-[40vw]' onSubmit={(e)=>handleSubmit(e)}>
        <div className='pt-5'>
          <p className='text-left pb-1'>Email Address</p>
          <input className='w-full p-3 border border-txtinput rounded-[5px]' name='email' type='email' placeholder='e.g: Samuel John'/>
        </div>

        <div className='pt-5'>
          <p className='text-left pb-1'>Password</p>
          <input className='w-full p-3 border border-txtinput rounded-[5px]' name='password' type='email' placeholder='Your Password'/>
          <p className='text-right pt-1'><Link href='#' className='text-bgSecondary font-medium'>Forgot Password?</Link></p>
        </div>

        <button className='bg-bgSecondary text-bgPrimary w-full mt-7 py-3 rounded-[5px] px-4 font-semibold'>Log In</button>

      </form>


      <div className='text-xs pt-16'>
        <p>Don't have an account? <Link className='text-bgSecondary font-medium' href='/sign_up'>Sign Up</Link></p>
      </div>

    </main>
  )
}
