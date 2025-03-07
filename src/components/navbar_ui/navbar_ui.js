"use client"
import navCSS from './navbar.module.css';
import { useEffect, useState } from 'react';

export default function NavbarUi() {
    const [ToggleMenu, setToggleMenu] = useState(false)
    const [theme, setTheme] = useState('light');

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save to local storage
        document.documentElement.setAttribute('data-theme', newTheme); // Apply to HTML
    };

    // Initialize theme from local storage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme); // Apply to HTML
    }, []);

    function Logo() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
            </svg>
        );
    }

    return (
        <>
            <div className={navCSS.theme_div}
                onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'}&nbsp;&nbsp;
                <button className={navCSS.dark_light_btn}>
                    <span className={theme === 'light' ? navCSS.light : navCSS.dark}></span>
                </button>
            </div>

            <div className={navCSS.menu_div}
                onClick={() => setToggleMenu(!ToggleMenu)}>
                Menu&nbsp;
                <button
                    className={`${ToggleMenu ? navCSS.open : ''}`}
                    id={navCSS.navIcon} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav
                className={`${navCSS.side_nav} ${ToggleMenu ? navCSS.show : ''}`}>
                <main
                    className={`${navCSS.hold_nav} ${ToggleMenu ? navCSS.show : ''}`} >
                        <ul className={navCSS.show_menu_values}>
                            <li><Logo /> HOME</li>
                            <li><Logo /> PROJECT</li>
                            <li><Logo /> BLOG</li>
                            <li><Logo /> CONTACT</li>
                        </ul>
                </main>
        </nav >
        </>
    );
}