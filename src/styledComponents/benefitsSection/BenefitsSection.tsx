import Image from "next/image"

const contentOfBenefitsSection = {
    title: 'An all-in-one social media management platform for all your needs.',
    cards: [
        {
            title: 'Reiterate primary outcome',
            info: 'Build strong online communities with our customer care tools. Get access to relevant audience data, and accurate reports on performance metrics.',
            cardImgSrc: '/img/benefits-img.svg'
        },
        {
            title: 'Plan your posts in advance',
            info: 'Devise a publishing strategy and organize posts across profiles, networks and campaigns witha visualized calendar.',
            cardImgSrc: '/img/benefits-img.svg'
        },
        {
            title: 'Make the most out of your data',
            info: 'Measure the metrics that matter with custom, auto-generated, exhaustive reports. Use actionable insights to boost your ROI.',
            cardImgSrc: '/img/benefits-img.svg'
        },
        {
            title: 'Get analytics on latest trends.',
            info: 'Keep up with trends every single day. Gather feedback to help strategise new product, service and content ideas.',
            cardImgSrc: '/img/benefits-img.svg'
        }
    ]
}

interface Card {
    title: string;
    info: string;
    cardImgSrc: string;
}

interface BenefitsSectionContent {
    title: string;
    cards: Card[];
}

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
                                    <Image src={el.cardImgSrc} alt="Icon" width={70} height={70} />
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
                    <Image src="/img/benefits-g1.png" alt="shadow" width={1200} height={1200} />
                </figure>
            </div>
            <div className="bg-gradient img-cd benefits-g2">
                <figure>
                    <Image src="/img/benefits-g2.png" alt="shadow" width={1300} height={1300} />
                </figure>
            </div>
            <div className="bg-gradient img-cd benefits-g3">
                <figure>
                    <Image src="/img/benefits-g3.png" alt="shadow" width={800} height={800} />
                </figure>
            </div>
        </section>
    )
}