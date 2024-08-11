import Image from "next/image"

const contentOfHeroSection = {
    title: 'A smart solution for all your social media marketing needs.',
    subTitle: 'Plan, engage, and analyse with ease. Transform your social media strategy with an all-in-one platform.',
    form: {
        placeholder: 'Enter your mail',
        srcIcon: '/img/mail.png',
        button: {
            title: 'Start for free',
            callBack: () => { console.log('button ressed') }
        }
    },
    features: [
        {
            title: 'Free 14-day Demo'
        },
        {
            title: 'No credit card needed'
        },
        {
            title: 'No Setup'
        }
    ],
    principalImageSrc: './img/laptop.png',
    socialMediaIconSrc1: './img/laptop-ig.svg',
    socialMediaIconSrc2: './img/laptop-tt.svg',
    socialMediaIconSrc3: './img/laptop-fb.svg',
    waveImageSrc: './img/hero-wave.png'
}

export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1 data-aos="fade-up">{contentOfHeroSection.title}</h1>
                    <p data-aos="fade-up">{contentOfHeroSection.subTitle}</p>
                    <div className="email-form" data-aos="fade-up">
                        <form>
                            <div className="typing-wrap">
                                <i className="fa-regular fa-envelope">
                                    <Image className="small-icon-form" src={contentOfHeroSection.form.srcIcon} alt="input Icon" width={60} height={60} />
                                </i>
                                <input type="email" name="email" id="email" placeholder={contentOfHeroSection.form.placeholder} />
                            </div>
                            <input type="button" name="submit" id="submit" value={contentOfHeroSection.form.button.title} onClick={contentOfHeroSection.form.button.callBack} />
                        </form>
                    </div>
                    <div className="hero-features-wrap" data-aos="fade-up">
                        {contentOfHeroSection.features.map( (el, index) => (
                            <div className="hero-feature-card" key={el.title + index}>
                                <div className="check-icon img-cd">
                                    <figure>
                                        <Image src="/img/check-icon.svg" alt="check icon" width={15} height={15} />
                                    </figure>
                                </div>
                                <p>{el.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="laptop-wrapper" data-aos="fade-up">
                    <div className="laptop img-cd">
                        <figure>
                            <img src={contentOfHeroSection.principalImageSrc} alt="principal image for this section" />
                        </figure>
                    </div>
                    <div className="laptop-ig img-cd">
                        <figure>
                            <img src={contentOfHeroSection.socialMediaIconSrc1} alt="social media icon" />
                        </figure>
                    </div>
                    <div className="laptop-tt img-cd">
                        <figure>
                            <img src={contentOfHeroSection.socialMediaIconSrc2} alt="social media icon" />
                        </figure>
                    </div>
                    <div className="laptop-fb img-cd">
                        <figure>
                            <img src={contentOfHeroSection.socialMediaIconSrc3} alt="social media icon" />
                        </figure>
                    </div>
                </div>
                <div className="bg-gradient hero-g1 img-cd">
                    <figure>
                        <img src="./img/hero-g1.png" alt="shadow" />
                    </figure>
                </div>
                <div className="bg-gradient hero-g2 img-cd">
                    <figure>
                        <img src="./img/hero-g2.png" alt="shadow" />
                    </figure>
                </div>
                <div className="bg-gradient hero-g3 img-cd">
                    <figure>
                        <img src="./img/hero-g3.png" alt="shadow" />
                    </figure>
                </div>
            </div>
            <div className="bg-wave hero-wave-1 img-cd">
                <figure>
                    <img src={contentOfHeroSection.waveImageSrc} alt="wave ornament" />
                </figure>
            </div>
        </section>
    )
}