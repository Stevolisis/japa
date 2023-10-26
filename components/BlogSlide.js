import { BsArrowRightShort,BsArrowLeftShort } from "react-icons/bs"
import Link from "next/link";

export default function BlogSlide({data}){
    const id=''+Math.random();

    const nextslide=()=>{
        let element=document.getElementById(`${id}`)||'';
        element.scrollLeft=element.scrollLeft+400;
    }
    
    const prevslide=()=>{
        let element=document.getElementById(`${id}`)||'';
        element.scrollLeft=element.scrollLeft-400;
    }

    return(
        <>
            <div className="flex items-center text-bgPrimary">
                <BsArrowLeftShort size={40} onClick={()=>prevslide()} className='z-10 hidden cursor-pointer sm:block mr-[-40px] text-txtPrimary bg-bgPrimary border border-gray-500 rounded-[5px]'/>

                <div id={`${id}`} className="w-[100%] flex justify-start items-start scrollbar-hide overflow-x-scroll py-4 scroll-smooth">
                    {
                        data.map((item,i)=>{
                            return(
                                <div key={i} style={{backgroundImage:`linear-gradient(45deg,rgba(50,50,50,0.2),rgba(50,50,50,0.2)),
                                    url(${item.img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}
                                className="flex flex-col justify-between items-end px-10 py-7 rounded-md mx-2 w-[340px] min-w-[340px] h-[220px]">

                                    <div><p className="text-xl font-medium">{item.title}</p></div>
                                    <div>
                                        <Link href='#' className="py-3 px-10 text-txtPrimary bg-bgPrimary font-semibold text-sm rounded-[5px]">Read</Link>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <BsArrowRightShort size={40} onClick={()=>nextslide()} className='z-10 hidden cursor-pointer sm:block ml-[-40px] scrollBtn text-txtPrimary bg-bgPrimary border border-gray-500 rounded-[5px]'/>
            </div>

        </>
    )
}