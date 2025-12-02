'use client';

import { motion } from 'framer-motion';
import styles from './design-process.module.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: '-100px' },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, margin: '-100px' },
};

const step1Images = [
    { src: '/design-process/step1.png', title: 'Client briefing & inspiration gathering' },
];

const step2Images = [
    { src: '/design-process/step2i.png', title: 'Scaled floor plans & layouts' },
    { src: '/design-process/step2ii.png', title: 'Preliminary material concepts' },
];

const step3Images = [
    { src: '/design-process/step3i.png', title: 'Interior elevations & millwork planning' },
    { src: '/design-process/step3ii.png', title: 'Material palettes & finish boards' },
];

const step4Images = [
    { src: '/design-process/step4i.png', title: 'Construction tender documentation' },
    { src: '/design-process/step4ii.png', title: 'Finish schedules & specification lists' },
];

const step5Images = [
    { src: '/design-process/step5.png', title: 'Furniture, rugs and lighting logistics' },
];

const step6Images = [
    { src: '/design-process/step6.png', title: 'On-site coordination & progress reviews' },
];

const step7Images = [
    { src: '/design-process/step7.png', title: 'Final styling & handover' },
];

export default function DesignProcessPage() {
    return (
        <main className={styles.designProcessPage}>
            <Navbar />

            <div className={styles.container}>
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.backLinkWrapper}
                >
                    <Link href="/" className={styles.backLink}>
                        ← Back to Home
                    </Link>
                </motion.div>

                {/* Hero / Intro Title */}
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className={styles.pageHeader}
                >
                    <motion.h1
                        className={styles.pageTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                    >
                        Our Design Process
                    </motion.h1>
                    <motion.p
                        className={styles.pageSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                    >
                        A seven-step journey that guides you from first ideas to the final styled space.
                    </motion.p>
                </motion.header>

                {/* Intro Section with Image */}
                <motion.section
                    className={styles.introSection}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-120px' }}
                >
                    <div className={styles.introGrid}>
                        <motion.div className={styles.introContent} variants={fadeInUp}>
                            <h2 className={styles.introBlockTitle}>Our Role in Your Design Project</h2>
                            <p className={styles.introText}>
                                We introduce you to design ideas and concepts that feel as if they were always meant for you, even if you had never imagined them before.
                            </p>
                            <p className={styles.introText}>
                                Every selection is carefully considered so your home feels thoughtful, personal and quietly unexpected, whether it's a compact city floor, a forever family residence or a weekend chalet.
                            </p>
                            <p className={styles.introText}>
                                In a fast-moving world, our aim is to make the journey calm and cocooning, blending experience, humility and integrity with just enough magic to keep it special.
                            </p>
                        </motion.div>

                        <motion.div className={styles.introImageWrapper} variants={scaleIn}>
                            <img
                                src="/design-process/roleinourdesignprocess.png"
                                alt="Our Role in Your Design Process"
                                className={styles.introImage}
                            />
                        </motion.div>
                    </div>

                    <motion.aside className={styles.introHighlightCard} variants={fadeInUp}>
                        <div className={styles.introTag}>Design Journey</div>
                        <h3 className={styles.introHighlightHeading}>From first conversation to final cushion</h3>
                        <p className={styles.introText}>
                            We manage the details so you can enjoy the transformation: ideas, drawings, finishes, furnishings, site visits and installation.
                        </p>
                        <ul className={styles.introBulletList}>
                            <li className={styles.introBulletItem}>
                                <span className={styles.introBulletIcon}>✦</span>
                                <span>One cohesive process for renovations and new builds alike.</span>
                            </li>
                            <li className={styles.introBulletItem}>
                                <span className={styles.introBulletIcon}>✦</span>
                                <span>Clear communication at every step so you always know what's next.</span>
                            </li>
                            <li className={styles.introBulletItem}>
                                <span className={styles.introBulletIcon}>✦</span>
                                <span>End-to-end support, from tearing down walls to placing the last accessory.</span>
                            </li>
                        </ul>
                    </motion.aside>
                </motion.section>

                {/* Steps Overview */}
                <motion.section
                    className={styles.stepsOverviewSection}
                    {...fadeInUp}
                >
                    <div className={styles.stepsOverviewLabel}>The Design Journey</div>
                    <h2 className={styles.stepsOverviewTitle}>Seven steps to a finished home</h2>
                    <p className={styles.stepsOverviewText}>
                        Our time-tested process keeps your project moving smoothly, whether you are refreshing a single level or building a new home from the ground up.
                    </p>
                    <div className={styles.stepsPillRow}>
                        {[
                            'Research',
                            'Initial Concept Drawings',
                            'Design Development',
                            'Construction & Tender Package',
                            'Furniture & Furnishings',
                            'Project Management & Site Visits',
                            'Installation & Completion',
                        ].map((label, index) => (
                            <motion.div
                                className={styles.stepPill}
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -3 }}
                            >
                                <span className={styles.stepPillNumber}>{index + 1}</span>
                                <span>{label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Step 1 - Research */}
                <StepSection
                    stepNumber="01"
                    stepLabel="Step 1"
                    stepTitle="Research"
                    stepTagline="Building the foundation for everything that follows."
                    paragraphs={[
                        "We begin with open, detailed conversations to understand how you live, what you love and how you want your home to feel when it's complete.",
                        "This is where we gather your inspiration images, ideas and wish-lists, then translate them into a clear direction that anchors the entire project.",
                    ]}
                    images={step1Images}
                />

                {/* Step 2 - Initial Concept Drawings */}
                <StepSection
                    stepNumber="02"
                    stepLabel="Step 2"
                    stepTitle="Initial Concept Drawings"
                    stepTagline="Translating your brief into scaled plans and early concepts."
                    paragraphs={[
                        "We prepare scaled drawings and floor layouts for every key area, showing how rooms connect and how you will move through the home day-to-day.",
                        "Cabinetry, built-ins and decorative elements are outlined, and you'll see preliminary colour and material ideas through inspiration imagery and sample palettes.",
                    ]}
                    images={step2Images}
                />

                {/* Step 3 - Design Development */}
                <StepSection
                    stepNumber="03"
                    stepLabel="Step 3"
                    stepTitle="Design Development"
                    stepTagline="Detailing every interior elevation, surface and finish."
                    paragraphs={[
                        "At this stage, the interior architecture truly comes to life. We refine earlier plans and produce detailed drawings for each elevation and every piece of millwork.",
                        "All hard finishes and fixtures are meticulously sourced, creating a coordinated palette that your builder or contractor will later procure and install.",
                        "You start to see how each choice connects, from flooring and tile to hardware, lighting and bespoke joinery details.",
                    ]}
                    images={step3Images}
                />

                {/* Step 4 - Construction & Tender Package */}
                <StepSection
                    stepNumber="04"
                    stepLabel="Step 4"
                    stepTitle="Construction & Tender Package"
                    stepTagline="Finalising drawings and schedules for accurate pricing and build."
                    paragraphs={[
                        "We complete the drawing set and compile all specified finishes into a clear schedule that is issued for contractor pricing.",
                        "Hard finishes such as tile, stone, hardwood, plumbing fixtures, millwork and recessed lighting are documented so your builder can procure them with confidence.",
                    ]}
                    images={step4Images}
                />

                {/* Step 5 - Furniture & Soft Furnishings */}
                <StepSection
                    stepNumber="05"
                    stepLabel="Step 5"
                    stepTitle="Sourcing Furniture & Soft Furnishings"
                    stepTagline="Curating the pieces that make the house feel like home."
                    paragraphs={[
                        "We source all the furniture and layered details that complete your home: sofas and tables, lighting, rugs, art and window treatments.",
                        "Orders are carefully managed and tracked so pieces arrive as efficiently and seamlessly as possible, ready for installation day.",
                    ]}
                    images={step5Images}
                />

                {/* Step 6 - Project Management */}
                <StepSection
                    stepNumber="06"
                    stepLabel="Step 6"
                    stepTitle="Project Management & Site Visits"
                    stepTagline="Keeping the build aligned with the design intent."
                    paragraphs={[
                        "We attend key site meetings with your builder and trades to answer questions, review details in person and minimise potential errors.",
                        "Regular walk-throughs help ensure that drawings, specifications and on-site decisions all stay in sync with the original vision.",
                    ]}
                    images={step6Images}
                />

                {/* Step 7 - Installation & Completion */}
                <StepSection
                    stepNumber="07"
                    stepLabel="Step 7"
                    stepTitle="Installation & Project Completion"
                    stepTagline="The final reveal — and all the finishing touches."
                    paragraphs={[
                        "Once construction is complete and your home has been thoroughly cleaned, we oversee the delivery and placement of all soft furnishings.",
                        "From carpets and cushions to the smallest accessories, we style each space, record any issues and resolve them quickly so nothing is overlooked.",
                    ]}
                    images={step7Images}
                />

                {/* Philosophy / Closing */}
                <motion.section className={styles.philosophySection} {...fadeInUp}>
                    <div className={styles.philosophyGrid}>
                        <div>
                            <h2 className={styles.philosophyHeading}>Our Philosophy</h2>
                            <p className={styles.philosophyText}>
                                At VDS, we exist to uncover design ideas that feel as though they were always part of your story. We make considered choices so every element belongs.
                            </p>
                            <p className={styles.philosophyText}>
                                Whether you're reshaping a compact apartment, building a long-term home or finishing a small cottage, the same calm, layered approach applies.
                            </p>
                        </div>
                        <div className={styles.philosophyAccentCard}>
                            <div className={styles.philosophyAccentLabel}>What you can expect</div>
                            <p className={styles.philosophyAccentText}>
                                A guided process, clear communication and a home that feels uniquely and quietly yours — crafted with skill, experience, humility, integrity and a touch of magic.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}

// Step Section Component with enhanced animations
function StepSection({ stepNumber, stepLabel, stepTitle, stepTagline, paragraphs, images }: {
    stepNumber: string;
    stepLabel: string;
    stepTitle: string;
    stepTagline: string;
    paragraphs: string[];
    images: { src: string; title: string }[];
}) {
    return (
        <motion.section
            className={styles.stepSection}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
        >
            <motion.div className={styles.stepHeader} variants={fadeInUp}>
                <div className={styles.stepLabel}>{stepLabel}</div>
                <div className={styles.stepTitleRow}>
                    <span className={styles.stepNumber}>{stepNumber}</span>
                    <h2 className={styles.stepTitle}>{stepTitle}</h2>
                </div>
                <p className={styles.stepTagline}>{stepTagline}</p>
            </motion.div>

            <div className={styles.stepLayout}>
                <motion.div className={styles.stepTextBlock} variants={fadeInUp}>
                    {paragraphs.map((text, index) => (
                        <p key={index} className={styles.stepParagraph}>{text}</p>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.stepGallery}
                    variants={staggerContainer}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={image.src}
                            className={styles.stepImageCard}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.stepImageContainer}>
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className={styles.stepImage}
                                />
                                <div className={styles.stepImageOverlay}>
                                    <span className={styles.stepImageNumber}>
                                        {stepNumber}.{index + 1}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.stepImageTitle}>{image.title}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
