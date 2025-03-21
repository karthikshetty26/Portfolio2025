"use client"
import navCSS from './navbar.module.css';
import { useEffect, useState, memo } from 'react';
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

    // Effect to update showMenu when pathname changes
    useEffect(() => {
        setShowMenu(pathname === '/');

        // If navigating away from root, close the menu if it's open
        if (pathname !== '/' && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [pathname, isMenuOpen]);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Toggle menu function
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    // Smooth scroll handler
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

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

    return (
        <>
            {/* Theme toggle */}
            <div className={`${navCSS.theme_div} ${!showMenu ? navCSS.only_theme : ''}`} onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'}&nbsp;&nbsp;

                <button className={navCSS.dark_light_btn}>
                    <span>
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
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

            {/* Side nav */}
            <nav className={`${navCSS.side_nav} ${isMenuOpen ? navCSS.show : ''}`}>
                {/* Side nav main section */}
                <main className={`${navCSS.hold_nav} ${isMenuOpen ? navCSS.show : ''}`}>
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