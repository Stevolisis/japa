import Link from "next/link";

export default function Header({page}){

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

        <div className="text-xs font-medium flex gap-16">
            <Link href='/' className="border-b border-b-2 border-bgSecondary">Home</Link>
            <Link href='/' className="border-b border-b-2 border-bgSecondary">Jobs</Link>
            <Link href='/' className="border-b border-b-2 border-bgSecondary">Courses</Link>
            <Link href='/' className="border-b border-b-2 border-bgSecondary">Blog</Link>
        </div>

        <div className="flex gap-3">
            <Link href='/sign_up' className="font-semibold text-xs py-2 px-12 border border-gray-700 rounded-[4px]">Sign Up</Link>
            <Link href='/log_in' className="font-semibold text-sm py-2 px-12 rounded-[4px] bg-bgSecondary text-bgPrimary">Sign In</Link>
        </div>

      </header>
      }

    </>
  )
}