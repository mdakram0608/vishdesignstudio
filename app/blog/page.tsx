'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blogData';
import styles from './blog.module.css';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "-100px" }
};

const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.15 },
    viewport: { once: true }
};

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <div className={styles.blogPage}>
                {/* Hero Section with Parallax */}
                <motion.section
                    className={styles.hero}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className={styles.heroContent}>
                        <motion.h1
                            className={styles.heroTitle}
                            {...fadeInUp}
                        >
                            Design Insights
                        </motion.h1>
                        <motion.p
                            className={styles.heroSubtitle}
                            {...fadeInUp}
                            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        >
                            Exploring the art and science of interior design through our curated collection of thoughtful spaces
                        </motion.p>
                    </div>
                </motion.section>

                {/* Blog Grid */}
                <motion.section
                    className={styles.blogGrid}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                >
                    {blogPosts.map((post, index) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug}>
                            <motion.article
                                className={styles.blogCard}
                                variants={fadeInUp}
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={post.featuredImage}
                                        alt={post.title}
                                        className={styles.featuredImage}
                                    />
                                    <div className={styles.imageOverlay}></div>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.category}>{post.category}</span>
                                        <span className={styles.date}>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <h2 className={styles.cardTitle}>{post.title}</h2>
                                    <p className={styles.cardSubtitle}>{post.subtitle}</p>
                                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                    <div className={styles.readMore}>
                                        <span>Read Article</span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </motion.section>
            </div>
            <Footer />
        </>
    );
}
