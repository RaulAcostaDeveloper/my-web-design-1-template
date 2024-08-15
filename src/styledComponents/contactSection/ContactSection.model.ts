interface Button {
    title: string;
    callBack: () => void;
}

interface Form {
    placeholder: string;
    srcIcon: string;
    button: Button;
}

export interface ContactSectionContent {
    title: string;
    subtitle: string;
    form: Form;
    ornamentImg1Src: string;
    ornamentImg2Src: string;
    ornamentImg3Src: string;
    ornamentImg4Src: string;
}