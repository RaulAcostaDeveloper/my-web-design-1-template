import Image from "next/image"
const contentOfContactSection = {
    title: 'Transform the way you handle your social media, transform the way you do business.',
    subtitle: 'Learn how SaasBox can help take your social media marketing to the next level.',
    form: {
        placeholder: 'Enter your mail',
        srcIcon: '/img/mail.png',
        button: {
            title: 'Start for free',
            callBack: () => { console.log('button ressed') }
        }
    },
    ornamentImg1Src: '/img/tm-img1.png',
    ornamentImg2Src: '/img/tm-img2.png',
    ornamentImg3Src: '/img/tm-img3.png',
    ornamentImg4Src: '/img/tm-img4.png',
}
export const ContactSection = () => {
    return (
        <section className="contact-section" data-aos="fade-up">
            <div className="container">
                <div className="contact-wrapper">
                    <h2>{contentOfContactSection.title}</h2>
                    <p>{contentOfContactSection.subtitle}</p>
                    <div className="email-form">
                        <form>
                            <div className="typing-wrap">
                                <i className="fa-regular fa-envelope">
                                    <Image className="small-icon-form" src={contentOfContactSection.form.srcIcon} alt="input Icon" width={60} height={60} />
                                </i>
                                <input type="email" name="email" id="email" placeholder={contentOfContactSection.form.placeholder} />
                            </div>
                            <input type="button" name="submit" id="submit" value={contentOfContactSection.form.button.title} onClick={contentOfContactSection.form.button.callBack} />
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-wave contact-wave img-cd">
                <figure>
                    <Image className="wave-img" src="/img/contact-wave.png" alt="shadow" width={1200} height={300} />
                </figure>
            </div>
            <div className="bg-gradient img-cd contact-bg1">
                <figure>
                    <Image src="/img/contact-bg1.png" alt="shadow" width={1200} height={1200} />
                </figure>
            </div>
            <div className="bg-gradient img-cd contact-bg2">
                <figure>
                    <Image src="/img/contact-bg2.png" alt="shadow" width={1200} height={1200} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img1">
                <figure>
                    <Image src={contentOfContactSection.ornamentImg1Src} alt="Ornament" width={60} height={60} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img2">
                <figure>
                    <Image src={contentOfContactSection.ornamentImg2Src} alt="Ornament" width={60} height={60} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img3">
                <figure>
                    <Image src={contentOfContactSection.ornamentImg3Src} alt="Ornament" width={60} height={60} />
                </figure>
            </div>
            <div className="contact-pro1 img-cd email-img4">
                <figure>
                    <Image src={contentOfContactSection.ornamentImg4Src} alt="Ornament" width={60} height={60} />
                </figure>
            </div>
        </section>
    )
}