import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export const TextAnimation = () => {

    const [fClutter, setFClutter] = useState("")

    useEffect(() => {
        let breakText = () => {
            let h1 = document.querySelector("h1");
            let h1Text = h1.textContent;

        console.log(h1Text);

        let splitted = h1Text.split("")
        console.log(splitted);
        let halfValue = Math.floor(splitted.length/2)
        let newClutter = "";
        splitted.forEach((e, idx)=>{
            if(idx < halfValue){
                newClutter += `<span class="a">${e}<span/>`
                setFClutter(newClutter)
            }else{
                newClutter += `<span class="b">${e}<span/>`
            }
        })

        h1.innerHTML = newClutter
        }
        breakText()

        gsap.from("h1 .a",{
            y:50,
            duration:0.8,
            delay: 0.5,
            opacity:0,
            stagger: 0.15,
        })

        gsap.from("h1 .b",{
            y:50,
            duration:0.8,
            delay: 0.5,
            opacity:0,
            stagger: -0.15,
        })

    }, []);

    console.log(fClutter);


    return (
    <div className='h-[100vh] flex justify-center items-center text-white text-6xl font-semibold'>
        <h1 className='overflow-y-hidden'>TextAnimations</h1>
    </div>
    )
}
