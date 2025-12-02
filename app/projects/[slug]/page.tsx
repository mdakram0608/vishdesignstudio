'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './project-detail.module.css';
import Navbar from '@/components/Navbar';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "-100px" }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const kitchenImages = [
    { src: '/project 1/kitchen/IMG_3265.jpg', title: 'Modern Kitchen Showcase' },
    { src: '/project 1/kitchen/IMG_3257.jpg', title: 'Open Kitchen Layout' },
    { src: '/project 1/kitchen/IMG_3261.jpg', title: 'Kitchen Storage Solutions' },
    { src: '/project 1/kitchen/IMG_3268.jpg', title: 'Sleek Cabinetry Details' },
    { src: '/project 1/kitchen/IMG_3270.jpg', title: 'Premium Quartz Countertops' },
];

const bathroomImages = [
    { src: '/project 1/bathroom/IMG_3280.jpg', title: 'Serene Master Bathroom' },
    { src: '/project 1/bathroom/IMG_3283.jpg', title: 'Luxurious Double Vanity' },
    { src: '/project 1/bathroom/IMG_3276.jpg', title: 'Modern Shower Enclosure' },
    { src: '/project 1/bathroom/IMG_3288.jpg', title: 'Elegant Powder Room' },
    { src: '/project 1/bathroom/IMG_3292.jpg', title: 'Spa-Like Atmosphere' },
];

export default function ProjectDetailPage() {
    return (
        <main className={styles.projectDetailPage}>
            <Navbar />

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/projects" className={styles.backLink}>
                        ← Back to Projects
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className={styles.projectTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        California USA 2024
                    </motion.h1>
                    <motion.p
                        className={styles.projectSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Modern Minimalist Residential Design
                    </motion.p>

                    <motion.div
                        className={styles.projectHero}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <img
                            src="/project title pic.jpg"
                            alt="California USA 2024 Project"
                            className={styles.heroImage}
                        />
                        <div className={styles.heroOverlay}>
                            <span className={styles.heroTag}>Featured Project</span>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Project Overview with Split Layout */}
                <motion.div className={styles.overviewSection} {...fadeInUp}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewContent}>
                            <h2 className={styles.sectionHeading}>Project Vision</h2>
                            <p className={styles.descriptionText}>
                                This design project embodies modern minimalist elegance, creating spaces that are both beautiful and highly practical. The curated rooms, including a serene bathroom and a pristine kitchen, are defined by their clean lines and polished surfaces.
                            </p>
                            <p className={styles.descriptionText}>
                                Every element is thoughtfully designed for daily living, from the efficient laundry solutions to the spacious vanities, all contributing to a sense of tranquil sophistication and a high-end aesthetic.
                            </p>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>2024</span>
                                <span className={styles.statLabel}>Year Completed</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>California</span>
                                <span className={styles.statLabel}>Location</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>Residential</span>
                                <span className={styles.statLabel}>Project Type</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>Minimalist</span>
                                <span className={styles.statLabel}>Design Style</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floor Plan Section */}
                <motion.div className={styles.floorPlanSection} {...fadeInUp}>
                    <h2 className={styles.sectionHeading}>Layout & Flow</h2>
                    <p className={styles.sectionSubtext}>
                        A thoughtfully designed layout optimizing spatial efficiency and circulation
                    </p>
                    <div className={styles.floorPlanCard}>
                        <img
                            src="/project 1/floor plan.jpeg"
                            alt="California Project Floor Plan"
                            className={styles.floorPlanImage}
                        />
                    </div>
                </motion.div>

                {/* Kitchen Gallery */}
                <motion.div
                    className={styles.categorySection}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className={styles.categoryHeader}>
                        <h2 className={styles.categoryTitle}>Kitchen Design</h2>
                        <p className={styles.categoryDescription}>
                            Pristine white cabinetry featuring sleek quartz countertops and matte black hardware accents
                        </p>
                    </div>
                    <div className={styles.imageGrid}>
                        {kitchenImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={styles.imageCard}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.imageContainer}>
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className={styles.galleryImage}
                                    />
                                    <div className={styles.imageOverlay}>
                                        <span className={styles.imageNumber}>0{index + 1}</span>
                                    </div>
                                </div>
                                <h3 className={styles.imageTitle}>{image.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bathroom Gallery */}
                <motion.div
                    className={styles.categorySection}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className={styles.categoryHeader}>
                        <h2 className={styles.categoryTitle}>Bathroom Sanctuary</h2>
                        <p className={styles.categoryDescription}>
                            Tranquil bathroom spaces designed with polished surfaces and contemporary fixtures
                        </p>
                    </div>
                    <div className={styles.imageGrid}>
                        {bathroomImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={styles.imageCard}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.imageContainer}>
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className={styles.galleryImage}
                                    />
                                    <div className={styles.imageOverlay}>
                                        <span className={styles.imageNumber}>0{index + 1}</span>
                                    </div>
                                </div>
                                <h3 className={styles.imageTitle}>{image.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Laundry Feature */}
                <motion.div className={styles.featureSection} {...fadeInUp}>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureImage}>
                            <img src="/project 1/laundry.jpg" alt="Efficient Laundry Design" />
                        </div>
                        <div className={styles.featureContent}>
                            <span className={styles.featureTag}>Smart Solutions</span>
                            <h3 className={styles.featureTitle}>Efficient Laundry Design</h3>
                            <p className={styles.featureText}>
                                A thoughtfully integrated stacked laundry unit that maximizes vertical space while maintaining the clean, minimalist aesthetic throughout the residence.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Design Highlights */}
                <motion.div className={styles.highlightsSection} {...fadeInUp}>
                    <h2 className={styles.sectionHeading}>Design Excellence</h2>
                    <div className={styles.highlightsGrid}>
                        <motion.div className={styles.highlightCard} whileHover={{ scale: 1.02 }}>
                            <div className={styles.highlightIcon}>✦</div>
                            <h3>Clean Lines</h3>
                            <p>Minimalist design philosophy emphasizing simplicity and uncluttered spaces</p>
                        </motion.div>
                        <motion.div className={styles.highlightCard} whileHover={{ scale: 1.02 }}>
                            <div className={styles.highlightIcon}>◆</div>
                            <h3>Premium Materials</h3>
                            <p>Quartz finishes, white cabinetry, and black matte hardware create cohesion</p>
                        </motion.div>
                        <motion.div className={styles.highlightCard} whileHover={{ scale: 1.02 }}>
                            <div className={styles.highlightIcon}>✧</div>
                            <h3>Practical Elegance</h3>
                            <p>Spaces designed for daily living while maintaining elevated visual appeal</p>
                        </motion.div>
                        <motion.div className={styles.highlightCard} whileHover={{ scale: 1.02 }}>
                            <div className={styles.highlightIcon}>❖</div>
                            <h3>Natural Light</h3>
                            <p>Strategic design enhancing illumination for bright, inviting spaces</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
