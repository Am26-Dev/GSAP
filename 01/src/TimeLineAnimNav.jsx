import { useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP)

export const TimeLineAnimNav = () => {

    const tlRef = useRef()

    useGSAP(()=>{
        tlRef.current = gsap.timeline()

        tlRef.current.to("#full",{
            right:0,
            duration: 0.5
        })

        tlRef.current.from("#full h4", {
            x:150,
            duration:0.4,
            stagger: 0.2,
            opacity:0,
        })

        tlRef.current.from("#full #icon",{
            opacity:0,
        })

        tlRef.current.pause()
    })

    const reverseIt = () =>{
        tlRef.current.reverse()
    }

    const playIt = () =>{
        tlRef.current.play()
    }


    return (
    <main className='h-[100vh] w-[100%] bg-pink-400 '>
        <div id="nav" className='flex items-center justify-between px-[50px] py-[40px] text-white'>
            <h2 className='text-2xl font-semibold'>Timline Animation</h2>
            <FaBars onClick={playIt} className='text-white cursor-pointer'/>
        </div>

        <div id="full" className='h-[100vh] w-[40%] bg-white absolute bg-opacity-55 top-0 right-[-40%] backdrop:blur-lg px-[50px] py-[100px]'>
            <h4 className='text-5xl font-medium mb-[10px]'>Work</h4>
            <h4 className='text-5xl font-medium mb-[10px]'>About</h4>
            <h4 className='text-5xl font-medium mb-[10px]'>Courses</h4>
            <h4 className='text-5xl font-medium mb-[10px]'>Services</h4>
            <h4 className='text-5xl font-medium mb-[10px]'>Contact us</h4>

            <IoMdClose onClick={reverseIt} id='icon' className='absolute top-[5%] right-[10%] bg-white h-10 w-10 rounded-full p-2 text-xl cursor-pointer' />
        </div>
    </main>
  )
}
