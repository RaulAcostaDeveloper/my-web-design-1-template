import { BenefitsSectionContent } from "./BenefitsSection.model"

export const BenefitsSection = (contentOfBenefitsSection: BenefitsSectionContent) => {
    return (
        <section className="benefits-section">
            <div className="container">
                <h2 data-aos="fade-up">{contentOfBenefitsSection.title}</h2>
                <div className="benefits-wrapper" data-aos="fade-up">
                    {contentOfBenefitsSection.cards.map( (el, index) => (
                        <article className="benefits-card" key={el.cardImgSrc + index}>
                            <div className="benefits-img img-cd">
                                <figure>
                                    <img src={el.cardImgSrc} alt="Icon"/>
                                </figure>
                            </div>
                            <div className="benefits-txt">
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className="bg-gradient img-cd benefits-g1">
                <figure>
                    <img src="/img/benefits-g1.png" alt="shadow"/>
                </figure>
            </div>
            <div className="bg-gradient img-cd benefits-g2">
                <figure>
                    <img src="/img/benefits-g2.png" alt="shadow" />
                </figure>
            </div>
            <div className="bg-gradient img-cd benefits-g3">
                <figure>
                    <img src="/img/benefits-g3.png" alt="shadow"/>
                </figure>
            </div>
        </section>
    )
}