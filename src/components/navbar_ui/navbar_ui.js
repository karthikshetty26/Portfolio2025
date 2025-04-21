"use client"
import navCSS from './navbar.module.css';
import { useEffect, useState, memo, useRef } from 'react';
import { usePathname } from "next/navigation";

// Memoized ArrowTopRight component to reuse icon
const ArrowTopRight = memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
    </svg>
));
ArrowTopRight.displayName = 'ArrowTopRight';

// Navigation items list
const MENU_ITEMS = [
    { name: 'HOME', href: 'home' },
    { name: 'ABOUT', href: 'about' },
    { name: 'MY STACK', href: 'stack' },
    { name: 'PROJECTS', href: 'projects' },
    { name: 'BLOGS', href: 'blogs' },
    { name: 'CONTACT', href: 'contact' }
];

export default function NavbarUi() {
    const pathname = usePathname();
    const isRootPath = pathname === '/';

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [showMenu, setShowMenu] = useState(isRootPath);
    const resfOne = useRef(null);

    // Handle theme toggle
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Handle menu toggle
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    // Smooth scroll
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Update `showMenu` based on pathname
    useEffect(() => {
        setShowMenu(pathname === '/');

        // If navigating away from root, close the menu if it's open
        if (pathname !== '/' && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [pathname, isMenuOpen]);

    // Initialize theme from local storage or system preference
    useEffect(() => {
        // Get theme from storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

        // Apply theme
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

        // Add listener for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Detect clicks outside menu
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (resfOne.current && !resfOne.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        };

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <>
            <main className={navCSS.float_nav}>
                {/* Theme toggle */}
                <div className={`${navCSS.theme_div} ${isMenuOpen ? navCSS.only_menu : ''}`} onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark' : 'Light'}&nbsp;&nbsp;

                    <button className={navCSS.dark_light_btn}>
                        <span>
                            {theme === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                            )}

                        </span>
                    </button>
                </div>

                {/* Menu button - only show on root path */}
                {showMenu && (
                    <div className={navCSS.menu_div} onClick={toggleMenu}>
                        Menu&nbsp;
                        <button
                            className={isMenuOpen ? navCSS.open : ''}
                            id={navCSS.navIcon}
                        >
                            <span className={navCSS.span_icon}></span>
                            <span className={navCSS.span_icon}></span>
                            <span className={navCSS.span_icon}></span>
                            <span className={navCSS.span_icon}></span>
                        </button>
                    </div>
                )}
            </main>

            {/* Side nav */}
            <nav className={`${navCSS.side_nav} ${isMenuOpen ? navCSS.show : ''}`}>
                {/* Side nav main section */}
                <main className={`${navCSS.hold_nav} ${isMenuOpen ? navCSS.show : ''}`} ref={resfOne}>
                    {/* Link listing */}
                    <ul className={navCSS.show_menu_values}>
                        {MENU_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a href={`#${item.href}`} onClick={handleSmoothScroll}>
                                    <ArrowTopRight /> {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </main>
            </nav>
        </>
    );
}