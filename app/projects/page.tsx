'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './projects.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "-100px" }
};

const projects = [
    {
        id: 'california-usa-2024',
        title: 'California USA 2024',
        image: '/project title pic.jpg',
        slug: 'california-usa-2024'
    }
];

export default function ProjectsPage() {
    return (
        <main className={styles.projectsPage}>
            <Navbar />

            <div className={styles.container}>
                <motion.section className={styles.section} {...fadeInUp}>
                    <h1 className={styles.mainTitle}>Our Projects</h1>
                    <p className={styles.subtitle}>Explore our portfolio of transformative interior design projects</p>

                    <div className={styles.projectsGrid}>
                        {projects.map((project) => (
                            <Link href={`/projects/${project.slug}`} key={project.id} className={styles.projectCard}>
                                <motion.div
                                    className={styles.projectImageWrapper}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={styles.projectImage}
                                    />
                                    <div className={styles.projectOverlay}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.section>
            </div>
            <Footer/>
        </main>
    );
}
