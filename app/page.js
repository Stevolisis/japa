"use client"
import BlogSlide from "@/components/BlogSlide";
import Header from "@/components/Header"
import Opening from "@/components/Opening";
import RolesMarquee from "@/components/RolesMarquee"
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs"


export default function Home() {
  const roles = ['Front End Developer','UI/UX Designer','Developers','Graphic Designer','SQL Database Administrator','AI Expert','Data Analyst','Cyber Security Expert','Content Creator'];
  const openings = [
    {role:'UI/UX Designer at MTN',type:'Remote',logo:'http://localhost:3000/mtn.png',description:'We are currentky seeking to hire an experienced UI/UX Designer with an extensive and proven  experience who can work in high...'},
    {role:'Web Developer at MTN',type:'Remote',logo:'http://localhost:3000/mtn.png',description:'We are currentky seeking to hire an experienced Web Developer with an extensive and proven  experience who can work in high...'},
    {role:'Mobile Developer at MTN',type:'Remote',logo:'http://localhost:3000/mtn.png',description:'We are currentky seeking to hire an experienced Mobile Developer with an extensive and proven  experience who can work in high...'},
  ];
  const blog = [
    {img:'http://localhost:3000/splash1.jpg',title:'Key Factors to Consider When Job Hunting in 2023'},
    {img:'http://localhost:3000/splash2.jpg',title:'Key Factors to Consider When Job Hunting in 2023'},
    {img:'http://localhost:3000/splash3.jpg',title:'Key Factors to Consider When Job Hunting in 2023'},
    {img:'http://localhost:3000/splash4.jpg',title:'Key Factors to Consider When Job Hunting in 2023'},
    {img:'http://localhost:3000/splash6.jpg',title:'Key Factors to Consider When Job Hunting in 2023'},
    {img:'http://localhost:3000/splash7.jpg',title:'Key Factors to Consider When Job Hunting in 2023'},
  ];






  return (
    <>
      <Header page='home'/>
      <main>

        <div className="text-bgPrimary h-[80vh] flex justify-center items-center flex-col bg-slate-500" 
          style={{backgroundImage:`linear-gradient(45deg,rgba(100,100,100,0.2),rgba(100,100,100,0.2)),
          url(http://localhost:3000/splash5.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
          
          <div className="pb-5">
            <h1 className="text-4xl">Find your dream job!</h1>
          </div>
          <div>
            <form className="flex gap-3 w-full items-end">
              <div>
                <p>Role</p>
                <input className="w-full text-txtPrimary p-3 border border-txtinput rounded-[5px] text-sm" type="text" placeholder="Name of role"/>
              </div>
              <div>
                <p>Field</p>
                <select className="w-full p-3 border border-txtinput rounded-[5px] text-sm text-txtPrimary">
                  <option>Job Category</option>
                  <option>Data Analysis</option>
                  <option>Ui/Ux Design</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                </select>
              </div>
              <div>
                <p>Location</p>
                <select className="w-full p-3 border border-txtinput rounded-[5px] text-sm text-txtPrimary">
                  <option>Afghanistan</option>
                  <option>Argetina</option>
                  <option>Belgium</option>
                  <option>Canada</option>
                </select>
              </div>
              <div>
                <button className="font-medium text-sm py-3 px-9 rounded-[4px] bg-bgSecondary text-bgPrimary">Search</button>
              </div>
            </form>
          </div>
        </div>




        <div className="py-9 bg-[#c8b0ee] relative flex overflow-x-hidden text-bgPrimary">
          <RolesMarquee data={roles}/>
        </div>




        <div className="py-10 px-14">
          <div><h2 className="font-semibold text-2xl">Land your next role with the newest openings</h2></div>
          <div className="grid grid-cols-3 gap-6 py-7">
            <Opening data={openings}/>
          </div>
          <div className="flex items-center">
            <Link href='#' className="rounded-[5px] border-2 border-bgSecondary text-bgSecondary underline py-3 px-10 text-sm font-bold flex items-center">See more Jobs 
              <BsArrowRightShort className="text-xl ml-6"/>
            </Link>
          </div>
        </div>



        <div className="mx-14 my-12 px-16 py-10 flex justify-between items-center rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-black text-bgPrimary">
          <div className="font-semibold text-2xl w-[60%]">
            <h3>Take Our Talent Assessment Exam for Course Recommendations</h3>
            <h3 className="top-12 relative">To get your next role!</h3>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div>
              <Image src='http://localhost:3000/jointhands.webp' alt='patnership' 
                width={250} height={220} className="-mt-20"/>
            </div>
            <div>
              <Link href='#' className="py-3 px-20 text-txtPrimary bg-bgPrimary text-sm rounded-[5px] font-semibold">Take Test</Link>
            </div>
          </div>
        </div>




        <div className="py-10 px-14">
          <div><h2 className="font-semibold text-2xl">See the latest on our Blog</h2></div>
          <BlogSlide data={blog}/>
        </div>

      </main>
    </>
  )
}
