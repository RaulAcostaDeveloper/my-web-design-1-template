'use client'
import Splide from "@splidejs/splide";
import Image from "next/image"
import { useEffect, useRef } from "react";
import { CauseSectionContent } from "./CauseSection.model";

let renderCounter = 1;

export const CauseSection = (contentOfCauseSection: CauseSectionContent) => {
    const thisElement = useRef(null);
    useEffect(() => {
        if (thisElement.current) {
            if (renderCounter === 1) {
                const splide = new Splide('.cause-slider', {
                    perPage: 1,
                    gap: 30,
                    perMove: 1,
                    autoplay: false,
                    pagination: false,
                    type: 'loop',
                    breakpoints: {
                        767: {
                            perPage: 1,
                        },
                        991: {
                            perPage: 1,
                        },
                    },
                });

                splide.mount();
                renderCounter++;
            }
        }
    }, [thisElement]);

    return (
        <section className="cause-section" data-aos="fade-up" ref={thisElement}>
            <div className="container">
                <div className="splide cause-slider">
                    <div className="splide__track">
                        <ul className="splide__list">
                            {contentOfCauseSection.splideElements.map((el, index) => (
                                <li className={`splide__slide`} key={el.title + index}>
                                    <div className="cause-card">
                                        <div className="cause-txt">
                                            <h2>{el.title}</h2>
                                            <p>{el.subtitle}</p>
                                        </div>
                                        <div className="cause-img img-cd">
                                            <figure>
                                                <Image src={el.srcImg} alt="cause img in splide" width={500} height={500} />
                                            </figure>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev"></button>
                        <button className="splide__arrow splide__arrow--next"></button>
                    </div>
                </div>
                <div className="bg-gradient cause-g1 img-cd">
                    <figure>
                        <img src="/img/cause-g1.png" alt="shadow"/>
                    </figure>
                </div>
                <div className="bg-gradient cause-g2 img-cd">
                    <figure>
                        <img src="/img/cause-g2.png" alt="shadow"/>
                    </figure>
                </div>
            </div>
        </section>
    )
}