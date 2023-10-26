import { BsArrowRightShort,BsArrowLeftShort } from "react-icons/bs"
import Link from "next/link";

export default function BlogSlide({data}){
    const id=''+Math.random();

    const nextslide=()=>{
        let element=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft+400;
    }
    
    const prevslide=()=>{
        let element=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft-400;
    }

    return(
        <>
            <div className="flex items-center text-bgPrimary">
                <BsArrowLeftShort size={40} onClick={()=>prevslide()} className='z-10 hidden sm:block mr-[-40px] text-txtPrimary bg-bgPrimary border border-gray-500 rounded-[5px]'/>

                <div id={`${id}`} className="w-[100%] flex justify-start items-start scrollbar-hide overflow-x-scroll py-4 scroll-smooth">
                    {
                        data.map((item,i)=>{
                            return(
                                <div style={{backgroundImage:`linear-gradient(45deg,rgba(180,180,180,0.2),rgba(180,180,180,0.2)),
                                    url(${item.img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}
                                    className="p-10 rounded-md mx-3 w-[320px] min-w-[320px]">
                                    <p>{item.title}</p>
                                    <Link href='#'>Read</Link>
                                </div>
                            )
                        })
                    }
                </div>

                <BsArrowRightShort size={40} onClick={()=>nextslide()} className='z-10 hidden sm:block ml-[-40px] scrollBtn text-txtPrimary bg-bgPrimary border border-gray-500 rounded-[5px]'/>
            </div>

        </>
    )
}