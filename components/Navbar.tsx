'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${pathname === '/' ? styles.navbarTransparent : ''}`}>
            <Link href="/" className={styles.logo}>
                <img src="/logo2.png" alt="Logo" className={styles.logoImage} />
            </Link>

            {/* Hamburger Menu Button */}
            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation Links */}
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                <li>
                    <Link
                        href="/"
                        className={isActive('/') && pathname === '/' ? styles.active : ''}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={isActive('/about') ? styles.active : ''}
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className={isActive('/projects') ? styles.active : ''}
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/design-process"
                        className={isActive('/design-process') ? styles.active : ''}
                        onClick={closeMenu}
                    >
                        Design Process
                    </Link>
                </li>
                <li>
                    <Link
                        href="/blog"
                        className={isActive('/blog') ? styles.active : ''}
                        onClick={closeMenu}
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={isActive('/contact') ? styles.active : ''}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Overlay for closing menu when clicking outside */}
            {isMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={closeMenu}
                    aria-hidden="true"
                ></div>
            )}
        </nav>
    );
}
