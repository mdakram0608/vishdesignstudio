'use client';

import { motion } from 'framer-motion';
import styles from './about.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "-100px" }
};

export default function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            <Navbar />

            <div className={styles.container}>
                {/* Studio Section */}
                <motion.section className={styles.section} {...fadeInUp}>
                    <h1 className={styles.mainTitle}>Vish Design Studio</h1>
                    <div className={styles.content}>
                        <p>
                            Our studio, <span className={styles.highlight}>Vish Design Studio</span>, is firmly grounded in Chennai's vibrant cultural tapestry, yet our design philosophy embraces a truly global perspective. We're passionate about transforming spaces into captivating environments, drawing inspiration from diverse aesthetics and innovative trends worldwide.
                        </p>
                        <p>
                            Our unique approach seamlessly blends a rich understanding of traditional Indian craftsmanship with contemporary global design principles, allowing us to create distinctive interiors that are both deeply personal and universally appealing. We believe exceptional design transcends geographical boundaries, and our dedicated team is committed to crafting spaces that are not only beautiful and functional but also resonate with the individual stories and aspirations of our clients, whether they're located here in India or anywhere across the globe.
                        </p>
                        <p>
                            From concept development to final execution, we bring the precision, meticulous attention to detail, and quality expected on an international stage to every project. Every element, from custom furniture and curated lighting to bespoke finishes and sustainable materials, is meticulously considered to create cohesive and inspiring spaces. This ensures a seamless and fulfilling design journey, delivering unparalleled experiences for our diverse clientele, no matter their location or background.
                        </p>
                        <p>
                            Since its establishment in 2023, Vish Design Studio has quickly emerged as a premier global interior design firm, delivering comprehensive, end-to-end solutions for luxury spaces. We've successfully completed a multitude of interior design endeavors for commercial and residential clients throughout India and the American Cities. We're also actively shaping several new spaces currently under construction.
                        </p>
                    </div>
                </motion.section>

                {/* Founder Section */}
                <motion.section className={styles.founderSection} {...fadeInUp}>
                    <h2 className={styles.sectionTitle}>About Our Founder & Principal Designer</h2>
                    <div className={styles.founderContent}>
                        <motion.div className={styles.founderImage} {...fadeInUp}>
                            <img src="/founder pic2.png" alt="Gayathri Vish - Founder & Principal Designer" />
                        </motion.div>
                        <div className={styles.founderText}>
                            <p>
                                The creative vision of Vish Design Studio is spearheaded by its founder and principal designer, <span className={styles.highlight}>Gayathri Vish</span>. My journey into interior design isn't just a career choice; it's a calling, ignited by my fascination with how spaces influence mood and creativity from a young age.
                            </p>
                            <p>
                                My academic journey began with a Bachelor of Arts in Sociology and a Master of Arts in International Studies from Stella Maris College. This foundation in understanding global dynamics and human behaviour has been unexpectedly invaluable. Building on this, I've passionately pursued professional certifications in design, including Architectural Design from Harvard University Graduate School of Design, and an Interior Design & Styling certification from the London School of Trends.
                            </p>
                            <p>
                                Beyond these, I hold multiple additional certifications across various specialised interior fields, such as Interior Design Styles, Garden Design, Kitchen Design, and Lighting Design. This diverse educational background allows me to approach design with a unique blend of analytical thinking, creative vision, and a truly holistic understanding of environments.
                            </p>
                            <p>
                                Before establishing Vish Design Studio, I perfected my craft for five years as an experienced interior designer at an independent studio. During this time, I successfully managed over 50 diverse projects, encompassing both high-end residential and luxury commercial spaces across various Indian cities. This invaluable hands-on experience deepened my expertise and refined my ability to deliver exceptional results for discerning clients.
                            </p>
                            <p>
                                My approach is a unique blend of global foresight and local soul. While drawing endless inspiration from India's vibrant cultural tapestry, I constantly explore diverse international trends and innovative design principles. This allows me to craft interiors that feel both authentically rooted and refreshingly modern, universally appealing while distinctly tailored. For every project, I immerse myself in understanding our clients' unique visions, ensuring every detail, from the grand concept to the smallest finish, is meticulously curated to deliver a seamless design journey and an unparalleled experience.
                            </p>

                            {/* Social Media Icons */}
                            <div className={styles.socialMedia}>
                                <a href="https://www.instagram.com/vishdesignstudio/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/WallsandDetails?mibextid=wwXIfr&rdid=uhHwLfb1Ltyfd1X7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CAAJebiWL%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/vish-design-studio/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@vishdesignstudio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                                <a href="https://www.pinterest.com/vishdesignstudio/?invite_code=1b79164728cf43b48515607727a04f21&sender=601301125156728962" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Video Section */}
                <motion.section className={styles.videoSection} {...fadeInUp}>
                    <div className={styles.videoGrid}>
                        <div className={styles.videoWrapper}>
                            <iframe
                                width="280"
                                height="500"
                                src="https://www.youtube.com/embed/NJ8V4gbZJ9U?autoplay=1&mute=1&loop=1&playlist=NJ8V4gbZJ9U"
                                title="Vish Design Studio Showcase 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.videoWrapper}>
                            <iframe
                                width="280"
                                height="500"
                                src="https://www.youtube.com/embed/SyGNm4myF1o?autoplay=1&mute=1&loop=1&playlist=SyGNm4myF1o"
                                title="Vish Design Studio Showcase 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.videoWrapper}>
                            <iframe
                                width="280"
                                height="500"
                                src="https://www.youtube.com/embed/Acp-HaGf6OA?autoplay=1&mute=1&loop=1&playlist=Acp-HaGf6OA"
                                title="Vish Design Studio Showcase 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </motion.section>
            </div>
            <Footer/>
        </main>
        
    );
}
