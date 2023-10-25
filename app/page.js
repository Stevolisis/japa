"use client"
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Home() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 500100,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    className:'w-[100px]'
  })

  function handleSubmit(e){
    e.preventDefault();
    axios.post('https://nice-story-production.up.railway.app/api/v1/auth/login',{
      email:email,
      password:password,
    })
    .then(res=>{
      console.log(res);
      Toast.fire({
        icon: 'success',
        title: 'Log In Successful'
    });
    }).catch(err=>{
      console.log(err);
      Toast.fire({
        icon: 'error',
        title: 'Error Occured!'
      });
    })
  }

  return (
    <main className=" pt-12 sm:pt-20 flex justify-center items-center flex-col text-txtPrimary">
        
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

      <div className='text-center'>
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
          <input className='w-full p-3 border border-txtinput rounded-[5px]' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type='email' required='required' placeholder='e.g: Samuel John'/>
        </div>

        <div className='pt-5'>
          <p className='text-left pb-1'>Password</p>
          <input className='w-full p-3 border border-txtinput rounded-[5px]' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' type='password' required='required' placeholder='Your Password'/>
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
