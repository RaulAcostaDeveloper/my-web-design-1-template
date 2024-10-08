import { LogoSectionContent } from "./LogoSection.model"

export const LogoSection = (contentOfLogoSection: LogoSectionContent) => {
    return (
        <section className="logo-section" data-aos="fade-up">
            <div className="container">
                <div className="logo-wrapper">
                    {contentOfLogoSection.images.map( (el, index) => (
                        <div className="logo-card img-cd" key={el.srcImage + index}>
                            <figure>
                                <img src={el.srcImage} alt="logo of a company"/>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}