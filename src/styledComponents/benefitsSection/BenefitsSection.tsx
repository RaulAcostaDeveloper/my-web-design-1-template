import Image from "next/image"

export const BenefitsSection = () => {
    return (
        <section className="benefits-section">
            <div className="container">
                <h2 data-aos="fade-up">An all-in-one social media management platform for all your needs.</h2>
                <div className="benefits-wrapper" data-aos="fade-up">
                    <article className="benefits-card">
                        <div className="benefits-img img-cd">
                            <figure>
                                <Image src="/img/benefits-img.svg" alt="" width={70} height={70} />
                            </figure>
                        </div>
                        <div className="benefits-txt">
                            <h3>Reiterate primary outcome</h3>
                            <p>Build strong online communities with our customer care tools. Get access to relevant audience data, and accurate reports on performance metrics.</p>
                        </div>
                    </article>
                    <article className="benefits-card">
                        <div className="benefits-img img-cd">
                            <figure>
                                <Image src="/img/benefits-img.svg" alt="" width={70} height={70} />
                            </figure>
                        </div>
                        <div className="benefits-txt">
                            <h3>Plan your posts in advance</h3>
                            <p>Devise a publishing strategy and organize posts across profiles, networks and campaigns witha visualized calendar.</p>
                        </div>
                    </article>
                    <article className="benefits-card">
                        <div className="benefits-img img-cd">
                            <figure>
                                <Image src="/img/benefits-img.svg" alt="" width={70} height={70} />
                            </figure>
                        </div>
                        <div className="benefits-txt">
                            <h3>Make the most out of your data</h3>
                            <p>Measure the metrics that matter with custom, auto-generated, exhaustive reports. Use actionable insights to boost your ROI.</p>
                        </div>
                    </article>
                    <article className="benefits-card">
                        <div className="benefits-img img-cd">
                            <figure>
                                <Image src="/img/benefits-img.svg" alt="" width={70} height={70} />
                            </figure>
                        </div>
                        <div className="benefits-txt">
                            <h3>Get analytics on latest trends.</h3>
                            <p>Keep up with trends every single day. Gather feedback to help strategise new product, service and content ideas.</p>
                        </div>
                    </article>
                </div>
            </div>
            <div className="bg-gradient img-cd benefits-g1">
                <figure>
                    <Image src="/img/benefits-g1.png" alt="" width={1200} height={1200} />
                </figure>
            </div>
            <div className="bg-gradient img-cd benefits-g2">
                <figure>
                    <Image src="/img/benefits-g2.png" alt="" width={1300} height={1300} />
                </figure>
            </div>
            <div className="bg-gradient img-cd benefits-g3">
                <figure>
                    <Image src="/img/benefits-g3.png" alt="" width={800} height={800} />
                </figure>
            </div>
        </section>
    )
}