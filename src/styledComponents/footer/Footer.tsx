import Image from "next/image"

export const Footer = () => {
    return (
        <footer data-aos="fade-up">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <a href="#" className="img-cd">
                                <figure>
                                    <Image src="/img/logo.png" alt="" width={200} height={50} />
                                </figure>
                            </a>
                        </div>
                        <a href="mailto:hello@saasbox.com" className="email-link">hello@saasbox.com</a>
                        <a href="tel:+99565654" className="tel-link">+99-565-654</a>
                        <div className="social-wrapper">
                            <div className="social-icon img-cd">
                                <figure>
                                    <Image src="/img/fb.svg" alt="" width={24} height={24} />
                                </figure>
                            </div>
                            <div className="social-icon img-cd">
                                <figure>
                                    <Image src="/img/twitter.svg" alt="" width={24} height={24} />
                                </figure>
                            </div>
                            <div className="social-icon img-cd">
                                <figure>
                                    <Image src="/img/linkedin.svg" alt="" width={24} height={24} />
                                </figure>
                            </div>
                            <div className="social-icon img-cd">
                                <figure>
                                    <Image src="/img/ig.svg" alt="" width={24} height={24} />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-grid">
                            <div className="footer-links">
                                <h4>Links</h4>
                                <a href="#">Home</a>
                                <a href="#">Pricing</a>
                                <a href="#">Blog</a>
                                <a href="#">Company</a>
                                <a href="#">Resources</a>
                            </div>
                            <div className="footer-links">
                                <h4>Others</h4>
                                <a href="#">Downloads</a>
                                <a href="#">Book A Demo</a>
                                <a href="#">Terms & Conditions</a>
                            </div>
                            <div className="footer-links">
                                <h4>Others</h4>
                                <a href="#">Sign Up</a>
                                <a href="#">Log In</a>
                                <a href="#">Passowrd</a>
                                <a href="#">404</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="copyright-left">
                        <p>© All rights reserved. <a href="#">Conversion Flow</a>, Inc. Powered by <a href="#">Webflow.</a></p>
                    </div>
                    <div className="copyright-right">
                        <a href="#">Style Guide</a>
                        <a href="#">Licence</a>
                        <a href="#">Instructions</a>
                        <a href="#">Changelog</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}