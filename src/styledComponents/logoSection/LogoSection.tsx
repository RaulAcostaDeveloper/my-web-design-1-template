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

interface Logo {
    srcImage: string;
}
interface props {
    images: Logo[]
}
export const LogoSection = (contentOfLogoSection: props) => {
    return (
        <section className="logo-section" data-aos="fade-up">
            <div className="container">
                <div className="logo-wrapper">
                    {contentOfLogoSection.images.map( (el, index) => (
                        <div className="logo-card img-cd" key={el.srcImage + index}>
                            <figure>
                                <Image src={el.srcImage} alt="logo of a company" width={200} height={200} />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}