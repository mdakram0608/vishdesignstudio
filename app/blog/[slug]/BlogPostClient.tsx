'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './blogPost.module.css';
import type { BlogPost } from '@/lib/blogData';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "0px 0px -10% 0px", amount: 0.1 }
};

interface BlogPostClientProps {
    post: BlogPost;
    prevPost: BlogPost | null;
    nextPost: BlogPost | null;
}

export default function BlogPostClient({ post, prevPost, nextPost }: BlogPostClientProps) {
    const headerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["start start", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

    return (
        <>
            <Navbar />
            <article className={styles.blogPost}>
                {/* Parallax Header */}
                <div className={styles.header} ref={headerRef}>
                    <motion.div
                        className={styles.headerImageWrapper}
                        style={{ y: imageY }}
                    >
                        <motion.img
                            src={post.featuredImage}
                            alt={post.title}
                            className={styles.headerImage}
                            style={{ scale: imageScale }}
                        />
                        <motion.div
                            className={styles.headerOverlay}
                            style={{ opacity: overlayOpacity }}
                        />
                    </motion.div>

                    <div className={styles.headerContent}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className={styles.headerMeta}>
                                <span className={styles.category}>{post.category}</span>
                                <span className={styles.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <h1 className={styles.title}>{post.title}</h1>
                            <p className={styles.subtitle}>{post.subtitle}</p>
                        </motion.div>
                    </div>
                </div>

                {/* Content */}
                <div className={styles.contentWrapper}>
                    <motion.div
                        className={styles.content}
                        {...fadeInUp}
                    >
                        {/* Introduction */}
                        {post.content.introduction.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className={styles.intro}
                                {...fadeInUp}
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        {/* Sections */}
                        {post.content.sections.map((section, sectionIndex) => (
                            <motion.section
                                key={sectionIndex}
                                className={styles.section}
                                {...fadeInUp}
                            >
                                <h2 className={styles.sectionTitle}>{section.title}</h2>

                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className={styles.paragraph}>
                                        {paragraph}
                                    </p>
                                ))}

                                {section.subsections && (
                                    <div className={styles.subsections}>
                                        {section.subsections.map((subsection, subIndex) => (
                                            <div key={subIndex} className={styles.subsection}>
                                                <h3 className={styles.subsectionTitle}>{subsection.title}</h3>

                                                {subsection.content && subsection.content.map((paragraph, pIndex) => (
                                                    <p key={pIndex} className={styles.paragraph}>
                                                        {paragraph}
                                                    </p>
                                                ))}

                                                {subsection.items && (
                                                    <ul className={styles.list}>
                                                        {subsection.items.map((item, itemIndex) => (
                                                            <li key={itemIndex}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.section>
                        ))}

                        {/* Conclusion */}
                        {post.content.conclusion && post.content.conclusion.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className={styles.conclusion}
                                {...fadeInUp}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* Image Gallery with Parallax */}
                    <motion.div
                        className={styles.gallery}
                        {...fadeInUp}
                    >
                        <h2 className={styles.galleryTitle}>Project Gallery</h2>
                        <div className={styles.galleryGrid}>
                            {post.images.map((image, index) => (
                                <ParallaxImage key={index} src={image} alt={`${post.title} - Image ${index + 1}`} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        className={styles.navigation}
                        {...fadeInUp}
                    >
                        {prevPost && (
                            <Link href={`/blog/${prevPost.slug}`} className={styles.navLink}>
                                <span className={styles.navLabel}>Previous</span>
                                <span className={styles.navTitle}>{prevPost.title}</span>
                            </Link>
                        )}
                        <Link href="/blog" className={styles.backToAll}>
                            All Articles
                        </Link>
                        {nextPost && (
                            <Link href={`/blog/${nextPost.slug}`} className={`${styles.navLink} ${styles.navLinkNext}`}>
                                <span className={styles.navLabel}>Next</span>
                                <span className={styles.navTitle}>{nextPost.title}</span>
                            </Link>
                        )}
                    </motion.div>
                </div>
            </article>
            <Footer />
        </>
    );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <motion.div
            className={styles.galleryItem}
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className={styles.galleryImageWrapper}>
                <motion.img
                    src={src}
                    alt={alt}
                    style={{ y }}
                    className={styles.galleryImage}
                />
            </div>
        </motion.div>
    );
}
