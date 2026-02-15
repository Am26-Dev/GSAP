import "./PersTransition.css";
import { PersT } from "./PersT";


export const PersTransition = () => {
    return (
        <main className="w-full">
            <section className="flex h-screen justify-center items-center bg-red-400">
                <h1 className="text-center text-4xl uppercase">Perspective Section Transition</h1>
            </section>
            {/* <PersT /> */}

            <section className="flex flex-col bg-pink-400 h-screen w-full">
                <div className="bg-blue-400">
                    <h3>PORTRAIT</h3>
                </div>
                <div className="bg-blue-700 flex overflow-hidden ">
                    <div className="bg-amber-700 self-end">descriptoin</div>
                    <div className="bg-yellow-200 h-fit">
                        <span>number(01)</span>
                        <img className="h-[0%]
                        %" src="./iron1.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className="flex h-screen justify-center items-center bg-red-600">
                <h1 className="text-center text-4xl uppercase">See you next one!</h1>
            </section>
        </main>
    )
}
