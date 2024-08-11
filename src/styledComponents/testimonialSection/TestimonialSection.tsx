'use client'
import Splide from "@splidejs/splide";
import Image from "next/image"
import { useEffect, useRef } from "react";

let renderCounter = 1;
export const TestimonialSection = () => {
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
                                <li className="splide__slide is-active">
                                    <div className="testimonial-card">
                                        <div className="quat-img img-cd">
                                            <figure>
                                                <Image src="/img/quatation-mark.svg" alt="" width={40} height={30} />
                                            </figure>
                                        </div>
                                        <h2>"A 360 degree view of all my projects."</h2>
                                        <p>"SaasBox lets us create a month’s worth of content in one week for our clients, allowing us to spend the rest of the month engaging and optimizing.”</p>
                                        <div className="client-wrapper">
                                            <div className="client-img img-cd">
                                                <figure>
                                                    <Image src="/img/client1.png" alt="" width={40} height={40} />
                                                </figure>
                                            </div>
                                            <h3>Sophia Thompson, Founder & CEO, Socially</h3>
                                        </div>
                                        <div className="percentage-wrapper">
                                            <div className="percentage-card">
                                                <h4>23%</h4>
                                                <h5>more followers within a month</h5>
                                            </div>
                                            <div className="percentage-card">
                                                <h4>14X</h4>
                                                <h5>Return on Investment</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide">
                                    <div className="testimonial-card">
                                        <div className="quat-img img-cd">
                                            <figure>
                                                <Image src="/img/quatation-mark.svg" alt="" width={40} height={30} />

                                            </figure>
                                        </div>
                                        <h2>"Helps me stay on top of all marketing."</h2>
                                        <p>"With SaasBox, I can have a clear view of all metrics and analytics to make necessary changes in my marketing strategies. I am able to catch up with current trends and manage all our social media channels without too much effort."</p>
                                        <div className="client-wrapper">
                                            <div className="client-img img-cd">
                                                <figure>
                                                    <Image src="/img/client2.png" alt="" width={40} height={40} />

                                                </figure>
                                            </div>
                                            <h3>Elle Rabe, co-founder, Falcon</h3>
                                        </div>
                                        <div className="percentage-wrapper">
                                            <div className="percentage-card">
                                                <h4>14%</h4>
                                                <h5>more followers within a month</h5>
                                            </div>
                                            <div className="percentage-card">
                                                <h4>8X</h4>
                                                <h5>Return on Investment</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide">
                                    <div className="testimonial-card">
                                        <div className="quat-img img-cd">
                                            <figure>
                                                <Image src="/img/quatation-mark.svg" alt="" width={40} height={30} />
                                            </figure>
                                        </div>
                                        <h2>Customer X achieved 14x ROI in the first month !</h2>
                                        <p>Explain how the customer was in a similar situation as your user, struggling with similar problems. Talk about their transition to your product and the outcome: how it solved their problems and helped them achieve their goals.</p>
                                        <div className="client-wrapper">
                                            <div className="client-img img-cd">
                                                <figure>
                                                    <Image src="/img/client3.png" alt="" width={40} height={40} />

                                                </figure>
                                            </div>
                                            <h3>Lisa Hayden</h3>
                                        </div>
                                        <div className="percentage-wrapper">
                                            <div className="percentage-card">
                                                <h4>23%</h4>
                                                <h5>Primary Result Stat</h5>
                                            </div>
                                            <div className="percentage-card">
                                                <h4>14X</h4>
                                                <h5>Return on Investment</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
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
                    <Image src="/img/tm-img1.png" alt="" width={60} height={60} />

                </figure>
            </div>
            <div className="tm-ab-img2 img-cd">
                <figure>
                    <Image src="/img/tm-img2.png" alt="" width={40} height={40} />

                </figure>
            </div>
            <div className="tm-ab-img3 img-cd">
                <figure>
                    <Image src="/img/tm-img3.png" alt="" width={60} height={60} />

                </figure>
            </div>
            <div className="tm-ab-img4 img-cd">
                <figure>
                    <Image src="/img/tm-img4.png" alt="" width={60} height={60} />

                </figure>
            </div>
            <div className="bg-gradient tm-g1 img-cd">
                <figure>
                    <Image src="/img/bg-gradient-tm.png" alt="" width={1200} height={1200} />
                </figure>
            </div>
        </section>
    )
}