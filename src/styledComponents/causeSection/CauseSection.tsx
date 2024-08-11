'use client'
import Splide from "@splidejs/splide";
import Image from "next/image"
import { useEffect, useRef } from "react";
let renderCounter = 1;

const contentOfCauseSection = {
    splideElements: [
        {
            title: 'Excel sheets and google docs are just silos of data.',
            subtitle: 'Manually creating reports that just sit on your computer isn\'t going to work anymore. Get complete oversight of all connected social profiles from a single platform.',
            srcImg: '/img/cause1.png',
        },
        {
            title: 'Give Context. What is the cause of this problem?',
            subtitle: 'Talk about the things that cause this problem. This shows the user that you actually understand the problem and empathize with them about their situation.',
            srcImg: '/img/cause2.png',
        },
        {
            title: 'Give Context. What is the cause of this problem?',
            subtitle: 'Talk about the things that cause this problem. This shows the user that you actually understand the problem and empathize with them about their situation.',
            srcImg: '/img/cause3.png',
        }
    ]
}

export const CauseSection = () => {
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
                                <li className={`splide__slide`} key={index}>
                                    <div className="cause-card">
                                        <div className="cause-txt">
                                            <h2>{el.title}</h2>
                                            <p>{el.subtitle}</p>
                                        </div>
                                        <div className="cause-img img-cd">
                                            <figure>
                                                <Image src={el.srcImg} alt="" width={500} height={500} />
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
                        <Image src="/img/cause-g1.png" alt="" width={1200} height={1200} />
                    </figure>
                </div>
                <div className="bg-gradient cause-g2 img-cd">
                    <figure>
                        <Image src="/img/cause-g2.png" alt="" width={1200} height={1200} />
                    </figure>
                </div>
            </div>
        </section>
    )
}