import "./PersTransition.css";
import { PersT } from "./PersT";


export const PersTransition = () => {
    return (
        <main className="w-screen">
            <section className="flex h-screen justify-center items-center">
                <h1 className="text-center text-4xl uppercase">Perspective Section Transition</h1>
            </section>
            <PersT />
            <section className="flex h-screen justify-center items-center">
                <h1 className="text-center text-4xl uppercase">See you next one!</h1>
            </section>
        </main>
    )
}
