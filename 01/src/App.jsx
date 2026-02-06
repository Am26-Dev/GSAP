import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import SlickSvg from "./SlickSvg";
import { TimeLineAnimNav } from "./TimeLineAnimNav";
import { TextAnimation } from "./TextAnimation";
import { TextScroll } from "./TextScroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const conRef = useRef();

  // useGSAP(()=>{
  //   gsap.to("#page2 h1", {
  //     transform: "translate(-150%)",
  //     scrollTrigger: {
  //       trigger: "#page2",
  //       // scroller: "body",
  //       markers: true,
  //       start: "top 0%",
  //       end: "top -100%",
  //       scrub: 2,
  //       pin: true,
  //     }
  //   })
  // })

  return (
    <>
      {/* <main>
        <div id="page1" className="h-[100vh]  bg-blue-500">
          <div id="box"></div>
        </div>
        <div id="page2" className="h-[100vh] w-[100%] bg-blue-600 p-[5vw] overflow-x-hidden">
          <h1 className="text-[36vw] text-black">EXPERIENCES</h1>
        </div>
        <div id="page3" className="h-[100vh] w-full bg-blue-700">
          <div id="box"></div>
        </div>
      </main> */}

      {/* <SlickSvg /> */}

      {/* <TimeLineAnimNav /> */}

      <TextAnimation />

      <TextScroll />
    </>
  );
};

export default App;
