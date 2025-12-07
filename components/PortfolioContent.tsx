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
                <Link href="/projects/california-usa-2024">
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
                </Link>
                <div className={styles.viewAllButton}>
                    <Link href="/projects" className={styles.sleekButton2}>
                        View All Projects
                    </Link>
                </div>
            </motion.section>

            {/* Design Process Section */}
            <motion.section
                className={`${styles.section} ${styles.designProcess}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>The Design Process</h2>
                <p className={styles.servicesIntro}>
                    A streamlined journey from concept to completion, ensuring every detail reflects your vision.
                </p>

                <div className={styles.processTimeline}>
                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>01</div>
                        <h3 className={styles.stepTitle}>Discovery & Consultation</h3>
                        <p className={styles.stepDescription}>
                            We start with an in-depth conversation to understand your vision, lifestyle, and space requirements. After agreement, we formalize our partnership with a design contract.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>02</div>
                        <h3 className={styles.stepTitle}>Research & Site Analysis</h3>
                        <p className={styles.stepDescription}>
                            Comprehensive site surveys and research help us understand your space's potential. We develop initial budget estimates and preliminary layouts.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>03</div>
                        <h3 className={styles.stepTitle}>Concept Development</h3>
                        <p className={styles.stepDescription}>
                            We create mood boards and design concepts showcasing materials, colors, and styles. This gives you a clear vision of your space's transformation.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>04</div>
                        <h3 className={styles.stepTitle}>Design & Specifications</h3>
                        <p className={styles.stepDescription}>
                            Detailed 2D and 3D floor plans, elevations, and specifications are created. We source materials and furnishings that align with your approved concept.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>05</div>
                        <h3 className={styles.stepTitle}>Final Design & Approvals</h3>
                        <p className={styles.stepDescription}>
                            You receive complete construction documents and a comprehensive shopping list. Final adjustments are made before moving to the procurement phase.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>06</div>
                        <h3 className={styles.stepTitle}>Procurement & Coordination</h3>
                        <p className={styles.stepDescription}>
                            We coordinate construction bids, place orders for all furnishings, and manage deliveries. Every piece is carefully selected and scheduled.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>07</div>
                        <h3 className={styles.stepTitle}>Construction Oversight</h3>
                        <p className={styles.stepDescription}>
                            Regular site visits ensure construction aligns with design plans. We guide execution and resolve any issues to maintain quality standards.
                        </p>
                    </motion.div>

                    <motion.div className={styles.processStep} {...fadeInUp}>
                        <div className={styles.stepNumber}>08</div>
                        <h3 className={styles.stepTitle}>Installation & Final Styling</h3>
                        <p className={styles.stepDescription}>
                            We oversee furniture installation and add finishing touches with curated accessories. Your space is photographed, and we conduct a final walkthrough to ensure your complete satisfaction.
                        </p>
                    </motion.div>
                </div>

                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    <Link href="/process" className={styles.sleekButton3}>
                        Learn the Full Process
                    </Link>
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
                                <p className={styles.overlayDescription}>Transform your home into a personalized sanctuary</p>
                                <ul className={styles.serviceList}>
                                    <li>Living Room & Dining Areas</li>
                                    <li>Modular Kitchens</li>
                                    <li>Master & Guest Bedrooms</li>
                                    <li>Luxury Bathrooms & Spa Areas</li>
                                    <li>Kids Rooms & Play Areas</li>
                                    <li>Home Theaters & Entertainment Rooms</li>
                                    <li>Prayer Rooms & Meditation Spaces</li>
                                    <li>Home Gym & Wellness Areas</li>
                                </ul>
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
                                <p className={styles.overlayDescription}>Professional spaces that inspire productivity and growth</p>
                                <ul className={styles.serviceList}>
                                    <li>Corporate Workspaces & Offices</li>
                                    <li>Retail Shops & Showrooms</li>
                                    <li>Cafes & Restaurants</li>
                                    <li>Hotels & Hospitality Spaces</li>
                                    <li>Convention Centers & Halls</li>
                                    <li>Salons & Spa Centers</li>
                                    <li>Clinics & Medical Facilities</li>
                                    <li>Educational Institutions</li>
                                </ul>
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
                                <p className={styles.overlayDescription}>Breathe new life into your existing spaces</p>
                                <ul className={styles.serviceList}>
                                    <li>Complete Space Remodeling</li>
                                    <li>Structural Modifications</li>
                                    <li>Facade Design & Updates</li>
                                    <li>Flooring Replacement & Upgrades</li>
                                    <li>Kitchen & Bathroom Renovations</li>
                                    <li>Ceiling & Wall Treatments</li>
                                    <li>Refurbishing Existing Elements</li>
                                    <li>Restoration & Preservation</li>
                                </ul>
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
                                <img src="/icons/frame_B_Darker.png" alt="Turnkey Solutions" />
                            </div>
                            <h3>Turnkey Solutions</h3>
                            <p>Complete end-to-end services including furniture, lighting, materials, and installation</p>
                        </div>
                        <div className={styles.serviceOverlay}>
                            <h3>Complete Design Services</h3>
                            <div className={styles.overlayContent}>
                                <p className={styles.overlayDescription}>Comprehensive solutions from concept to completion</p>
                                <ul className={styles.serviceList}>
                                    <li>Space Planning & Layout Design</li>
                                    <li>Custom Furniture Design & Build</li>
                                    <li>Flooring, Ceiling & Wall Design</li>
                                    <li>Lighting Design & Installation</li>
                                    <li>Window Treatments (Curtains, Blinds)</li>
                                    <li>Paint, Wallpaper & Texture Selection</li>
                                    <li>Artwork & Accessories Styling</li>
                                    <li>Sanitary & Electrical Fittings</li>
                                    <li>Home Automation & Smart Systems</li>
                                    <li>Complete Project Management</li>
                                </ul>
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
                                <p className={styles.overlayDescription}>Creating stunning outdoor environments</p>
                                <ul className={styles.serviceList}>
                                    <li>Landscape Design & Planning</li>
                                    <li>Garden & Lawn Installation</li>
                                    <li>Swimming Pools & Water Features</li>
                                    <li>Outdoor Kitchens & Seating</li>
                                    <li>Walkways & Paver Installation</li>
                                    <li>Pergolas & Outdoor Structures</li>
                                    <li>Irrigation & Sprinkler Systems</li>
                                    <li>Drought-Tolerant Plantings</li>
                                    <li>Exterior Lighting Design</li>
                                    <li>Hardscaping & Stone Work</li>
                                    <li>Maintenance & Lawn Care</li>
                                </ul>
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
                                <p className={styles.overlayDescription}>Professional design services from anywhere</p>
                                <ul className={styles.serviceList}>
                                    <li>Virtual Design Consultations</li>
                                    <li>2D Floor Plans & Elevations</li>
                                    <li>3D Renders & Visualizations</li>
                                    <li>Mood Boards & Concept Design</li>
                                    <li>Material & Finish Selection</li>
                                    <li>Furniture Layout Planning</li>
                                    <li>Shopping Lists & Sourcing</li>
                                    <li>Custom Soft Furnishings</li>
                                    <li>Color Scheme Development</li>
                                </ul>
                            </div>
                        </div>
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

                    <Link href="/projects/california-usa-2024">
                        <motion.div className={styles.galleryItem} {...fadeInUp}>
                            <img src="/project 1/kitchen/IMG_3270.jpg" alt="Gallery 1" />
                        </motion.div>
                    </Link>

                    <Link href="/projects/california-usa-2024">
                        <motion.div className={styles.galleryItem} {...fadeInUp}>
                            <img src="/project 1/bathroom/IMG_3276.jpg" alt="Gallery 2" />
                        </motion.div>
                    </Link>

                    <Link href="/projects/california-usa-2024">
                        <motion.div className={styles.galleryItem} {...fadeInUp}>
                            <img src="/project 1/laundry.jpg" alt="Gallery 3" />
                        </motion.div>
                    </Link>

                </div>
            </motion.section>

            {/* Latest Insights - Blog Section */}
            <motion.section
                className={`${styles.section} ${styles.blogSection}`}
                {...fadeInUp}
            >
                <h2 className={styles.sectionTitle}>Latest Insights</h2>
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
                <h2 className={styles.ctaTitle}>Let's Build Something Extraordinary</h2>
                <Link href="/contact" className={styles.ctaButton}>
                    Get in Touch
                </Link>
            </motion.section>
        </div>
    );
}
