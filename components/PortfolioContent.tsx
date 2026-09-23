'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './PortfolioContent.module.css';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "0px 0px -10% 0px", amount: 0.1 }
};

const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true, amount: 0.1 }
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
                    <p className={styles.introText}>
                        Based in Chennai, <span className={styles.highlight}>Vish Design Studio</span> blends traditional Indian craftsmanship with contemporary global design to create interiors that are both deeply personal and timeless.
                    </p>
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
                            <span className={styles.highlight}>Gayathri Vish</span> leads Vish Design Studio with degrees from Stella Maris College and certifications from Harvard University Graduate School of Design, bringing global foresight and local soul to over 50 projects across India and beyond.
                        </p>
                        <Link href="/about" className={styles.sleekButton}>
                            Know More
                        </Link>
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
                    <Link href="/projects/california-usa-2024">
                        <motion.div className={styles.projectCard} variants={fadeInUp}>
                            <div className={`${styles.projectImageWrapper} ${styles.watermarkedImageWrapper}`}>
                                <img
                                    src="/project title pic.jpg"
                                    alt="California USA 2024 - Modern Minimalist Design"
                                    className={styles.projectImage}
                                />
                            </div>
                            <div className={styles.projectInfo}>
                                <h3>California USA 2024</h3>
                                <p>Modern Minimalist Elegance</p>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/projects/artisan-teak-mandala-2024">
                        <motion.div className={styles.projectCard} variants={fadeInUp}>
                            <div className={`${styles.projectImageWrapper} ${styles.watermarkedImageWrapper}`}>
                                <img
                                    src="/project 2/after 1.JPEG"
                                    alt="Artisan's Teak Mandala 2024 - Sacred Space Redefined"
                                    className={styles.projectImage}
                                />
                            </div>
                            <div className={styles.projectInfo}>
                                <h3>Artisan's Teak Mandala</h3>
                                <p>Sacred Space Redefined</p>
                            </div>
                        </motion.div>
                    </Link>
                </div>
                <div className={styles.viewAllButton}>
                    <Link href="/projects" className={styles.sleekButton2}>
                        View All Projects
                    </Link>
                </div>
            </motion.section>

            {/* As Featured In - Magazine Teaser */}
            <motion.section
                className={`${styles.section} ${styles.magazineTeaser}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>As Featured In</h2>
                <p className={styles.servicesIntro}>
                    Bombay FilmFame&apos;s Anniversary Issue sits down with our founder to talk global vision, Indian soul, and the philosophy behind our interiors.
                </p>
                <Link href="/magazine" className={styles.magazineTeaserLink}>
                    <div className={styles.magazineTeaserGrid}>
                        <motion.div className={styles.magazineTeaserImage} {...fadeInUp}>
                            <img src="/magazine/cover.jpg" alt="Bombay FilmFame Magazine cover" />
                        </motion.div>
                        <motion.div className={`${styles.magazineTeaserImage} ${styles.magazineTeaserImageSecondary}`} {...fadeInUp}>
                            <img src="/magazine/page-1.jpg" alt="Bombay FilmFame cover story feature on Vish Design Studio" />
                        </motion.div>
                    </div>
                </Link>
                <div className={styles.viewAllButton}>
                    <Link href="/magazine" className={styles.sleekButton2}>
                        Read the Feature
                    </Link>
                </div>
            </motion.section>

            {/* Services & Design Process Section */}
            <motion.section
                className={`${styles.section} ${styles.services}`}
                {...fadeInUp}
            >
                <span className={styles.eyebrow}>What We Offer &amp; How We Work</span>
                <h2 className={styles.sectionTitle}>Our Design Process &amp; Services</h2>
                <p className={styles.servicesIntro}>
                    From concept to completion, we offer comprehensive interior design solutions tailored to your vision.
                </p>

                <div className={styles.processStrip}>
                    {[
                        "Discovery & Consultation",
                        "Research & Site Analysis",
                        "Concept Development",
                        "Design & Specifications",
                        "Final Design & Approvals",
                        "Procurement & Coordination",
                        "Construction Oversight",
                        "Installation & Final Styling",
                    ].map((title, index) => (
                        <div className={styles.processStripItem} key={title}>
                            <span className={styles.processStripNumber}>{String(index + 1).padStart(2, "0")}</span>
                            <span>{title}</span>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <Link href="/design-process" className={styles.sleekButton3}>
                        Learn the Full Process
                    </Link>
                </div>

                <div className={styles.servicesGrid}>
                    {/* Residential Design */}
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceImageContainer}>
                            <img src="/services/residential_design_service_1765127427557.png" alt="Residential Design" />
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceIcon}>
                                <img src="/icons/residential.png" alt="Residential Design" />
                            </div>
                            <h3>Residential Design</h3>
                            <p>Living rooms, bedrooms, kitchens, bathrooms, and complete home transformations</p>
                        </div>
                        <div className={styles.serviceOverlay}>
                            <h3>Residential Spaces</h3>
                            <div className={styles.overlayContent}>
                                <p className={styles.overlayDescription}>Transform your home into a personalized sanctuary with our comprehensive residential design services.</p>
                                <p className={styles.serviceDetails}>
                                    We specialize in creating stunning living room and dining areas that serve as the heart of your home, along with modular kitchens designed for both functionality and aesthetics. Our expertise extends to master and guest bedrooms, luxury bathrooms with spa-like features, and vibrant kids rooms with dedicated play areas. We also design sophisticated home theaters and entertainment rooms, serene prayer and meditation spaces, and well-equipped home gym and wellness areas tailored to your lifestyle.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Commercial Spaces */}
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceImageContainer}>
                            <img src="/services/commercial_spaces_service_1765127444505.png" alt="Commercial Spaces" />
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceIcon}>
                                <img src="/icons/commercial.png" alt="Commercial Spaces" />
                            </div>
                            <h3>Commercial Spaces</h3>
                            <p>Offices, shops, restaurants, hotels, salons, and retail environments</p>
                        </div>
                        <div className={styles.serviceOverlay}>
                            <h3>Commercial Interiors</h3>
                            <div className={styles.overlayContent}>
                                <p className={styles.overlayDescription}>Professional spaces that inspire productivity and growth through thoughtful design.</p>
                                <p className={styles.serviceDetails}>
                                    Our commercial design portfolio includes modern corporate workspaces and offices that enhance collaboration, eye-catching retail shops and showrooms that attract customers, and inviting cafes and restaurants that create memorable dining experiences. We design luxurious hotels and hospitality spaces, versatile convention centers and halls, relaxing salons and spa centers, as well as efficient clinics and medical facilities. Our expertise also extends to educational institutions where learning environments are optimized for success.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Renovations & Remodeling */}
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceImageContainer}>
                            <img src="/services/renovations_remodeling_service_1765127463662.png" alt="Renovations & Remodeling" />
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceIcon}>
                                <img src="/icons/renovation.png" alt="Renovations" />
                            </div>
                            <h3>Renovations & Remodeling</h3>
                            <p>Transform existing spaces with expert renovation and remodeling services</p>
                        </div>
                        <div className={styles.serviceOverlay}>
                            <h3>Renovation Services</h3>
                            <div className={styles.overlayContent}>
                                <p className={styles.overlayDescription}>Breathe new life into your existing spaces with expert renovation and remodeling.</p>
                                <p className={styles.serviceDetails}>
                                    Whether you need complete space remodeling or selective updates, we handle everything from structural modifications to facade design and updates. Our renovation services include flooring replacement and upgrades, specialized kitchen and bathroom renovations, and creative ceiling and wall treatments. We excel at refurbishing existing elements to preserve character while modernizing functionality, and we&apos;re skilled in restoration and preservation projects that honor architectural heritage.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Turnkey Solutions */}
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceImageContainer}>
                            <img src="/services/turnkey_solutions_service_1765127487097.png" alt="Turnkey Solutions" />
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceIcon}>
                                <img src="/icons/frame_B_darker.png" alt="Turnkey Solutions" />
                            </div>
                            <h3>Turnkey Solutions</h3>
                            <p>Complete end-to-end services including furniture, lighting, materials, and installation</p>
                        </div>
                        <div className={styles.serviceOverlay}>
                            <h3>Complete Design Services</h3>
                            <div className={styles.overlayContent}>
                                <p className={styles.overlayDescription}>Comprehensive solutions from concept to completion with our turnkey approach.</p>
                                <p className={styles.serviceDetails}>
                                    Our complete design services cover every detail including space planning and layout design, custom furniture design and build, and sophisticated flooring, ceiling, and wall design. We provide expert lighting design and installation, elegant window treatments including curtains and blinds, and carefully curated paint, wallpaper, and texture selection. The service extends to artwork and accessories styling, specification of sanitary and electrical fittings, integration of home automation and smart systems, plus complete project management to ensure seamless execution from start to finish.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Outdoor & Landscape */}
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceImageContainer}>
                            <img src="/services/outdoor_landscape_service_1765127505672.png" alt="Outdoor & Landscape" />
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceIcon}>
                                <img src="/icons/landscape.png" alt="Landscape" />
                            </div>
                            <h3>Outdoor & Landscape</h3>
                            <p>Beautiful outdoor spaces, landscaping, and water features</p>
                        </div>
                        <div className={styles.serviceOverlay}>
                            <h3>Landscape Design</h3>
                            <div className={styles.overlayContent}>
                                <p className={styles.overlayDescription}>Creating stunning outdoor environments that extend your living space.</p>
                                <p className={styles.serviceDetails}>
                                    Our landscape design and planning services transform outdoor areas with beautiful garden and lawn installation, luxurious swimming pools and water features, and functional outdoor kitchens and seating areas. We create inviting walkways with professional paver installation, build pergolas and outdoor structures for shade and style, and install efficient irrigation and sprinkler systems. Our approach includes sustainable drought-tolerant plantings, artistic exterior lighting design, expert hardscaping and stone work, plus ongoing maintenance and lawn care services to keep your outdoor spaces pristine.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Virtual Consultation */}
                    <motion.div className={styles.serviceCard} {...fadeInUp}>
                        <div className={styles.serviceImageContainer}>
                            <img src="/services/virtual_consultation_service_1765127521958.png" alt="Virtual Consultation" />
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceIcon}>
                                <img src="/icons/virtual.png" alt="Virtual Consultation" />
                            </div>
                            <h3>Virtual Consultation</h3>
                            <p>In-person and remote design consultations with 3D renders and E-Design</p>
                        </div>
                        <div className={styles.serviceOverlay}>
                            <h3>E-Design & Consultation</h3>
                            <div className={styles.overlayContent}>
                                <p className={styles.overlayDescription}>Professional design services delivered from anywhere in the world.</p>
                                <p className={styles.serviceDetails}>
                                    Experience the convenience of our virtual design consultations combined with detailed 2D floor plans and elevations. We create stunning 3D renders and visualizations that bring your vision to life, develop inspiring mood boards for concept design, and provide expert guidance on material and finish selection. Our e-design services include comprehensive furniture layout planning, detailed shopping lists with sourcing assistance, custom soft furnishings design, and sophisticated color scheme development tailored to your preferences and space.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Latest Insights - Blog Section */}
            <motion.section
                className={`${styles.section} ${styles.blogSection}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>Blog</h2>
                <p className={styles.servicesIntro}>
                    Exploring the art and science of interior design through our curated collection of design stories
                </p>
                <div className={styles.blogPreviewGrid}>
                    <Link href="/blog/walk-in-wardrobe">
                        <motion.div className={styles.blogPreviewCard} {...fadeInUp}>
                            <div className={styles.blogImageWrapper}>
                                <img src="/blog/blog1/walk_in_wadrobe_view_0.effectsResult.jpg" alt="Walk in Wardrobe" />
                            </div>
                            <div className={styles.blogPreviewContent}>
                                <span className={styles.blogCategory}>Interior Design</span>
                                <h3>Walk in Wardrobe</h3>
                                <p>A Serene Sanctuary: Designing a Modern Walk-In Wardrobe</p>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/blog/french-style-bedroom">
                        <motion.div className={styles.blogPreviewCard} {...fadeInUp}>
                            <div className={styles.blogImageWrapper}>
                                <img src="/blog/blog2/11.jpg" alt="French Style Bedroom" />
                            </div>
                            <div className={styles.blogPreviewContent}>
                                <span className={styles.blogCategory}>Bedroom Design</span>
                                <h3>From Paris, With Love</h3>
                                <p>Timeless Elegance: Designing Your Dream French-Style Bedroom</p>
                            </div>
                        </motion.div>
                    </Link>

                    <Link href="/blog/modern-monochrome-bathroom">
                        <motion.div className={styles.blogPreviewCard} {...fadeInUp}>
                            <div className={styles.blogImageWrapper}>
                                <img src="/blog/blog3/bathroom_view_1.effectsResult.jpg" alt="Modern Monochrome Bathroom" />
                            </div>
                            <div className={styles.blogPreviewContent}>
                                <span className={styles.blogCategory}>Bathroom Design</span>
                                <h3>Black, White, and Intent</h3>
                                <p>The Monolithic Geometry of Modern Luxury</p>
                            </div>
                        </motion.div>
                    </Link>

                </div>
                <div className={styles.viewAllButton}>
                    <Link href="/blog" className={styles.sleekButton2}>
                        View All Articles
                    </Link>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className={`${styles.section} ${styles.cta}`}
                {...fadeInUp}
            >
                <h2 className={styles.ctaTitle}>Let&apos;s Build Something Extraordinary</h2>
                <Link href="/contact" className={styles.ctaButton}>
                    Get in Touch
                </Link>
            </motion.section>
        </div>
    );
}
