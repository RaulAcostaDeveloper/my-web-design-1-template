import Image from "next/image"

export const FixProblemInnerSection2 = () => {
    return (
        <section className="fix-problem-inner-section2" data-aos="fade-up">
            <div className="container">
                <div className="fix-problem-inner1">
                    <div className="problem-inner1-right">
                        <h2>Good strategy only comes from reliable data.</h2>
                        <p>Get instant recommendations on SEO, content marketing and advertising with auto-generated, detailed reports. Boost your online visibility within days.</p>
                        <div className="problem-manage-wrap">
                            <div className="problem-manage-card">
                                <div className="problem-manage-img img-cd">
                                    <figure>
                                        <Image src="/img/problem-tick.svg" alt="" width={30} height={30} />
                                    </figure>
                                </div>
                                <div className="problem-manage-txt">
                                    <p>No more juggling between 8 different tools</p>
                                </div>
                            </div>
                            <div className="problem-manage-card">
                                <div className="problem-manage-img img-cd">
                                    <figure>
                                        <Image src="/img/problem-tick.svg" alt="" width={30} height={30} />
                                    </figure>
                                </div>
                                <div className="problem-manage-txt">
                                    <p>Draft, schedule and post content with a single software</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="problem-inner1-left">
                        <div className="problem-inner-img img-cd">
                            <figure>
                                <Image src="/img/problem-inner2-img.png" alt="" width={600} height={500} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-wave wave-2 img-cd">
                <figure>
                    <Image className="wave-img" src="/img/problem-wave2.png" alt="" width={700} height={700} />
                </figure>
            </div>
        </section>
    )
}