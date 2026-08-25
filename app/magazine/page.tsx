'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './magazine.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredDataScript from '@/components/StructuredDataScript';
import { getBreadcrumbSchema } from '@/lib/structured-data';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: '-100px' },
};

const spreadPages = [
    { src: '/magazine/page-1.jpg', alt: 'Bombay FilmFame cover story opening spread featuring Gayathri Vish of Vish Design Studio' },
    { src: '/magazine/page-2.jpg', alt: 'Bombay FilmFame cover story interview spread on modern luxury and timeless design' },
    { src: '/magazine/page-3.jpg', alt: 'Bombay FilmFame cover story spread on cultural influences and design philosophy' },
    { src: '/magazine/page-4.jpg', alt: 'Bombay FilmFame cover story closing spread on sustainability and design legacy' },
];

export default function MagazinePage() {
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Magazine', url: '/magazine' },
    ];

    return (
        <main className={styles.magazinePage}>
            <StructuredDataScript data={getBreadcrumbSchema(breadcrumbItems)} />
            <Navbar />

            <div className={styles.container}>
                {/* Hero */}
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className={styles.pageHeader}
                >
                    <span className={styles.eyebrow}>As Featured In</span>
                    <motion.h1
                        className={styles.pageTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                    >
                        Bombay FilmFame Magazine
                    </motion.h1>
                    <motion.p
                        className={styles.pageSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                    >
                        Anniversary Issue &middot; Volume VII, Issue I &middot; August 2026
                    </motion.p>
                </motion.header>

                {/* Cover + Intro */}
                <motion.section className={styles.introSection} {...fadeInUp}>
                    <div className={styles.introGrid}>
                        <motion.div className={styles.coverImageWrapper} {...fadeInUp}>
                            <img
                                src="/magazine/cover.jpg"
                                alt="Bombay FilmFame Magazine cover, Anniversary Issue, August 2026"
                                className={styles.coverImage}
                            />
                        </motion.div>

                        <div className={styles.introContent}>
                            <div className={styles.introTag}>Cover Story</div>
                            <h2 className={styles.introTitle}>Global Vision, Indian Soul</h2>
                            <p className={styles.introText}>
                                In this exclusive cover story with Bombay FilmFame, founder <span className={styles.highlight}>Gayathri Vish</span> speaks about redefining modern luxury through thoughtful design and timeless living &mdash; and how Vish Design Studio blends the elegance of global design sensibilities with the soul of Indian craftsmanship.
                            </p>
                            <p className={styles.introText}>
                                From her academic roots in Sociology and International Studies to a design philosophy built on listening before designing, the feature traces the ideas that shape every space Vish Design Studio creates.
                            </p>
                            <Link href="/about" className={styles.sleekButton}>
                                Meet the Founder
                            </Link>
                        </div>
                    </div>
                </motion.section>

                {/* Pull quote */}
                <motion.section className={styles.quoteSection} {...fadeInUp}>
                    <blockquote className={styles.quote}>
                        &ldquo;A designer&apos;s greatest achievement isn&apos;t creating a space that impresses at first glance &mdash; it&apos;s creating one that continues to inspire long after the novelty has faded.&rdquo;
                    </blockquote>
                    <div className={styles.quoteAttribution}>Gayathri Vish, Founder &amp; Principal Designer</div>
                </motion.section>

                {/* Full spread gallery */}
                <motion.section
                    className={styles.spreadSection}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.15 } },
                    }}
                >
                    <h2 className={styles.spreadSectionTitle}>Read the Full Feature</h2>
                    <div className={styles.spreadGrid}>
                        {spreadPages.map((page) => (
                            <motion.div
                                key={page.src}
                                className={styles.spreadCard}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    show: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={page.src} alt={page.alt} className={styles.spreadImage} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Second quote / closing */}
                <motion.section className={styles.quoteSection} {...fadeInUp}>
                    <blockquote className={styles.quote}>
                        &ldquo;The finest interiors are born from curiosity, shaped by craftsmanship, and completed by the emotions they awaken in the people who experience them.&rdquo;
                    </blockquote>
                    <div className={styles.quoteAttribution}>Gayathri Vish, Founder &amp; Principal Designer</div>
                </motion.section>

                {/* Back link */}
                <motion.div className={styles.backLinkWrapper} {...fadeInUp}>
                    <Link href="/" className={styles.backLink}>
                        &larr; Back to Home
                    </Link>
                    <Link href="/projects" className={styles.sleekButton2}>
                        View Our Projects
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
