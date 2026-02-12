import "./PersTransition.css";
import { PersT } from "./PersT";


export const PersTransition = () => {
    return (
        <main>
            <section className="sec1">
                <h1 className="he">Perspective Section Transition</h1>
            </section>
            <PersT />
            <section className="sec2">
                <h1 className="he">See you next one!</h1>
            </section>
        </main>
    )
}
