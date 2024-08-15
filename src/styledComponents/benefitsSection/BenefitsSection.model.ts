
export interface Card {
    title: string;
    info: string;
    cardImgSrc: string;
}

export interface BenefitsSectionContent {
    title: string;
    cards: Card[];
}