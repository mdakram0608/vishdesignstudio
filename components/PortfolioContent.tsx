'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
            {/* About Section */}
            <motion.section
                className={`${styles.section} ${styles.intro}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>Vish Design Studio</h2>
                <div className={styles.introContainer}>
                    <div className={styles.introTextContent}>
                        <p className={styles.introText}>
                            Based in Chennai, <span className={styles.highlight}>Vish Design Studio</span> embraces a global design philosophy. We transform spaces into captivating environments by blending traditional Indian craftsmanship with contemporary global design principles, creating distinctive interiors that are both deeply personal and universally appealing.
                        </p>
                        <p className={styles.introText}>
                            Since 2023, we've delivered comprehensive, end-to-end solutions for luxury residential and commercial spaces throughout India and American Cities. From custom furniture to sustainable materials, every element is meticulously curated to create cohesive and inspiring environments.
                        </p>
                    </div>
                    <motion.div className={styles.introLogo} {...fadeInUp}>
                        <img src="/logo.png" alt="Vish Design Studio Logo" />
                    </motion.div>
                </div>
            </motion.section>

            {/* Founder Section */}
            <motion.section
                className={`${styles.section} ${styles.founder}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>Founder & Principal Designer</h2>
                <div className={styles.founderContent}>
                    <motion.div className={styles.founderImage} {...fadeInUp}>
                        <img src="/founder pic.JPEG" alt="Gayathri Vish - Founder & Principal Designer" />
                    </motion.div>
                    <motion.div className={styles.founderText} {...fadeInUp}>
                        <p className={styles.introText}>
                            <span className={styles.highlight}>Gayathri Vish</span> leads Vish Design Studio with a unique blend of academic excellence and hands-on expertise. With degrees in Sociology and International Studies from Stella Maris College, plus professional certifications from Harvard University Graduate School of Design and the London School of Trends, she brings a holistic understanding of global dynamics and design.
                        </p>
                        <p className={styles.introText}>
                            Before founding the studio, Gayathri managed over 50 diverse projects across India for five years. Her approach combines global foresight with local soul, drawing inspiration from India's vibrant culture while exploring international trends to craft interiors that feel both authentically rooted and refreshingly modern.
                        </p>
                    </motion.div>
                </div>
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
                        <div className={styles.projectImageWrapper}>
                            <img
                                src="/project title pic.jpg"
                                alt="Featured Interior Design Project"
                                className={styles.projectImage}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Design Process Section */}
            <motion.section
                className={`${styles.section} ${styles.designProcess}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>The Design Process</h2>
                <div className={styles.processTimeline}>
                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>01</div>
                        <h3 className={styles.stepTitle}>Choose Your Package</h3>
                        <p className={styles.stepDescription}>
                            After your purchase, you'll receive a Client Questionnaire and Measurement Guide. Once you send that back, your design timeline will start.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>02</div>
                        <h3 className={styles.stepTitle}>Measurement & Inspiration</h3>
                        <p className={styles.stepDescription}>
                            Complete your online questionnaire and attach inspiration photos. This is where we'll get to know you and your dream space before diving into the planning stage.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>03</div>
                        <h3 className={styles.stepTitle}>Concept & Development</h3>
                        <p className={styles.stepDescription}>
                            I'll create 2 mood boards for different design concepts, giving you an idea of your space's potential and bringing your vision to life.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>04</div>
                        <h3 className={styles.stepTitle}>Selection & Placement</h3>
                        <p className={styles.stepDescription}>
                            Once you've selected a concept, I'll finalize 2D & 3D floor plans, choose finishes and furnishings, and provide detailed drawings and specifications.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>05</div>
                        <h3 className={styles.stepTitle}>Final Design</h3>
                        <p className={styles.stepDescription}>
                            When your design is finalized, you'll receive a comprehensive shopping list detailing all furnishings and materials for easy purchasing.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Overview Section */}
            <motion.section
                className={`${styles.section} ${styles.services}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <p className={styles.servicesIntro}>
                    From concept to completion, we offer comprehensive interior design solutions tailored to your vision.
                </p>
                <div className={styles.servicesGrid}>
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/residential.png" alt="Residential Design" />
                        </div>
                        <h3>Residential Design</h3>
                        <p>Living rooms, bedrooms, kitchens, bathrooms, and complete home transformations</p>
                    </motion.div>
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/commercial.png" alt="Commercial Spaces" />
                        </div>
                        <h3>Commercial Spaces</h3>
                        <p>Offices, shops, restaurants, hotels, salons, and retail environments</p>
                    </motion.div>
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/renovation.png" alt="Renovations" />
                        </div>
                        <h3>Renovations & Remodeling</h3>
                        <p>Transform existing spaces with expert renovation and remodeling services</p>
                    </motion.div>
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/turnkey.png" alt="Turnkey Solutions" />
                        </div>
                        <h3>Turnkey Solutions</h3>
                        <p>Complete end-to-end services including furniture, lighting, materials, and installation</p>
                    </motion.div>
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/landscape.png" alt="Landscape" />
                        </div>
                        <h3>Outdoor & Landscape</h3>
                        <p>Beautiful outdoor spaces, landscaping, and water features</p>
                    </motion.div>
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceIcon}>
                            <img src="/icons/virtual.png" alt="Virtual Consultation" />
                        </div>
                        <h3>Virtual Consultation</h3>
                        <p>In-person and remote design consultations with 3D renders and E-Design</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Image Gallery Section */}
            <motion.section
                className={`${styles.section} ${styles.gallery}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>Our Work</h2>
                <div className={styles.galleryGrid}>
                    <motion.div className={styles.galleryItem} {...fadeInUp}>
                        <img src="/project 1/kitchen/IMG_3270.jpg" alt="Gallery 1" />
                    </motion.div>
                    <motion.div className={styles.galleryItem} {...fadeInUp}>
                        <img src="/project 1/bathroom/IMG_3276.jpg" alt="Gallery 2" />
                    </motion.div>
                    <motion.div className={styles.galleryItem} {...fadeInUp}>
                        <img src="/project 1/laundry.jpg" alt="Gallery 3" />
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className={`${styles.section} ${styles.cta}`}
                {...fadeInUp}
            >
                <h2 className={styles.ctaTitle}>Let's Build Something Extraordinary</h2>
                <Link href="/contact" className={styles.ctaButton}>
                    Get in Touch
                </Link>
            </motion.section>
        </div>
    );
}
