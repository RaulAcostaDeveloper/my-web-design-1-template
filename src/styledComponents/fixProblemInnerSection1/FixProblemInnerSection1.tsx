import Image from "next/image"
const contentOfFixProblemInnerSection1 = {
    title: 'Social media management doesn\'t have to be a headache.',
    problemInnerImgSrc: '/img/problem-img-left.png',
    cards: [
        {
            title: 'A centralised hub for all your social media',
            info: 'Monitor social activity and organize all posts, reviews, and customer engagement from a single platform.',
            srcImage: '/img/problem-r1.svg'
        },
        {
            title: 'Keep your audience engaged',
            info: 'Deliver content that resonates with your customers. Keep track of what is working, with engagement tools.',
            srcImage: '/img/problem-r2.svg'
        },
        {
            title: 'Build better marketing strategies',
            info: 'Track campaign performance across all social media with detailed reports. Gain a clear picture of what’s working, and what isn\'t.',
            srcImage: '/img/problem-r3.svg'
        }
    ]
}
interface Card {
    title: string;
    info: string;
    srcImage: string;
}

interface FixProblemInnerSectionContent {
    title: string;
    problemInnerImgSrc: string;
    cards: Card[];
}
interface props {
    title: string;
    problemInnerImgSrc: string;
    cards: Card[];
}
export const FixProblemInnerSection1 = (contentOfFixProblemInnerSection1: props) => {
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
                    <Image className="wave-img" src="/img/problem-wave.png" alt="ornament wave" width={700} height={600} />
                </figure>
            </div>
        </section>
    )
}