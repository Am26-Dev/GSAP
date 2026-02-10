import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { useRef } from "react";
import { assests } from "../assets/assests";
import "./StTwo.css"

export const StTwo = () => {

    useGSAP(()=>{
        gsap.utils.toArray(".main1").forEach((container) => {
            const scaleTl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "Top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                    markers: true,
                },
            });

            scaleTl.from(container, {
                scale: 0.5,
            }, {
                scale: 2,
                ease: "none",
            })
            .to(container, {
                scale: 0.5,
                ease: "none"
            })
        })
    })

    return (
        <div className="main">
            {
                assests.map((item, index)=> (
                    <div className="main1" key={index}>
                        <div className="pic">
                            <img 
                            style={{
                                maxWidth: "760px"
                            }}
                            src={item.image} alt={item.name} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
