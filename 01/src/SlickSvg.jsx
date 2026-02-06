import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP)

const SlickSvg = () => {

    let path = "M 10 100 Q 250 100 490 100"

    let finalPath = "M 10 100 Q 250 100 490 100" 

    useEffect(() => {
      const string = document.querySelector("#string");
  
      if (string) {
        const handleMouseEnter = (e) => {
          path = `M 10 100 Q ${e.x} ${e.y} 490 100`

          gsap.to("svg path", {
            attr: { d: path },
            duration: 0.2,
            ease: "power3.out"
          })
        };
  
        const handleMouseLeave = () => {
          gsap.to("svg path", {
            attr: {d: finalPath },
            duration: 1.5,
            ease: "elastic.out(1,0.2)"
          })
        };
  
        string.addEventListener("mousemove", handleMouseEnter);
        string.addEventListener("mouseleave", handleMouseLeave);
  
        return () => {
          string.removeEventListener("mouseenter", handleMouseEnter);
          string.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, []);
  

    useGSAP(()=>{

    })

  return (
    <div id="string" className="h-80 flex justify-center items-center bg-blue-600">
      <svg className="bg-red-600" width="500" height="200" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 100 Q 250 100 490 100" stroke="black" fill="transparent" />
      </svg>
    </div>
  );
};

export default SlickSvg;
