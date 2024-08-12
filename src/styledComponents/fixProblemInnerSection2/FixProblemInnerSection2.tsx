import Image from "next/image"

interface Card {
    info: string;
    srcImage: string;
}

interface FixProblemInnerSectionContent {
    title: string;
    subtitle: string;
    cards: Card[];
    leftImgSrc: string;
}

export const FixProblemInnerSection2 = (contentOfFixProblemInnerSection2: FixProblemInnerSectionContent) => {
    return (
        <section className="fix-problem-inner-section2" data-aos="fade-up">
            <div className="container">
                <div className="fix-problem-inner1">
                    <div className="problem-inner1-right">
                        <h2>{contentOfFixProblemInnerSection2.title}</h2>
                        <p>{contentOfFixProblemInnerSection2.subtitle}</p>
                        <div className="problem-manage-wrap">
                            {contentOfFixProblemInnerSection2.cards.map( (el, index) => (
                                <div className="problem-manage-card" key={el.srcImage + index}>
                                    <div className="problem-manage-img img-cd">
                                        <figure>
                                            <Image src={el.srcImage} alt="icon for card" width={30} height={30} />
                                        </figure>
                                    </div>
                                    <div className="problem-manage-txt">
                                        <p>{el.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="problem-inner1-left">
                        <div className="problem-inner-img img-cd">
                            <figure>
                                <Image src={contentOfFixProblemInnerSection2.leftImgSrc} alt="right image" width={600} height={500} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-wave wave-2 img-cd">
                <figure>
                    <Image className="wave-img" src="/img/problem-wave2.png" alt="wave ornament" width={700} height={700} />
                </figure>
            </div>
        </section>
    )
}