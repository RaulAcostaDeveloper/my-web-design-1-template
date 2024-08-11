import Image from "next/image"

export const FixProblemInnerSection1 = () => {
    return (
        <section className="fix-problem-inner-section1" data-aos="fade-up">
            <div className="container">
                <div className="fix-problem-inner1">
                    <div className="problem-inner1-left">
                        <div className="problem-inner-img img-cd">
                            <figure>
                                <Image src="/img/problem-img-left.png" alt="" width={600} height={600} />
                            </figure>
                        </div>
                    </div>
                    <div className="problem-inner1-right">
                        <h2>Social media management doesn't have to be a headache.</h2>
                        <div className="problem-manage-wrap">
                            <article className="problem-manage-card">
                                <div className="problem-manage-img img-cd">
                                    <figure>
                                        <Image src="/img/problem-r1.svg" alt="" width={50} height={50} />
                                    </figure>
                                </div>
                                <div className="problem-manage-txt">
                                    <h3>A centralised hub for all your social media</h3>
                                    <p>Monitor social activity and organize all posts, reviews, and customer engagement from a single platform.</p>
                                </div>
                            </article>
                            <article className="problem-manage-card">
                                <div className="problem-manage-img img-cd">
                                    <figure>
                                        <Image src="/img/problem-r2.svg" alt="" width={50} height={50} />
                                    </figure>
                                </div>
                                <div className="problem-manage-txt">
                                    <h3>Keep your audience engaged</h3>
                                    <p>Deliver content that resonates with your customers. Keep track of what is working, with engagement tools.</p>
                                </div>
                            </article>
                            <article className="problem-manage-card">
                                <div className="problem-manage-img img-cd">
                                    <figure>
                                        <Image src="/img/problem-r3.svg" alt="" width={50} height={50} />
                                    </figure>
                                </div>
                                <div className="problem-manage-txt">
                                    <h3>Build better marketing strategies</h3>
                                    <p>Track campaign performance across all social media with detailed reports. Gain a clear picture of what’s working, and what isn't.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-wave wave-1 img-cd">
                <figure>
                    <Image className="wave-img" src="/img/problem-wave.png" alt="" width={700} height={600} />
                </figure>
            </div>
        </section>
    )
}