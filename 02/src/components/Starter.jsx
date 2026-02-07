import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const Starter = () => {

    const container = useRef();
    const tl = useRef();

    const toggleTimeline = () => {
        tl.current.reversed(!tl.current.reversed());
    }

    useGSAP(()=>{
        const boxes = gsap.utils.toArray(".box");
        tl.current = gsap
                    .timeline()
                    .to(boxes[0], { x: 250, rotation: 360, backgroundColor: "blue"})
                    .to(boxes[1], { x: -120, rotation: -360, backgroundColor: "white"}, "<")
                    .to(boxes[2], { y: -166, backgroundColor: "yellow"})
                    .to("h2", {y: -160 , rotateX: 360, color: "whiteSmoke" })
                    .reverse();
    }, {scope: container});

    return (
        <div>
            <section className="boxes-container" ref={container}>
                <h2>Use the button to toggle a Timeline</h2>
                <div>
                    <button onClick={toggleTimeline}>TOggle Timeline</button>
                </div>
                <div className="box -gradiet-blue">Box 1</div>
                <div className="box -gradiet-blue">Box 2</div>
                <div className="box -gradiet-blue">Box 3</div>
            </section>
        </div>
    )
}
