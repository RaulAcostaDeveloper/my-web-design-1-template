import Image from "next/image"
import { FixProblemInnerSectionContent } from "./FixProblemInnerSection.model"

export const FixProblemInnerSection1 = (contentOfFixProblemInnerSection1: FixProblemInnerSectionContent) => {
    return (
        <section className="fix-problem-inner-section1" data-aos="fade-up">
            <div className="container">
                <div className="fix-problem-inner1">
                    <div className="problem-inner1-left">
                        <div className="problem-inner-img img-cd">
                            <figure>
                                <Image src={contentOfFixProblemInnerSection1.problemInnerImgSrc} alt="left side image" width={600} height={600} />
                            </figure>
                        </div>
                    </div>
                    <div className="problem-inner1-right">
                        <h2>{contentOfFixProblemInnerSection1.title}</h2>
                        <div className="problem-manage-wrap">
                            {contentOfFixProblemInnerSection1.cards.map( (el, index) => (
                                <article className="problem-manage-card" key={ el.title + index}>
                                    <div className="problem-manage-img img-cd">
                                        <figure>
                                            <Image src={el.srcImage} alt="icon for this card" width={50} height={50} />
                                        </figure>
                                    </div>
                                    <div className="problem-manage-txt">
                                        <h3>{el.title}</h3>
                                        <p>{el.info}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-wave wave-1 img-cd">
                <figure>
                    <img className="wave-img" src="/img/problem-wave.png" alt="ornament wave"/>
                </figure>
            </div>
        </section>
    )
}