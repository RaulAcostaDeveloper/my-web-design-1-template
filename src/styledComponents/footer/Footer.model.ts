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

export interface FooterContent {
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