"use client"

import Header from "@/components/Header"
import RolesMarquee from "@/components/RolesMarquee"

export default function Home() {
  const roles = ['Front End Developer','UI/UX Designer','Developers','Graphic Designer','SQL Database Administrator','AI Expert','Data Analyst','Cyber Security Expert','Content Creator'];

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

      </main>
    </>
  )
}
