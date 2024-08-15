interface SubInfo {
    title: string;
    info: string;
}

interface Slide {
    title: string;
    info: string;
    headImgSrc: string;
    subtitle: string;
    subtitleImgSrc: string;
    subInfo: SubInfo[];
}

export interface TestimonialSectionContent {
    slides: Slide[];
    ornamentImg1Src: string;
    ornamentImg2Src: string;
    ornamentImg3Src: string;
    ornamentImg4Src: string;
}
