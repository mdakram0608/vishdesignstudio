'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './project-detail.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
    description: string;
    images: ProjectImage[];
};

type ProjectData = {
    title: string;
    bannerCaption: string;
    bannerImages: { src: string; alt: string }[];
    overview: {
        vision: string[];
        stats: { number: string; label: string }[];
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
        tag: string;
        title: string;
        description: string;
    };
    beforeAfter?: {
        before: string;
        after: string[];
        videos: string[];
    };
    highlights: {
        icon: string;
        title: string;
        description: string;
    }[];
};

// Project data structure
const projectsData: Record<string, ProjectData> = {
    'california-usa-2024': {
        title: 'California USA 2024',
        bannerCaption: 'THE MODERN MINIMALIST',
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
            stats: [
                { number: '2024', label: 'Year Completed' },
                { number: 'California', label: 'Location' },
                { number: 'Residential', label: 'Project Type' },
                { number: 'Minimalist', label: 'Design Style' }
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
                description: 'Pristine white cabinetry featuring sleek quartz countertops and matte black hardware accents',
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
                description: 'Tranquil bathroom spaces designed with polished surfaces and contemporary fixtures',
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
            tag: 'Smart Solutions',
            title: 'Efficient Laundry Design',
            description: 'A thoughtfully integrated stacked laundry unit that maximizes vertical space while maintaining the clean, minimalist aesthetic throughout the residence.'
        },
        highlights: [
            { icon: '✦', title: 'Clean Lines', description: 'Minimalist design philosophy emphasizing simplicity and uncluttered spaces' },
            { icon: '◆', title: 'Premium Materials', description: 'Quartz finishes, white cabinetry, and black matte hardware create cohesion' },
            { icon: '✧', title: 'Practical Elegance', description: 'Spaces designed for daily living while maintaining elevated visual appeal' },
            { icon: '❖', title: 'Natural Light', description: 'Strategic design enhancing illumination for bright, inviting spaces' }
        ]
    },
    'artisan-teak-mandala-2024': {
        title: "Artisan's Teak Mandala",
        bannerCaption: 'SACRED SPACE REDEFINED',
        bannerImages: [
            { src: '/project 2/after 1.JPEG', alt: 'Mandala ceiling view' }
        ],
        overview: {
            vision: [
                'This exquisite wooden ceiling design beautifully embodies Tamil cultural heritage with its intricate curves and motifs, creating an antique style perfect for a Pooja room. The central, larger mandala is beautifully accented by a chandelier, while smaller circular carvings and hanging lotus lights are integrated into the grid pattern.',
                'The rich, dark wood grain creates a warm, serene, and inviting atmosphere, making it a truly timeless and sacred statement piece for reflection and prayer.'
            ],
            stats: [
                { number: '2024', label: 'Year Completed' },
                { number: 'ECR, Chennai', label: 'Location' },
                { number: 'Residential', label: 'Project Type' },
                { number: 'Pooja Room', label: 'Design Style' }
            ]
        },
        beforeAfter: {
            before: '/project 2/before.JPG',
            after: ['/project 2/after 1.JPEG'],
            videos: ['/project 2/video 1.mp4', '/project 2/video 2.mp4']
        },
        highlights: [
            { icon: '✦', title: 'Cultural Heritage', description: 'Intricate Tamil motifs and traditional design elements woven into every detail' },
            { icon: '◆', title: 'Artisan Craftsmanship', description: 'Hand-carved teak wood featuring mandala patterns and lotus-inspired accents' },
            { icon: '✧', title: 'Sacred Ambiance', description: 'Warm wood tones creating a serene atmosphere for prayer and meditation' },
            { icon: '❖', title: 'Timeless Design', description: 'Antique styling that becomes a lasting statement piece for generations' }
        ]
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

                {/* Hero Section - Collage Banner */}
                <motion.section
                    className={styles.bannerCollageSection}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className={styles.projectTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {project.title}
                    </motion.h1>
                    <div className={styles.bannerCollageWrapper}>
                        <div className={styles.bannerCollageImages}>
                            {project.bannerImages.map((img, index) => (
                                <div key={index} className={`${styles.bannerImage} ${slug === 'artisan-teak-mandala-2024' ? styles.rotated : ''} ${styles.watermarkedImageWrapper}`}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className={styles.bannerCollageCaption}>
                            {project.bannerCaption}
                        </div>
                    </div>
                </motion.section>

                {/* Project Overview with Split Layout */}
                <motion.div className={styles.overviewSection} {...fadeInUp}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewContent}>
                            <h2 className={styles.sectionHeading}>Project Vision</h2>
                            {project.overview.vision.map((paragraph, index) => (
                                <p key={index} className={styles.descriptionText}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className={styles.statsGrid}>
                            {project.overview.stats.map((stat, index) => (
                                <div key={index} className={styles.statCard}>
                                    <span className={styles.statNumber}>{stat.number}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Floor Plan Section - Only for California */}
                {project.floorPlan && (
                    <motion.div className={styles.floorPlanSection} {...fadeInUp}>
                        <h2 className={styles.sectionHeading}>Layout & Flow</h2>
                        <div className={styles.floorPlanGrid}>
                            <div className={styles.floorPlanImageWrapper}>
                                <img
                                    src={project.floorPlan.image}
                                    alt={`${project.title} Floor Plan`}
                                    className={styles.floorPlanImage}
                                />
                            </div>
                            <div className={styles.floorPlanContent}>
                                <h3 className={styles.floorPlanTitle}>{project.floorPlan.title}</h3>
                                {project.floorPlan.description.map((paragraph, index) => (
                                    <p key={index} className={styles.floorPlanText}>
                                        {paragraph}
                                    </p>
                                ))}
                                <div className={styles.floorPlanHighlights}>
                                    {project.floorPlan.highlights.map((highlight, index) => (
                                        <div key={index} className={styles.planHighlight}>
                                            <span className={styles.highlightIcon}>◆</span>
                                            <span className={styles.highlighticontext}>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Before/After Transformation - Only for Artisan's Teak Mandala */}
                {project.beforeAfter && (
                    <>
                        <motion.div className={styles.beforeAfterSection} {...fadeInUp}>
                            <h2 className={styles.sectionHeading}>The Transformation</h2>
                            <div className={styles.beforeAfterGrid}>
                                {/* Before Image */}
                                <div className={styles.beforeAfterCard}>
                                    <div className={`${styles.imageContainer} ${styles.watermarkedImageWrapper}`}>
                                        <img
                                            src={project.beforeAfter.before}
                                            alt="Before transformation"
                                            className={styles.galleryImage}
                                        />
                                        <div className={styles.beforeAfterLabel}>Before</div>
                                    </div>
                                </div>

                                {/* After Images */}
                                {project.beforeAfter.after.map((afterImg, index) => (
                                    <div key={index} className={styles.beforeAfterCard}>
                                        <div className={`${styles.imageContainer} ${styles.watermarkedImageWrapper}`}>
                                            <img
                                                src={afterImg}
                                                alt={`After transformation ${index + 1}`}
                                                className={styles.galleryImage}
                                            />
                                            <div className={styles.beforeAfterLabel}>After</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Video Gallery */}
                        <motion.div className={styles.videoSection} {...fadeInUp}>
                            <h2 className={styles.sectionHeading}>Experience the Sacred Space</h2>
                            <div className={styles.videoGrid}>
                                {project.beforeAfter.videos.map((videoSrc, index) => (
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
                    </>
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
                        <div className={styles.categoryHeader}>
                            <h2 className={styles.categoryTitle}>{category.title}</h2>
                            <p className={styles.categoryDescription}>
                                {category.description}
                            </p>
                        </div>
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
                                        <div className={styles.imageOverlay}>
                                            <span className={styles.imageNumber}>0{index + 1}</span>
                                        </div>
                                    </div>
                                    <h3 className={styles.imageTitle}>{image.title}</h3>
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
                                <span className={styles.featureTag}>{project.feature.tag}</span>
                                <h3 className={styles.featureTitle}>{project.feature.title}</h3>
                                <p className={styles.featureText}>
                                    {project.feature.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Design Highlights */}
                <motion.div className={styles.highlightsSection} {...fadeInUp}>
                    <h2 className={styles.sectionHeading}>Design Excellence</h2>
                    <div className={styles.highlightsGrid}>
                        {project.highlights.map((highlight, index) => (
                            <motion.div key={index} className={styles.highlightCard} whileHover={{ scale: 1.02 }}>
                                <div className={styles.highlightIcon}>{highlight.icon}</div>
                                <h3>{highlight.title}</h3>
                                <p>{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
