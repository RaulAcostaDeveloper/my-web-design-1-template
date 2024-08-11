import Image from "next/image"

export const LogoSection = () => {
    return (
        <section className="logo-section" data-aos="fade-up">
            <div className="container">
                <div className="logo-wrapper">
                    <div className="logo-card img-cd">
                        <figure>
                            <Image src="/img/logo-wrap1.png" alt="" width={200} height={200} />
                        </figure>
                    </div>
                    <div className="logo-card img-cd">
                        <figure>
                            <Image src="/img/logo-wrap2.png" alt="" width={200} height={200} />


                        </figure>
                    </div>
                    <div className="logo-card img-cd">
                        <figure>
                            <Image src="/img/logo-wrap3.png" alt="" width={200} height={200} />

                        </figure>
                    </div>
                    <div className="logo-card img-cd">
                        <figure>
                            <Image src="/img/logo-wrap4.png" alt="" width={200} height={200} />

                        </figure>
                    </div>
                    <div className="logo-card img-cd">
                        <figure>
                            <Image src="/img/logo-wrap5.png" alt="" width={200} height={200} />

                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}