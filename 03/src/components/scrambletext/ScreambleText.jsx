import { useRef, useState } from "react"
import { gsap } from "gsap"

export const ScreambleText = () => {

    const textRef = useRef(null);
    const [currIdx, setCurrIdx] = useState(0)

    let texts = [
        "Scramble or unscramble text progressively.",
        "Use specific chars like 'XO' or use only numbers, UPPERCASE or lowercase.",
        "Even add a class to the new or old text."
    ]

    const handleNext = () => {

        const nextIdx = (currIdx + 1) % texts.length;
        setCurrIdx(nextIdx);

        gsap.to(textRef.current, {
            scrambleText: {
                text: texts[nextIdx],
                chars: "upperAndLowerCase",
                revealDelay: 0.1,
                tweenLength: true,
                newClass: currIdx == 2 ? "border" : ""
            },
            ease: "power2.inOut",
            overwrite: "auto",
            duration: 4
        })
    }


    return (
        <div className="bg-[#EEF1FF] w-full py-44 min-h-screen px-4  flex items-center justify-center overflow-x-hidden">
            <div className="flex flex-col max-w-4xl  gap-4 items-center text-center w-full">
                <h1 ref={textRef} className="text-[#3D4E99] font-semibold text-4xl break-word">
                    Scramble or unscramble text progressively.
                </h1>
                <button 
                onClick={handleNext}
                className="bg-[#7E89DC] px-8 py-2 text-2xl rounded-4xl font-semibold text-[#EEF1FF] border-white border-4 cursor-pointer max-w-32">Next</button>
            </div>
        </div>
    )
}
