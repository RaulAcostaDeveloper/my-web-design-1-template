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
        <>
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
                }} />
            {/* <HeroSection/> */}
            {/* <LogoSection/> */}
            {/* <ProblemSection/> */}
            {/* <CauseSection /> */}
            {/* <FixProblemSection/> */}
            {/* <FixProblemInnerSection1/> */}
            {/* <FixProblemInnerSection2/> */}
            {/* <TestimonialSection/> */}
            {/* <BenefitsSection/> */}
            {/* <ContactSection/> */}
            {/* <Footer/> */}
        </>
    )
}
