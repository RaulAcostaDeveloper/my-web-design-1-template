import Image from "next/image"

const contentOfLogoSection = [
    {
        srcImage: '/img/logo-wrap1.png',
    },
    {
        srcImage: '/img/logo-wrap2.png',
    },
    {
        srcImage: '/img/logo-wrap3.png',
    },
    {
        srcImage: '/img/logo-wrap4.png',
    },
    {
        srcImage: '/img/logo-wrap5.png',
    },
]

export const LogoSection = () => {
    return (
        <section className="logo-section" data-aos="fade-up">
            <div className="container">
                <div className="logo-wrapper">
                    {contentOfLogoSection.map(el => (
                        <div className="logo-card img-cd">
                            <figure>
                                <Image src={el.srcImage} alt="" width={200} height={200} />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}