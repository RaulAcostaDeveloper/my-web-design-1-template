'use client'

import Image from "next/image";

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

interface props {
    srcLogo: string;
    hrefLogo: string;
    menuSections: MenuSection[];
    principalButton: Button;
    cart: Cart;
}

export const Navbar = (contentOfNavbar: props) => {
    const closeNav = () => {
        const menu = document.getElementById('menu');
        const menuToggle = document.getElementById('menuToggle');

        if (menu && menuToggle) {
            // Verifica si `menu` es un elemento HTML de tipo HTMLElement
            if (window.getComputedStyle(menu).display === 'flex') {
                menu.style.display = 'none';
                if (menuToggle instanceof HTMLElement) {
                    menuToggle.innerHTML = '☰';
                }
            }
        }
    }

    const toggleMenu = () => {
        const menu = document.getElementById('menu');
        const menuToggle = document.getElementById('menuToggle');

        if (menu && menuToggle) {
            if (menu.style.display === 'flex') {
                menu.style.display = 'none';
                if (menuToggle instanceof HTMLElement) {
                    menuToggle.innerHTML = '☰';
                }
            } else {
                menu.style.display = 'flex';
                if (menuToggle instanceof HTMLElement) {
                    menuToggle.innerHTML = '✖';
                }
            }
        }
    }
    return (
        <nav id="navbar">
            <div className="container">
                <div className="nav">
                    <div id="logo">
                        <a href={contentOfNavbar.hrefLogo} className="img-cd">
                            <figure>
                                <Image src={contentOfNavbar.srcLogo} alt="logo" width={300} height={300} />
                            </figure>
                        </a>
                    </div>
                    <div id="menu">
                        {contentOfNavbar?.menuSections.map( (el, index) => (
                            <a key={el.title + index} href={el.href} onClick={closeNav}>{el.title}</a>
                        ))}
                        <div className="menu-btn mob">
                            <a href={contentOfNavbar.principalButton.href}>{contentOfNavbar.principalButton.title}</a>
                        </div>
                        <div className="menu-item desk">
                            <a href={contentOfNavbar.cart.href}>Cart ({contentOfNavbar.cart.quantity})</a>
                        </div>
                    </div>
                    <div className="menu-btn desk">
                        <a href={contentOfNavbar.principalButton.href}>{contentOfNavbar.principalButton.title}</a>
                    </div>
                    <div className="mob-menu">
                        <div className="menu-item mob">
                            <a href={contentOfNavbar.cart.href}>Cart ({contentOfNavbar.cart.quantity})</a>
                        </div>
                        <div id="menuToggle" className="navbar-toggler" onClick={toggleMenu}>☰</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}