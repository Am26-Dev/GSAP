import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { assests } from "../assets/assests";
import "./StTwo.css";
import { useEffect, useRef, useState } from "react";

export const StTwo = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
        const viewportCenter = window.innerHeight / 2;
        let closestIndex = 0;
        let minDistance = Infinity;

        containerRef.current.forEach((ref, index) => {
            if (ref) {
            const rect = ref.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(elementCenter - viewportCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
            }
        });
        setActiveIndex(closestIndex);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    });

    useGSAP(() => {
        gsap.utils.toArray(".main1").forEach((container) => {
        const scaleTl = gsap.timeline({
            scrollTrigger: {
            trigger: container,
            start: "Top bottom",
            end: "bottom top",
            scrub: 0.5,
            },
        });

        scaleTl
            .from(
            container,
            {
                scale: 0.5,
            },
            {
                scale: 2,
                ease: "none",
            },
            )
            .to(container, {
            scale: 0.5,
            ease: "none",
            });
        });
    });

    return (
        <div className="main">
        {assests.map((item, index) => (
            <div
            ref={(el) => {
                containerRef.current[index] = el;
            }}
            className="main1"
            key={index}
            >
            <div className="pic">
                <img
                style={{
                    maxWidth: "760px",
                }}
                src={item.image}
                alt={item.name}
                />
            </div>
            </div>
        ))}
        <div className="corner-section">
            <div className="corner-num">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span>{assests[activeIndex].name}</span>
            </div>
        </div>
        </div>
    );
};
