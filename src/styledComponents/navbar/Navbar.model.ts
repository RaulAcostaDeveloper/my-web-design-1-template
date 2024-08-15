interface MenuSection {
    href: string;
    title: string;
}

interface Button {
    title: string;
    href: string;
}

interface Cart {
    href: string;
    quantity: number;
}

export interface NavbarContent {
    srcLogo: string;
    hrefLogo: string;
    menuSections: MenuSection[];
    principalButton: Button;
    cart: Cart;
}