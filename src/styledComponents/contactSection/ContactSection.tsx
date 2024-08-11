import Image from "next/image"

export const ContactSection = () => {
    return (
        <section className="contact-section" data-aos="fade-up">
            <div className="container">
                <div className="contact-wrapper">
                    <h2>Transform the way you handle your social media, transform the way you do business.</h2>
                    <p>Learn how SaasBox can help take your social media marketing to the next level.</p>
                    <div className="email-form">
                        <form>
                            <div className="typing-wrap">
                                <i className="fa-regular fa-envelope"></i>
                                <input type="email" name="email" id="email" placeholder="Enter your mail" />
                            </div>
                            <input type="button" name="submit" id="submit" value="Start for free" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-wave contact-wave img-cd">
                <figure>
                    <Image className="wave-img" src="/img/contact-wave.png" alt="" width={1200} height={300} />
                </figure>
            </div>
            <div className="bg-gradient img-cd contact-bg1">
                <figure>
                    <Image src="/img/contact-bg1.png" alt="" width={1200} height={1200} />
                </figure>
            </div>
            <div className="bg-gradient img-cd contact-bg2">
                <figure>
                    <Image src="/img/contact-bg2.png" alt="" width={1200} height={1200} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img1">
                <figure>
                    <Image src="/img/tm-img1.png" alt="" width={60} height={60} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img2">
                <figure>
                    <Image src="/img/tm-img2.png" alt="" width={60} height={60} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img3">
                <figure>
                    <Image src="/img/tm-img3.png" alt="" width={60} height={60} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img4">
                <figure>
                    <Image src="/img/tm-img4.png" alt="" width={60} height={60} />
                </figure>
            </div>
        </section>
    )
}