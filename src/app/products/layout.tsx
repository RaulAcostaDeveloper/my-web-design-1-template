import React from 'react';
import './products.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <h1>Your page</h1>
            <p>Products layout</p>
            {/* Contenido de page.tsx*/}
            {children}
        </div>
    );
}

export default Layout;