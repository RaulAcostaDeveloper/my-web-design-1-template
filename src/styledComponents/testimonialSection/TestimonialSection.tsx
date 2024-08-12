'use client'
import Splide from "@splidejs/splide";
import Image from "next/image"
import { useEffect, useRef } from "react";
let renderCounter = 1;

const contentOfTestimonialSection = {
    slides: [
        {
            title: '"A 360 degree view of all my projects."',
            info: '"SaasBox lets us create a month’s worth of content in one week for our clients, allowing us to spend the rest of the month engaging and optimizing.”',
            headImgSrc: '/img/quatation-mark.svg',
            subtitle: 'Sophia Thompson, Founder & CEO, Socially',
            subtitleImgSrc: '/img/client1.png',
            subInfo: [
                {
                    title: '23%',
                    info: 'more followers within a month'
                },
                {
                    title: '14X',
                    info: 'Return on Investment'
                }
            ]
        },
        {
            title: '"Helps me stay on top of all marketing."',
            info: '"With SaasBox, I can have a clear view of all metrics and analytics to make necessary changes in my marketing strategies. I am able to catch up with current trends and manage all our social media channels without too much effort."',
            headImgSrc: '/img/quatation-mark.svg',
            subtitle: 'Elle Rabe, co-founder, Falcon',
            subtitleImgSrc: '/img/client2.png',
            subInfo: [
                {
                    title: '14%',
                    info: 'more followers within a month'
                },
                {
                    title: '8X',
                    info: 'Return on Investment'
                }
            ]
        },
        {
            title: 'Customer X achieved 14x ROI in the first month !',
            info: 'Explain how the customer was in a similar situation as your user, struggling with similar problems. Talk about their transition to your product and the outcome: how it solved their problems and helped them achieve their goals.',
            headImgSrc: '/img/quatation-mark.svg',
            subtitle: 'Lisa Hayden',
            subtitleImgSrc: '/img/client3.png',
            subInfo: [
                {
                    title: '23%',
                    info: 'Primary Result Stat'
                },
                {
                    title: '14X',
                    info: 'Return on Investment'
                }
            ]
        },
    ],
    ornamentImg1Src: '/img/tm-img1.png',
    ornamentImg2Src: '/img/tm-img2.png',
    ornamentImg3Src: '/img/tm-img3.png',
    ornamentImg4Src: '/img/tm-img4.png',
}

interface SubInfo {
    title: string;
    info: string;
}

interface Slide {
    title: string;
    info: string;
    headImgSrc: string;
    subtitle: string;
    subtitleImgSrc: string;
    subInfo: SubInfo[];
}

interface TestimonialSectionContent {
    slides: Slide[];
    ornamentImg1Src: string;
    ornamentImg2Src: string;
    ornamentImg3Src: string;
    ornamentImg4Src: string;
}

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
                    <Image src="/img/bg-gradient-tm.png" alt="ornament icon" width={1200} height={1200} />
                </figure>
            </div>
        </section>
    )
}