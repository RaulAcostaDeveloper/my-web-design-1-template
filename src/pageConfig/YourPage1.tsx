'use client'
// Puede usar este componente para configurar una página
import { BenefitsSection } from "@/styledComponents/benefitsSection/BenefitsSection";
import { CauseSection } from "@/styledComponents/causeSection/CauseSection";
import { ContactSection } from "@/styledComponents/contactSection/ContactSection";
import { FixProblemInnerSection1 } from "@/styledComponents/fixProblemInnerSection1/FixProblemInnerSection1";
import { FixProblemInnerSection2 } from "@/styledComponents/fixProblemInnerSection2/FixProblemInnerSection2";
import { FixProblemSection } from "@/styledComponents/fixProblemSection/FixProblemSection";
import { Footer } from "@/styledComponents/footer/Footer";
import { HeroSection } from "@/styledComponents/heroSection/HeroSection";
import { LogoSection } from "@/styledComponents/logoSection/LogoSection";
import { Navbar } from "@/styledComponents/navbar/Navbar";
import { ProblemSection } from "@/styledComponents/problemSection/ProblemSection";
import { TestimonialSection } from "@/styledComponents/testimonialSection/TestimonialSection";
import { useEffect } from "react";
import AOS from 'aos';
// Importa los estilos de AOS
import 'aos/dist/aos.css';
import '@splidejs/splide/dist/css/splide.min.css';

export const YourPage1 = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const handleScroll = (): void => {
            const sections = document.querySelectorAll<HTMLElement>('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                if (
                    scrollPosition >= section.offsetTop
                    && scrollPosition < section.offsetTop + section.offsetHeight) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="pageTemplate">
            <Navbar
                srcLogo="/img/logo.png"
                hrefLogo="#"
                menuSections={[
                    {
                        href: '#',
                        title: 'Home'
                    },
                    {
                        href: '#',
                        title: 'Pricing'
                    },
                    {
                        href: '#',
                        title: 'Blog'
                    },
                    {
                        href: '#',
                        title: 'Company'
                    },
                    {
                        href: '#',
                        title: 'Resources'
                    },
                ]}
                principalButton={{
                    title: 'Sign Up',
                    href: '#'
                }}
                cart={{
                    href: '#',
                    quantity: 0
                }}
            />
            <HeroSection
                title='A smart solution for all your social media marketing needs.'
                subTitle='Plan, engage, and analyse with ease. Transform your social media strategy with an all-in-one platform.'
                form={
                    {
                        placeholder: 'Enter your mail',
                        srcIcon: '/img/mail.png',
                        button: {
                            title: 'Start for free',
                            callBack: () => { console.log('button ressed') }
                        }
                    }
                }
                features={
                    [
                        {
                            title: 'Free 14-day Demo'
                        },
                        {
                            title: 'No credit card needed'
                        },
                        {
                            title: 'No Setup'
                        }
                    ]
                }
                principalImageSrc='./img/laptop.png'
                socialMediaIconSrc1='./img/laptop-ig.svg'
                socialMediaIconSrc2='./img/laptop-tt.svg'
                socialMediaIconSrc3='./img/laptop-fb.svg'
                waveImageSrc='./img/hero-wave.png'
            />
            <LogoSection
                images={[
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
                ]}
            />
            <ProblemSection
                title='Tired of running unsuccessful social marketing campaigns?'
                subtitle='Your social media strategy cannot be based on guesswork. Get custom auto-generated reports from all your profiles, with SaasBox.'
            />
            <CauseSection 
                splideElements={[
                    {
                        title: 'Excel sheets and google docs are just silos of data.',
                        subtitle: 'Manually creating reports that just sit on your computer isn\'t going to work anymore. Get complete oversight of all connected social profiles from a single platform.',
                        srcImg: '/img/cause1.png',
                    },
                    {
                        title: 'Give Context. What is the cause of this problem?',
                        subtitle: 'Talk about the things that cause this problem. This shows the user that you actually understand the problem and empathize with them about their situation.',
                        srcImg: '/img/cause2.png',
                    },
                    {
                        title: 'Give Context. What is the cause of this problem?',
                        subtitle: 'Talk about the things that cause this problem. This shows the user that you actually understand the problem and empathize with them about their situation.',
                        srcImg: '/img/cause3.png',
                    }
                ]} 
            />
            <FixProblemSection 
                title='Devise the best social media marketing strategy with one centralized, robust solution.'
            />
            <FixProblemInnerSection1 
                // Ejemplo de lo que deben hacer para evitar errores entre navegadores.
                title= 'Social media management doesn&apos;t have to be a headache.'
                problemInnerImgSrc= '/img/problem-img-left.png'
                cards={[
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
                ]}
            />
            <FixProblemInnerSection2 
                title= 'Good strategy only comes from reliable data.'
                subtitle= 'Get instant recommendations on SEO, content marketing and advertising with auto-generated, detailed reports. Boost your online visibility within days.'
                cards= {[
                    {
                        info: 'No more juggling between 8 different tools',
                        srcImage: '/img/problem-tick.svg'
                    },
                    {
                        info: 'Draft, schedule and post content with a single software',
                        srcImage: '/img/problem-tick.svg'
                    }
                ]}
                leftImgSrc= '/img/problem-inner2-img.png'
            />
            <TestimonialSection
                slides={[
                    {
                        title: '"A 360 degree view of all my projects."',
                        info: '"SaasBox lets us create a month’s worth of content in one week for our clients, allowing us to spend the rest of the month engaging and optimizing.”',
                        headImgSrc: '/img/quatation-mark.svg',
                        subtitle: 'Sophia Thompson, Founder & CEO, Socially',
                        subtitleImgSrc: '/img/client1.png',
                        subInfo: [
                            {
                                title: '23%',
                                info: 'more followers within a month'
                            },
                            {
                                title: '14X',
                                info: 'Return on Investment'
                            }
                        ]
                    },
                    {
                        title: '"Helps me stay on top of all marketing."',
                        info: '"With SaasBox, I can have a clear view of all metrics and analytics to make necessary changes in my marketing strategies. I am able to catch up with current trends and manage all our social media channels without too much effort."',
                        headImgSrc: '/img/quatation-mark.svg',
                        subtitle: 'Elle Rabe, co-founder, Falcon',
                        subtitleImgSrc: '/img/client2.png',
                        subInfo: [
                            {
                                title: '14%',
                                info: 'more followers within a month'
                            },
                            {
                                title: '8X',
                                info: 'Return on Investment'
                            }
                        ]
                    },
                    {
                        title: 'Customer X achieved 14x ROI in the first month !',
                        info: 'Explain how the customer was in a similar situation as your user, struggling with similar problems. Talk about their transition to your product and the outcome: how it solved their problems and helped them achieve their goals.',
                        headImgSrc: '/img/quatation-mark.svg',
                        subtitle: 'Lisa Hayden',
                        subtitleImgSrc: '/img/client3.png',
                        subInfo: [
                            {
                                title: '23%',
                                info: 'Primary Result Stat'
                            },
                            {
                                title: '14X',
                                info: 'Return on Investment'
                            }
                        ]
                    },
                ]}
                ornamentImg1Src='/img/tm-img1.png'
                ornamentImg2Src='/img/tm-img2.png'
                ornamentImg3Src='/img/tm-img3.png'
                ornamentImg4Src='/img/tm-img4.png'
            />
            <BenefitsSection
                title='An all-in-one social media management platform for all your needs.'
                cards={[
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
                ]}
            />
            <ContactSection
                title='Transform the way you handle your social media, transform the way you do business.'
                subtitle='Learn how SaasBox can help take your social media marketing to the next level.'
                form={{
                    placeholder: 'Enter your mail',
                    srcIcon: '/img/mail.png',
                    button: {
                        title: 'Start for free',
                        callBack: () => { console.log('button ressed') }
                    }
                }}
                ornamentImg1Src='/img/tm-img1.png'
                ornamentImg2Src='/img/tm-img2.png'
                ornamentImg3Src='/img/tm-img3.png'
                ornamentImg4Src='/img/tm-img4.png'
            />
            <Footer
                srcLogo= '/img/logo.png'
                hrefLogo= '#'
                mailOfContact= 'hello@saasbox.com'
                numberOfContact= '+99-565-654'
                numberForHref= '+99565654'
                socialMedia= {[
                    {
                        imgSrc: '/img/fb.svg',
                        href: '#'
                    },
                    {
                        imgSrc: '/img/twitter.svg',
                        href: '#'
                    },
                    {
                        imgSrc: '/img/linkedin.svg',
                        href: '#'
                    },
                    {
                        imgSrc: '/img/ig.svg',
                        href: '#'
                    },
                ]}
                footerLinks= {[
                    {
                        title: 'Links',
                        pages: [
                            {
                                title: 'Home',
                                href: '#'
                            },
                            {
                                title: 'Pricing',
                                href: '#'
                            },
                            {
                                title: 'Blog',
                                href: '#'
                            },
                            {
                                title: 'Company',
                                href: '#'
                            },
                            {
                                title: 'Resources',
                                href: '#'
                            },
                        ]
                    },
                    {
                        title: 'Others',
                        pages: [
                            {
                                title: 'Downloads',
                                href: '#'
                            },
                            {
                                title: 'Book A Demo',
                                href: '#'
                            },
                            {
                                title: 'Terms & Conditions',
                                href: '#'
                            },
                        ]
                    },
                    {
                        title: 'Others',
                        pages: [
                            {
                                title: 'Sign Up',
                                href: '#'
                            },
                            {
                                title: 'Log In',
                                href: '#'
                            },
                            {
                                title: 'Passowrd',
                                href: '#'
                            },
                            {
                                title: '404',
                                href: '#'
                            },
                        ]
                    },
                ]}
                copyright= {{
                    title: '© All rights reserved.',
                    propietario: {
                        title: 'Conversion Flow',
                        href: '#'
                    },
                    platform: {
                        title: ' Webflow.',
                        href: '#'
                    }
                }}
                moreLinks= {[
                    {
                        title: 'Style Guide',
                        href: '#'
                    },
                    {
                        title: 'Licence',
                        href: '#'
                    },
                    {
                        title: 'Instructions',
                        href: '#'
                    },
                    {
                        title: 'Changelog',
                        href: '#'
                    },
                ]}
            />
        </div>
    )
}
