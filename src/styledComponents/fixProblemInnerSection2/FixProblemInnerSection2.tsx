import Image from "next/image"

const contentOfFixProblemInnerSection2 = {
    title: 'Good strategy only comes from reliable data.',
    subtitle: 'Get instant recommendations on SEO, content marketing and advertising with auto-generated, detailed reports. Boost your online visibility within days.',
    cards: [
        {
            info: 'No more juggling between 8 different tools',
            srcImage: '/img/problem-tick.svg'
        },
        {
            info: 'Draft, schedule and post content with a single software',
            srcImage: '/img/problem-tick.svg'
        }
    ],
    leftImgSrc: '/img/problem-inner2-img.png'
}

export const FixProblemInnerSection2 = () => {
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