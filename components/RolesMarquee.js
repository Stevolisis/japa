

export default function RolesMarquee({data}){

    return(
        <>
            <div class="animate-marquee whitespace-nowrap">
                {
                    data.map((role,i)=>{
                        return(
                            <span class="text-xl mx-4">{role}</span>
                        )
                    })
                }
            </div>

        </>
    )
}