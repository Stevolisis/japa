"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function SignUp() {

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <main className=" pt-12 sm:pt-20 flex justify-center items-center flex-col text-center text-txtPrimary">
        
      <div className='absolute right-[10vw] top-[7vh] sm:right-[20vw] sm:top-[10vh]'>
        <Image
          src='/blue_circle.png'
          alt='blue_circle'
          width={90}
          height={90}
        />
      </div> 

      <div className='absolute left-[2vw] sm:left-[10vw] sm:top-[50vh]'>
        <Image
          src='/yellow_circle.png'
          alt='yellow_circle'
          width={40}
          height={40}
          className='w-5 h-5 sm:w-10 sm:h-10'
        />
      </div> 

      <div className='absolute right-[9vw] bottom-[10vh] sm:right-[28vw] sm:bottom-[18vh]'>
        <Image
          src='/blue_circle.png'
          alt='blue_circle'
          width={20}
          height={20}
        />
      </div> 

      <div>
        <h2 className='text-3xl font-semibold pb-5'>
          Create Account
        </h2>
        <p className='text-sm w-[234px]'>
          Are you ready to take the next step towards a succesful future?
        </p>
      </div>

      <form className='pt-2 text-xs w-[80vw] sm:w-[60vw] md:w-[40vw]' onSubmit={(e)=>handleSubmit(e)}>
        <div className='pt-5 flex justify-between gap-2'>
          <div className='flex-1'>
            <p className='text-left pb-1'>First Name</p>
            <input className='w-full p-3 border border-txtinput rounded-[5px]' name='first_name' type='text' placeholder='Newton Adeola'/>
          </div>

          <div className='flex-1'>
            <p className='text-left pb-1'>Last Name</p>
            <input className='w-full p-3 border border-txtinput rounded-[5px]' name='last_name' type='text' placeholder='Idowu'/>
          </div>
        </div>
        
        <div className='pt-5'>
          <p className='text-left pb-1'>Email Address</p>
          <input className='w-full p-3 border border-txtinput rounded-[5px]' name='email' type='email' required='required' placeholder='e.g: Samuel John'/>
        </div>

        <div className='pt-5 flex justify-between gap-2'>
          <div className='flex-1'>
            <p className='text-left pb-1'>Age Range</p>
            <select name='age_range' required='required' className='w-full p-3 border border-txtinput rounded-[5px]'>
              <option defaultChecked>10 - 18</option>
              <option>10 - 17</option>
              <option>18 - 25</option>
              <option>16 - 32</option>
              <option>Above 32</option>
            </select>
          </div>

          <div className='flex-1'>
            <p className='text-left pb-1'>Gender</p>
            <select name='gender' required='required' className='w-full p-3 border border-txtinput rounded-[5px]'>
              <option defaultChecked>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className='pt-5'>
          <p className='text-left pb-1'>Password</p>
          <input className='w-full p-3 border border-txtinput rounded-[5px]' name='password' type='password' required='required' placeholder='Your Password'/>
        </div>

        <button className='bg-bgSecondary text-bgPrimary w-full mt-7 py-3 rounded-[5px] px-4 font-semibold'>Sign Up</button>

      </form>


      <div className='text-xs pt-16'>
        <p>Already have an account? <Link className='text-bgSecondary font-medium' href='/'>Log In</Link></p>
      </div>

    </main>
  )
}
