import { assets2 } from "../../assets/assets2";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef } from "react";
import gsap from "gsap";

export const PersT = () => {

  const containerRef = useRef(null)

  useGSAP(()=>{
    const stickySections = gsap.utils.toArray("[data-section]")
    const lastSection = stickySections[stickySections.length - 1];

    stickySections.forEach((section, index) => {
      const nextSection = stickySections[index + 1]
      const image = section.querySelector('img')

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          if(image) {
            gsap.set(image, {
              scale: 1.4 - self.progress * 0.4,
            })
          }
        }
      })

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        endTrigger: lastSection,
        end: "top top",
        pin: true,
        pinSpacing: false,
      })

      if(nextSection){
        ScrollTrigger.create({
          trigger: nextSection,
          start: "top bottom-=10%",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const isEven = index % 2 === 0;

            gsap.set(section, {
              scale: 1 - progress * 0.4,
              borderRadius: progress * 80,
              visibility: progress > 0.99 ? "hidden" : "visible",
              rotate: isEven ? progress * -10 : progress * 10,
            })
          }
        })
      }
    })

  }, {scope: containerRef})


  return (
    <div className="flex flex-col gap-[25vh]" ref={containerRef}>
        {
            assets2.map((item, index) => (
                <section 
                data-section 
                key={index} 
                className={`sec1 flex h-screen flex-col text-white ${item.bgColor}`}>

                    <div className="div1">
                      <h3 className="text-4xl  font-bold leading-none lg:text-8xl">{item.title}</h3>
                    </div>

                    <div className="flex h-full justify-between max-md:flex-col">

                      <p className="w-full self-end text-2xl lg:w-1/3">{item.description}</p>

                      <div className="flex h-full w-full gap-5 self-end max-md:flex-col lg:w-1/3">

                        <span className="invisble text-[4vw] leading-none font-bold lg:visible">{item.number}</span>

                        <div className="relative w-full h-screen">
                          <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover"/>
                        </div>

                      </div>

                    </div>

                </section>
            ))
        }
    </div>
  )
}
