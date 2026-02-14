import { assests2 } from "../../assets/assests2";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef } from "react";
import gsap from "gsap";

export const PersT = () => {

  const containerRef = useRef(null)

  useGSAP(()=>{
    const stickySection  = gsap.utils.toArray("[data-section]")
    const lastSection = stickySection[stickySection.length - 1];

    stickySection.forEach((item, index) => {
      const nextSection = stickySection[index + 1]
      const image = item.querySelector('img')

      ScrollTrigger.create({
        trigger: item,
        start: "top top",
        endTrigger: lastSection,
        end: "bottom top",
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

            gsap.set(item, {
              scale: 1- progress + 0.4,
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
            assests2.map((item, index) => (
                <section 
                data-section 
                key={index} 
                className={`flex h-screen flex-col gap-25 px-5 py-16 lg:px-10 lg:py-20 text-white ${item.bgColor}`}>

                    <div className="flex justify-between">
                      <h3 className="text-[15vw] leading-none font-bold lg:text-[7vw]">{item.title}</h3>
                    </div>

                    <div className="flex h-full justify-between max-md:flex-col">

                      <p className="w-full self-end text-2xl lg:w-1/3">{item.description}</p>

                      <div className="flex h-full w-full gap-5 self-end max-md:flex-col lg:w-1/3">

                        <span className="invisble text-[4vw] leading-none font-bold lg:visible">{item.number}</span>

                        <div className="relative h-full w-full overflow-hidden">

                          <img src={item.image} alt="" className="scale-140 object-cover h-fit w-full"/>

                        </div>
                      </div>
                    </div>

                </section>
            ))
        }
    </div>
  )
}
