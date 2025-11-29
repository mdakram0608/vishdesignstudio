'use client';

import { motion } from 'framer-motion';
import styles from './PortfolioContent.module.css';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "-100px" }
};

const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true }
};

export default function PortfolioContent() {
    return (
        <div className={styles.content}>
            {/* Introduction Section */}
            <motion.section
                className={`${styles.section} ${styles.intro}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>About the Studio</h2>
                <p className={styles.introText}>
                    At <span className={styles.highlight}>Vish Design Studio</span>, we believe that architecture is more than just buildings—it's about creating spaces that inspire, function seamlessly, and stand the test of time.
                </p>
                <p className={styles.introText}>
                    With a focus on <span className={styles.highlight}>sustainable design</span> and <span className={styles.highlight}>innovative solutions</span>, we transform visions into architectural masterpieces that resonate with their environment and purpose.
                </p>
            </motion.section>

            {/* Featured Projects */}
            <motion.section
                className={styles.section}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={staggerChildren}
            >
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.projectsGrid}>
                    <motion.div className={styles.projectCard} variants={fadeInUp}>
                        <div className={styles.projectNumber}>01</div>
                        <h3 className={styles.projectTitle}>Modern Residential Complex</h3>
                        <p className={styles.projectDescription}>
                            A contemporary living space that harmonizes luxury with sustainability, featuring cutting-edge green technologies and breathtaking aesthetics.
                        </p>
                    </motion.div>

                    <motion.div className={styles.projectCard} variants={fadeInUp}>
                        <div className={styles.projectNumber}>02</div>
                        <h3 className={styles.projectTitle}>Urban Cultural Center</h3>
                        <p className={styles.projectDescription}>
                            An iconic landmark that serves as a hub for community engagement, blending traditional architectural elements with modern design principles.
                        </p>
                    </motion.div>

                    <motion.div className={styles.projectCard} variants={fadeInUp}>
                        <div className={styles.projectNumber}>03</div>
                        <h3 className={styles.projectTitle}>Sustainable Office Campus</h3>
                        <p className={styles.projectDescription}>
                            A workspace designed for the future, maximizing natural light, promoting wellness, and achieving net-zero energy consumption.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className={`${styles.section} ${styles.about}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>Our Impact</h2>
                <div className={styles.aboutContent}>
                    <motion.div className={styles.stat} {...fadeInUp}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Projects Completed</span>
                    </motion.div>
                    <motion.div className={styles.stat} {...fadeInUp}>
                        <span className={styles.statNumber}>15+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </motion.div>
                    <motion.div className={styles.stat} {...fadeInUp}>
                        <span className={styles.statNumber}>12</span>
                        <span className={styles.statLabel}>Awards Won</span>
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className={`${styles.section} ${styles.cta}`}
                {...fadeInUp}
            >
                <h2 className={styles.ctaTitle}>Let's Build Something Extraordinary</h2>
                <a href="#contact" className={styles.ctaButton}>
                    Get in Touch
                </a>
            </motion.section>
        </div>
    );
}
