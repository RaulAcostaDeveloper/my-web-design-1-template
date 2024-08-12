import Image from "next/image"

const contentOfFooter = {
    srcLogo: '/img/logo.png',
    hrefLogo: '#',
    mailOfContact: 'hello@saasbox.com',
    numberOfContact: '+99-565-654',
    numberForHref: '+99565654',
    socialMedia: [
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
    ],
    footerLinks: [
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
    ],
    copyright: {
        title: '© All rights reserved.',
        propietario: {
            title: 'Conversion Flow',
            href: '#'
        },
        platform: {
            title: ' Webflow.',
            href: '#'
        }

    },
    moreLinks: [
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
    ]
}

interface SocialMediaLink {
    imgSrc: string;
    href: string;
}

interface PageLink {
    title: string;
    href: string;
}

interface FooterSection {
    title: string;
    pages: PageLink[];
}

interface CopyrightInfo {
    title: string;
    propietario: PageLink;
    platform: PageLink;
}

interface FooterContent {
    srcLogo: string;
    hrefLogo: string;
    mailOfContact: string;
    numberOfContact: string;
    numberForHref: string;
    socialMedia: SocialMediaLink[];
    footerLinks: FooterSection[];
    copyright: CopyrightInfo;
    moreLinks: PageLink[];
}

export const Footer = (contentOfFooter: FooterContent) => {
    return (
        <footer data-aos="fade-up">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <a href={contentOfFooter.hrefLogo} className="img-cd">
                                <figure>
                                    <Image src={contentOfFooter.srcLogo} alt="logo of the company" width={200} height={50} />
                                </figure>
                            </a>
                        </div>
                        {/* Nota. No recomiendo el uso de mailto: para este caso. Deberían realizar una función callback. */}
                        <a href={`mailto:${contentOfFooter.mailOfContact}`} className="email-link">{contentOfFooter.mailOfContact}</a>
                        <a href={`tel:${contentOfFooter.numberForHref}`} className="tel-link">{contentOfFooter.numberOfContact}</a>
                        <div className="social-wrapper">
                            {contentOfFooter.socialMedia.map((el, index) => (
                                <div className="social-icon img-cd" key={el.href + index}>
                                    <a href={el.href} target="_blank">
                                        <figure>
                                            <Image src={el.imgSrc} alt="social media icon" width={24} height={24} />
                                        </figure>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-grid">
                            {contentOfFooter.footerLinks.map((el, index) => (
                                <div key={el.title + index} className="footer-links">
                                    <h4>{el.title}</h4>
                                    {el.pages.map((page, index) => (
                                        <a key={page.href + index} href={page.href}>{page.title}</a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="copyright-left">
                        <p>{contentOfFooter.copyright.title} 
                            <a href={contentOfFooter.copyright.propietario.href}>
                                {contentOfFooter.copyright.propietario.title}</a>
                            , Inc. Powered by 
                            <a href={contentOfFooter.copyright.platform.href}>
                                {contentOfFooter.copyright.platform.title}
                                </a>
                        </p>
                    </div>
                    <div className="copyright-right">
                        {contentOfFooter.moreLinks.map((el, index) =>(
                            <a key={el.title + index} href={el.href}>{el.title}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}