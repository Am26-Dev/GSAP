import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export const TextScroll = () => {

    window.addEventListener("wheel", (e)=>{
        if (e.deltaY > 0) {
            gsap.to(".marque", {
                transform:"translateX(-200%)",
                repeat: -1,
                duration: 4,
                ease: "none",
            })

            gsap.to(".marque img",{
                rotate: 180,
            })
        }else{
            gsap.to(".marque", {
                transform:"translateX(0%)",
                repeat: -1,
                duration: 4,
                ease: "none",
            })
            gsap.to(".marque img",{
                rotate: 0,
            })
        }
    })

    return (
    <main className='h-[100vh] bg-black'>  
        <div id="id1" className='h-[100vh] bg-blue-700'></div>
        <div id="id2" className='h-[100vh]'>
            <div id="move" className='flex py-4 overflow-hidden bg-[#D8FF04]'>
                <div className="marque flex translate-x-[-100%] flex-shrink-0 items-center gap-5 px-10">
                    <h1 className='text-7xl'>THRIVE BEYOND LIMITS</h1>
                    <img className='w-20' src="/arrow-right.png" alt="" />
                </div>
                <div className="marque flex flex-shrink-0 items-center gap-5 px-10">
                    <h1 className='text-7xl'>THRIVE BEYOND LIMITS</h1>
                    <img className='w-20' src="/arrow-right.png" alt="" />
                </div>
                <div className="marque flex flex-shrink-0 items-center gap-5 px-10">
                    <h1 className='text-7xl'>THRIVE BEYOND LIMITS</h1>
                    <img className='w-20' src="/arrow-right.png" alt="" />
                </div>
                <div className="marque flex flex-shrink-0 items-center gap-5 px-10">
                    <h1 className='text-7xl'>THRIVE BEYOND LIMITS</h1>
                    <img className='w-20' src="/arrow-right.png" alt="" />
                </div>
                <div className="marque flex flex-shrink-0 items-center gap-5 px-10">
                    <h1 className='text-7xl'>THRIVE BEYOND LIMITS</h1>
                    <img className='w-20' src="/arrow-right.png" alt="" />
                </div>
            </div>
        </div>
        <div id="id3" className='bg-purple-600 h-[100vh]'></div>
    </main> 
  )
}
