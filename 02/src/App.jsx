import "./App.css";
import { Starter } from "./components/Starter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 

gsap.registerPlugin(useGSAP);

const App = () => {
  return (
    <div>
      <Starter />
    </div>
  )
}

export default App