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
                <div className="bg-blue-400 px-10 py-6">
                    <h3 className="text-6xl font-semibold">PORTRAIT</h3>
                </div>
                <div className="bg-blue-700 flex flex-1 justify-baseline items-end px-10 pb-16">
                    <div className="bg-amber-700  max-w-sm">descriptoin</div>

                    <div className="bg-yellow-200 relative flex flex-col items-start">
                        <span className="absolute -top-10 text-3xl font-semibold">number(01)</span>
                         <div className="w-[320px] aspect-[3/4] overflow-hidden">
                <img
                    src="./iron1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
                    </div>
                </div>
            </section>

            <section className="flex h-screen justify-center items-center bg-red-600">
                <h1 className="text-center text-4xl uppercase">See you next one!</h1>
            </section>
        </main>
    )
}
