import "./App.css";
import { Starter } from "./components/Starter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Ststarter } from "./components/Ststarter";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  return (
    <div>
      {/* <Starter /> */}
      <Ststarter />
    </div>
  )
}

export default App