export const HeroSection = () => {
    return (
        <section className="hero-section">
        <div className="container">
            <div className="hero-content">
                <h1 data-aos="fade-up">A smart solution for all your social media marketing needs.</h1>
                <p data-aos="fade-up">Plan, engage, and analyse with ease. Transform your social media strategy with an all-in-one platform.</p>
                <div className="email-form" data-aos="fade-up">
                    <form>
                        <div className="typing-wrap">
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" name="email" id="email" placeholder="Enter your mail" />
                        </div>
                        <input type="button" name="submit" id="submit" value="Start for free"/>
                    </form>
                </div>
                <div className="hero-features-wrap" data-aos="fade-up">
                    <div className="hero-feature-card">
                        <div className="check-icon img-cd">
                            <figure>
                                <img src="./img/check-icon.svg" alt=""/>
                            </figure>
                        </div>
                        <p>Free 14-day Demo</p>
                    </div>
                    <div className="hero-feature-card">
                        <div className="check-icon img-cd">
                            <figure>
                                <img src="./img/check-icon.svg" alt=""/>
                            </figure>
                        </div>
                        <p>No credit card needed</p>
                    </div>
                    <div className="hero-feature-card">
                        <div className="check-icon img-cd">
                            <figure>
                                <img src="./img/check-icon.svg" alt=""/>
                            </figure>
                        </div>
                        <p>No Setup</p>
                    </div>
                </div>
            </div>
            <div className="laptop-wrapper" data-aos="fade-up">
                <div className="laptop img-cd">
                    <figure>
                        <img src="./img/laptop.png" alt=""/>
                    </figure>
                </div>
                <div className="laptop-ig img-cd">
                    <figure>
                        <img src="./img/laptop-ig.svg" alt=""/>
                    </figure>
                </div>
                <div className="laptop-tt img-cd">
                    <figure>
                        <img src="./img/laptop-tt.svg" alt=""/>
                    </figure>
                </div>
                <div className="laptop-fb img-cd">
                    <figure>
                        <img src="./img/laptop-fb.svg" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="bg-gradient hero-g1 img-cd">
                <figure>
                    <img src="./img/hero-g1.png" alt=""/>
                </figure>
            </div>
            <div className="bg-gradient hero-g2 img-cd">
                <figure>
                    <img src="./img/hero-g2.png" alt=""/>
                </figure>
            </div>
            <div className="bg-gradient hero-g3 img-cd">
                <figure>
                    <img src="./img/hero-g3.png" alt=""/>
                </figure>
            </div>
        </div>
        <div className="bg-wave hero-wave-1 img-cd">
            <figure>
                <img src="./img/hero-wave.png" alt=""/>
            </figure>
        </div>
    </section>
    )
}