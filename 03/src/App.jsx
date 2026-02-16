import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { useGSAP } from "@gsap/react"

import { ScreambleText } from "./components/scrambletext/ScreambleText"

gsap.registerPlugin(useGSAP, ScrambleTextPlugin)


const App = () => {
  return (
    <div>
      <ScreambleText />
    </div>
  )
}

export default App