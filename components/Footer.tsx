"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";

// Container for word-by-word animation
const wordContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.05,
        },
    },
};

// Single word animation
const wordItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

// Simple fade-up for lines / blocks
const lineFade = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

// Helper for word-by-word text
const AnimatedWords = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => (
    <motion.span
        className={className}
        variants={wordContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
    >
        {text.split(" ").map((word, index) => (
            <motion.span
                key={index}
                variants={wordItem}
                style={{ display: "inline-block", marginRight: "0.25em" }}
            >
                {word}
            </motion.span>
        ))}
    </motion.span>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Left: Brand */}
                <motion.div
                    className={styles.brandSection}
                    variants={lineFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className={styles.brandRow}>
                        <motion.img
                            src="/logo.png"
                            alt="Brand Logo"
                            className={styles.logoImage}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />

                        <div className={styles.brandTextBlock}>
                            <AnimatedWords
                                text="Vish Design Studio"
                                className={styles.logoTitle}
                            />

                            <AnimatedWords
                                text="Designing interiors that balance beauty and functionality."
                                className={styles.tagline}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Middle: Navigation */}
                <motion.nav
                    className={styles.navSection}
                    aria-label="Footer navigation"
                    variants={lineFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <div className={styles.navColumn}>
                        <span className={styles.navTitle}>Explore</span>

                        {["Home", "About", "Contact"].map((label, index) => (
                            <motion.div
                                key={label}
                                variants={lineFade}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.4 }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                    delay: 0.15 + index * 0.05,
                                }}
                            >
                                <Link
                                    href={
                                        label === "Home"
                                            ? "#Home"
                                                : label === "About"
                                                    ? "#about"
                                                    : "#contact"
                                    }
                                    className={styles.navLink}
                                >
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.navColumn}>
                        <span className={styles.navTitle}>More</span>

                        {[
                            { label: "Design Process", href: "#Designprocess" },
                            { label: "Projects", href: "#Projects" },
                            { label: "Blog", href: "#Blog" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                variants={lineFade}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.4 }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                    delay: 0.2 + index * 0.05,
                                }}
                            >
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.nav>

                {/* Right: Social / Contact */}
                <motion.div
                    className={styles.contactSection}
                    variants={lineFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                    {/* "Let's connect" – word by word */}
                    <AnimatedWords
                        text="Let’s connect"
                        className={styles.navTitle}
                    />

                    {/* Email – fades in + words stagger inside */}
                    <motion.a
                        href="mailto:hello@vishdesignstudio.com"
                        className={styles.emailLink}
                        variants={wordContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{
                            staggerChildren: 0.06,
                            delayChildren: 0.25,
                        }}
                    >
                        {`hello@vishdesignstudio.com`.split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordItem}
                                style={{ display: "inline-block", marginRight: "0.25em" }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.a>

                    <div className={styles.socialRow}>
                        {[
                            {
                                name: "Instagram",
                                href: "https://www.instagram.com",
                                icon: <FaInstagram />,
                            },
                            {
                                name: "LinkedIn",
                                href: "https://www.linkedin.com",
                                icon: <FaLinkedinIn />,
                            },
                            {
                                name: "YouTube",
                                href: "https://www.youtube.com",
                                icon: <FaYoutube />,
                            },
                            {
                                name: "Facebook",
                                href: "https://www.facebook.com",
                                icon: <FaFacebookF />,
                            },
                        ].map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.socialLink}
                                variants={lineFade}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.4 }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                    delay: 0.3 + index * 0.07,
                                }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
                className={styles.bottomBar}
                variants={lineFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            >
                <AnimatedWords
                    text={`© ${currentYear} Vish Design Studio. All rights reserved.`}
                    className={styles.bottomText}
                />
                <div className={styles.bottomLinks}>
                    <Link href="/privacy" className={styles.bottomLink}>
                        Privacy
                    </Link>
                    <span className={styles.separator}>•</span>
                    <Link href="/terms" className={styles.bottomLink}>
                        Terms
                    </Link>
                </div>
            </motion.div>
        </footer>
    );
}
