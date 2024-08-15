'use client'
import Splide from "@splidejs/splide";
import Image from "next/image"
import { useEffect, useRef } from "react";
import { TestimonialSectionContent } from "./TestimonialSection.model";

let renderCounter = 1;

export const TestimonialSection = (contentOfTestimonialSection: TestimonialSectionContent) => {
    const thisElement = useRef(null);
    useEffect(() => {
        if (thisElement.current) {
            if (renderCounter === 1) {
                const splide = new Splide('.testimonial-slider', {
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
            }
        }
    }, [thisElement]);
    return (
        <section className="testimonial-section" data-aos="fade-up" ref={thisElement}>
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="splide testimonial-slider">
                        <div className="splide__track">
                            <ul className="splide__list">
                                {contentOfTestimonialSection.slides.map((el, index) => (
                                    <li className="splide__slide is-active" key={el.title + index}>
                                        <div className="testimonial-card">
                                            <div className="quat-img img-cd">
                                                <figure>
                                                    <Image src={el.headImgSrc} alt="icon" width={40} height={30} />
                                                </figure>
                                            </div>
                                            <h2>{el.title}</h2>
                                            <p>{el.info}</p>
                                            <div className="client-wrapper">
                                                <div className="client-img img-cd">
                                                    <figure>
                                                        <Image src={el.subtitleImgSrc} alt="icon" width={40} height={40} />
                                                    </figure>
                                                </div>
                                                <h3>{el.subtitle}</h3>
                                            </div>
                                            <div className="percentage-wrapper">
                                                {el.subInfo.map((el, index) => (
                                                    <div className="percentage-card" key={el.title + index}>
                                                        <h4>{el.title}</h4>
                                                        <h5>{el.info}</h5>
                                                    </div>
                                                ))}
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
                </div>
            </div>
            <div className="tm-ab-img1 img-cd">
                <figure>
                    <Image src={contentOfTestimonialSection.ornamentImg1Src} alt="ornament icon" width={60} height={60} />
                </figure>
            </div>
            <div className="tm-ab-img2 img-cd">
                <figure>
                    <Image src={contentOfTestimonialSection.ornamentImg2Src} alt="ornament icon" width={40} height={40} />
                </figure>
            </div>
            <div className="tm-ab-img3 img-cd">
                <figure>
                    <Image src={contentOfTestimonialSection.ornamentImg3Src} alt="ornament icon" width={60} height={60} />
                </figure>
            </div>
            <div className="tm-ab-img4 img-cd">
                <figure>
                    <Image src={contentOfTestimonialSection.ornamentImg4Src} alt="ornament icon" width={60} height={60} />
                </figure>
            </div>
            <div className="bg-gradient tm-g1 img-cd">
                <figure>
                <img src="./img/bg-gradient-tm.png" alt="ornament icon"/>

                </figure>
            </div>
        </section>
    )
}