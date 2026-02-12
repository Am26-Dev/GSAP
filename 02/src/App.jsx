import "./App.css";
import { Starter } from "./components/Starter";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Ststarter } from "./components/Ststarter";
import { StTwo } from "./components/StTwo";
import { useEffect, useRef } from "react";
import { PersTransition } from "./components/perspective/PersTransition";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {

  const lenisRef = useRef();

  useEffect(()=>{
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])



  return (
    <ReactLenis root options={{ autoRaf: false}} ref={lenisRef}>
      <div>
        {/* <Starter /> */}
        {/* <Ststarter /> */}
        {/* <StTwo /> */}
        <PersTransition />
      </div>
    </ReactLenis>
  )
}

export default App