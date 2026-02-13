import { assests2 } from "../../assets/assests2";




export const PersT = () => {
  return (
    <div className="flex flex-col gap-[25vh]">
        {
            assests2.map((item, index) => (
                <section key={index} className="flex h-screen flex-col gap-25 px-5 py-16 lg:px-10 lg:py-20 text-white">
                    <div className="flex justify-between">
                      <h3 className="text-[15vw] leading-none font-bold lg:text-[7vw]">{item.title}</h3>
                    </div>

                    <div className="flex h-full justify-between max-md:flex-col">
                      <p className="w-full self-end text-2xl lg:w-1/3">{item.description}</p>
                      <div className="flex h-full w-full gap-5 self-end max-md:flex-col lg:w-1/3">
                        <span className="invisble text-[4vw] leading-none font-bold lg:invisible">{item.number}</span>
                        <div className="relative h-full w-full overflow-hidden">
                          <img src={item.image} alt="" className="scale-140 object-cover w-full"/>
                          </div>
                      </div>
                    </div>
                </section>
            ))
        }
    </div>
  )
}
