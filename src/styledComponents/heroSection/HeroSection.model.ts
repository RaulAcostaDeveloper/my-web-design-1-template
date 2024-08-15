interface Button {
    title: string;
    callBack: () => void;
}

interface Form {
    placeholder: string;
    srcIcon: string;
    button: Button;
}

interface Feature {
    title: string;
}

export interface HeroSectionContent {
    title: string;
    subTitle: string;
    form: Form;
    features: Feature[];
    principalImageSrc: string;
    socialMediaIconSrc1: string;
    socialMediaIconSrc2: string;
    socialMediaIconSrc3: string;
    waveImageSrc: string;
}