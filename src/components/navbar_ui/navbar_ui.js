"use client"
import navCSS from './navbar.module.css';
import { useEffect, useState, memo } from 'react';

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
    { name: 'PROJECT', href: 'project' },
    { name: 'BLOG', href: 'blog' },
    { name: 'CONTACT', href: 'contact' }
  ];
  

export default function NavbarUi() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

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
            <div className={navCSS.theme_div} onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'}&nbsp;&nbsp;
                <button className={navCSS.dark_light_btn}>
                    <span className={theme === 'light' ? navCSS.light : navCSS.dark}></span>
                </button>
            </div>

            {/* Menu button */}
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