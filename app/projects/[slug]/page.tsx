'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './project-detail.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredDataScript from '@/components/StructuredDataScript';
import { getCreativeWorkSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import { use } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: "0px 0px -10% 0px", amount: 0.1 }
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

// TypeScript type definitions
type ProjectImage = {
    src: string;
    title: string;
};

type ProjectCategory = {
    title: string;
    images: ProjectImage[];
};

type ProjectData = {
    title: string;
    tagline: string;
    bannerImages: { src: string; alt: string; rotate?: boolean }[];
    overview: {
        vision: string[];
        facts: { label: string; value: string }[];
    };
    floorPlan?: {
        image: string;
        title: string;
        description: string[];
        highlights: string[];
    };
    categories?: ProjectCategory[];
    feature?: {
        image: string;
        title: string;
        description: string;
    };
    videos?: string[];
};

// Project data structure
const projectsData: Record<string, ProjectData> = {
    'california-usa-2024': {
        title: 'California USA 2024',
        tagline: 'The Modern Minimalist',
        bannerImages: [
            { src: '/project 1/bathroom/IMG_3283.jpg', alt: 'Bathroom vanity' },
            { src: '/project 1/kitchen/IMG_3261.jpg', alt: 'Kitchen island' },
            { src: '/project 1/bathroom/IMG_3276.jpg', alt: 'Shower detail' }
        ],
        overview: {
            vision: [
                'This design project embodies modern minimalist elegance, creating spaces that are both beautiful and highly practical. The curated rooms, including a serene bathroom and a pristine kitchen, are defined by their clean lines and polished surfaces.',
                'Every element is thoughtfully designed for daily living, from the efficient laundry solutions to the spacious vanities, all contributing to a sense of tranquil sophistication and a high-end aesthetic.'
            ],
            facts: [
                { label: 'Where', value: 'California' },
                { label: 'When', value: '2024' },
                { label: 'Type', value: 'Residential' },
            ]
        },
        floorPlan: {
            image: '/project 1/floor plan.jpeg',
            title: 'Spatial Excellence',
            description: [
                'The floor plan embodies a carefully considered approach to residential design, where every square foot serves a purpose. The layout maximizes natural light penetration while maintaining clear circulation paths throughout the home.',
                'Open-concept living areas flow seamlessly into private zones, creating distinct spaces for entertainment and relaxation. Strategic placement of windows and doors ensures optimal cross-ventilation and creates visual connections between interior and exterior spaces.'
            ],
            highlights: [
                'Optimized traffic flow patterns',
                'Maximum natural light exposure',
                'Efficient space utilization',
                'Seamless indoor-outdoor connection'
            ]
        },
        categories: [
            {
                title: 'Kitchen Design',
                images: [
                    { src: '/project 1/kitchen/IMG_3265.jpg', title: 'Modern Kitchen Showcase' },
                    { src: '/project 1/kitchen/IMG_3257.jpg', title: 'Open Kitchen Layout' },
                    { src: '/project 1/kitchen/IMG_3261.jpg', title: 'Kitchen Storage Solutions' },
                    { src: '/project 1/kitchen/IMG_3268.jpg', title: 'Sleek Cabinetry Details' },
                    { src: '/project 1/kitchen/IMG_3270.jpg', title: 'Premium Quartz Countertops' }
                ]
            },
            {
                title: 'Bathroom Sanctuary',
                images: [
                    { src: '/project 1/bathroom/IMG_3280.jpg', title: 'Serene Master Bathroom' },
                    { src: '/project 1/bathroom/IMG_3283.jpg', title: 'Luxurious Double Vanity' },
                    { src: '/project 1/bathroom/IMG_3276.jpg', title: 'Modern Shower Enclosure' },
                    { src: '/project 1/bathroom/IMG_3288.jpg', title: 'Elegant Powder Room' },
                    { src: '/project 1/bathroom/IMG_3292.jpg', title: 'Spa-Like Atmosphere' }
                ]
            }
        ],
        feature: {
            image: '/project 1/laundry.jpg',
            title: 'Efficient Laundry Design',
            description: 'A thoughtfully integrated stacked laundry unit that maximizes vertical space while maintaining the clean, minimalist aesthetic throughout the residence.'
        },
    },
    'artisan-teak-mandala-2024': {
        title: "Artisan's Teak Mandala",
        tagline: 'Sacred Space Redefined',
        bannerImages: [
            { src: '/project 2/after 1.JPEG', alt: 'Mandala ceiling view', rotate: true }
        ],
        overview: {
            vision: [
                'This exquisite wooden ceiling design beautifully embodies Tamil cultural heritage with its intricate curves and motifs, creating an antique style perfect for a Pooja room. The central, larger mandala is beautifully accented by a chandelier, while smaller circular carvings and hanging lotus lights are integrated into the grid pattern.',
                'The rich, dark wood grain creates a warm, serene, and inviting atmosphere, making it a truly timeless and sacred statement piece for reflection and prayer.'
            ],
            facts: [
                { label: 'Where', value: 'ECR, Chennai' },
                { label: 'When', value: '2024' },
                { label: 'Type', value: 'Pooja Room' },
            ]
        },
        videos: ['/project 2/video 1.mp4', '/project 2/video 2.mp4'],
    }
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
    const { slug } = use(params);
    const project = projectsData[slug as keyof typeof projectsData];

    if (!project) {
        return (
            <main className={styles.projectDetailPage}>
                <Navbar />
                <div className={styles.container}>
                    <h1>Project not found</h1>
                    <Link href="/projects">← Back to Projects</Link>
                </div>
                <Footer />
            </main>
        );
    }

    // Prepare structured data
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' },
        { name: project.title, url: `/projects/${slug}` },
    ];

    const creativeWork = getCreativeWorkSchema({
        name: project.title,
        description: project.overview.vision[0],
        image: project.bannerImages[0]?.src || '/logo.png',
        url: `/projects/${slug}`,
        dateCreated: project.overview.facts.find(f => f.label === 'When')?.value,
        location: project.overview.facts.find(f => f.label === 'Where')?.value,
    });

    return (
        <main className={styles.projectDetailPage}>
            <StructuredDataScript data={[creativeWork, getBreadcrumbSchema(breadcrumbItems)]} />
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

                {/* Hero */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.heroHeader}
                >
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <p className={styles.projectTagline}>{project.tagline}</p>
                </motion.header>

                <motion.div
                    className={styles.bannerCollageImages}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    {project.bannerImages.map((img, index) => {
                        const isRotated = Boolean(img.rotate);
                        const bgUrl = `url("${img.src}")`;

                        return (
                            <div
                                key={index}
                                className={`${styles.bannerImage} ${isRotated ? styles.rotatedBg : ''} ${styles.watermarkedImageWrapper}`}
                                style={
                                    isRotated
                                        ? {
                                            backgroundImage: bgUrl,
                                            backgroundSize: '80%',
                                            backgroundPosition: 'center center',
                                            backgroundRepeat: 'no-repeat'
                                        }
                                        : undefined
                                }
                            >
                                {!isRotated ? (
                                    <img src={img.src} alt={img.alt} className={styles.bannerImgElement} />
                                ) : (
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        style={{ width: 1, height: 1, opacity: 0, position: 'absolute', left: -9999 }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </motion.div>

                {/* Overview */}
                <motion.div className={styles.overviewSection} {...fadeInUp}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewContent}>
                            {project.overview.vision.map((paragraph, index) => (
                                <p key={index} className={styles.descriptionText}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className={styles.factsList}>
                            {project.overview.facts.map((fact, index) => (
                                <div key={index} className={styles.factRow}>
                                    <span className={styles.factLabel}>{fact.label}</span>
                                    <span className={styles.factValue}>{fact.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Floor Plan Section - Only for California */}
                {project.floorPlan && (
                    <motion.div className={styles.floorPlanSection} {...fadeInUp}>
                        <h2 className={styles.sectionHeading}>Layout &amp; Flow</h2>
                        <div className={styles.floorPlanGrid}>
                            <img
                                src={project.floorPlan.image}
                                alt={`${project.title} Floor Plan`}
                                className={styles.floorPlanImage}
                            />
                            <div className={styles.floorPlanContent}>
                                <h3 className={styles.floorPlanTitle}>{project.floorPlan.title}</h3>
                                {project.floorPlan.description.map((paragraph, index) => (
                                    <p key={index} className={styles.floorPlanText}>
                                        {paragraph}
                                    </p>
                                ))}
                                <ul className={styles.floorPlanHighlights}>
                                    {project.floorPlan.highlights.map((highlight, index) => (
                                        <li key={index} className={styles.planHighlight}>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Video Gallery - Only for Artisan's Teak Mandala */}
                {project.videos && (
                    <motion.div className={styles.videoSection} {...fadeInUp}>
                        <h2 className={styles.sectionHeading}>Experience the Sacred Space</h2>
                        <div className={styles.videoGrid}>
                            {project.videos.map((videoSrc, index) => (
                                <div key={index} className={styles.videoCard}>
                                    <div className={styles.videoContainer}>
                                        <video
                                            src={videoSrc}
                                            className={styles.projectVideo}
                                            loop
                                            muted
                                            playsInline
                                            autoPlay
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Category Galleries - Only for California */}
                {project.categories && project.categories.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        className={styles.categorySection}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className={styles.categoryTitle}>{category.title}</h2>
                        <div className={styles.imageGrid}>
                            {category.images.map((image, index) => (
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
                                    <div className={`${styles.imageContainer} ${styles.watermarkedImageWrapper}`}>
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className={styles.galleryImage}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Feature Section - Only for California */}
                {project.feature && (
                    <motion.div className={styles.featureSection} {...fadeInUp}>
                        <div className={styles.featureGrid}>
                            <div className={`${styles.featureImage} ${styles.watermarkedImageWrapper}`}>
                                <img src={project.feature.image} alt={project.feature.title} />
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{project.feature.title}</h3>
                                <p className={styles.featureText}>
                                    {project.feature.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
            <Footer />
        </main>
    );
}
