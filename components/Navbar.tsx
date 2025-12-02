'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Vish Design Studio
            </Link>

            <ul className={styles.navLinks}>
                <li>
                    <Link href="/" className={isActive('/') && pathname === '/' ? styles.active : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={isActive('/about') ? styles.active : ''}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className={isActive('/projects') ? styles.active : ''}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/design-process" className={isActive('/design-process') ? styles.active : ''}>
                        Design Process
                    </Link>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <Link href="/contact" className={isActive('/contact') ? styles.active : ''}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
