import Image from "next/image"
import { ContactSectionContent } from "./ContactSection.model"

export const ContactSection = (contentOfContactSection: ContactSectionContent) => {
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
                    <img className="wave-img" src="/img/contact-wave.png" alt="shadow"/>
                </figure>
            </div>
            <div className="bg-gradient img-cd contact-bg1">
                <figure>
                    <img src="/img/contact-bg1.png" alt="shadow"/>
                </figure>
            </div>
            <div className="bg-gradient img-cd contact-bg2">
                <figure>
                    <img src="/img/contact-bg2.png" alt="shadow"/>
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