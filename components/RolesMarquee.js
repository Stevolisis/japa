import { PiStarFourFill } from "react-icons/pi"


export default function RolesMarquee({data}){

    return(
        <>
            <div class="animate-marquee whitespace-nowrap flex items-center">
                {
                    data.map((role,i)=>{
                        return(
                            <div className="flex items-center" key={i}><span class="text-xl mx-4">{role}</span><PiStarFourFill className="text-4xl mx-2"/></div>
                        )
                    })
                }
            </div>
            <div class="animate-marquee2 whitespace-nowrap flex items-center absolute">
                {
                    data.map((role,i)=>{
                        return(
                            <><span class="text-xl mx-4">{role}</span><PiStarFourFill className="text-4xl mx-2"/></>
                        )
                    })
                }
            </div>
        </>
    )
}