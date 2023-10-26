"use client"

import Header from "@/components/Header"

export default function Home() {

  return (
    <>
      <Header page='home'/>
      <main>
        <div className="text-bgPrimary h-[80vh] flex justify-center items-center flex-col bg-slate-500" 
        style={{backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)),
        url(http://localhost:3000/splash5.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
          
          <div>
            <h1>Find your dream job!</h1>
          </div>
          <div>
            <form>
              <div>
                <p>Role</p>
                <input type="text" placeholder="Name of role"/>
              </div>
              <div>
                <p>Field</p>
                <select>
                  <option>Job Category</option>
                  <option>Data Analysis</option>
                  <option>Ui/Ux Design</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                </select>
              </div>
              <div>
                <p>Location</p>
                <select>
                  <option>Afghanistan</option>
                  <option>Argetina</option>
                  <option>Belgium</option>
                  <option>Canada</option>
                </select>
              </div>
              <button className="font-medium text-sm py-2 px-9 rounded-[4px] bg-bgSecondary text-bgPrimary">Search</button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
