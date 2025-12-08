'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const socialLinks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/vishdesignstudio/',
        icon: 'instagram',
        color: '#E4405F'
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/WallsandDetails?mibextid=wwXIfr&rdid=uhHwLfb1Ltyfd1X7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CAAJebiWL%2F%3Fmibextid%3DwwXIfr',
        icon: 'facebook',
        color: '#1877F2'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/vish-design-studio/',
        icon: 'linkedin',
        color: '#0A66C2'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@vishdesignstudio',
        icon: 'youtube',
        color: '#FF0000'
    },
    {
        name: 'Pinterest',
        url: 'https://www.pinterest.com/vishdesignstudio/?invite_code=1b79164728cf43b48515607727a04f21&sender=601301125156728962',
        icon: 'pinterest',
        color: '#E60023'
    },
];

// project type options for the custom dropdown
const PROJECT_TYPES = [
    { value: '', label: 'Select a project type' },
    { value: 'residential', label: 'Residential Design' },
    { value: 'commercial', label: 'Commercial Design' },
    { value: 'renovation', label: 'Renovation' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'Internship/Job Opportunities', label: 'Internship/Job Opportunities' },
    { value: 'other', label: 'Other' },
];

type ProjectTypeDropdownProps = {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
};

function ProjectTypeDropdown({ value, onChange, disabled }: ProjectTypeDropdownProps) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const selected =
        PROJECT_TYPES.find((opt) => opt.value === value) ?? PROJECT_TYPES[0];

    const handleSelect = (val: string) => {
        onChange(val);
        setOpen(false);
    };

    return (
        <div className={styles.dropdown} ref={containerRef}>
            <button
                type="button"
                className={`${styles.dropdownTrigger} ${disabled ? styles.dropdownDisabled : ''}`}
                onClick={() => !disabled && setOpen((prev) => !prev)}
                disabled={disabled}
            >
                <span className={styles.dropdownLabel}>{selected.label}</span>
                <span className={styles.dropdownIcon}>▾</span>
            </button>

            {open && !disabled && (
                <ul className={styles.dropdownList}>
                    {PROJECT_TYPES.map((option) => (
                        <li
                            key={option.value || 'empty'}
                            className={`${styles.dropdownOption} ${
                                option.value === value ? styles.dropdownOptionActive : ''
                            }`}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [projectType, setProjectType] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setFormStatus('idle');

        try {
            const result = await emailjs.sendForm(
                'service_d0xn6qc',
                'template_rnjwxti',
                formRef.current!,
                '-oY7ac0HtEF3r5nZW'
            );

            console.log('SUCCESS!', result.text);
            setFormStatus('success');
            formRef.current?.reset();
            setProjectType('');
        } catch (error) {
            console.error('FAILED.', error);
            setFormStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className={styles.contactPage}>
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

                {/* Hero Section */}
                <motion.header
                    className={styles.header}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className={styles.pageTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                    >
                        Let's Create Together
                    </motion.h1>
                    <motion.p
                        className={styles.pageSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                    >
                        Ready to transform your space? We'd love to hear from you.
                    </motion.p>
                </motion.header>

                {/* Contact Grid */}
                <motion.div
                    className={styles.contactGrid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Contact Info Card */}
                    <motion.div className={styles.infoCard} variants={fadeInUp}>
                        <div className={styles.infoHeader}>
                            <h2 className={styles.cardTitle}>Get in Touch</h2>
                            <p className={styles.cardSubtitle}>
                                Have a project in mind or questions about our process? We're here to help.
                            </p>
                        </div>

                        {/* Email */}
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div className={styles.contactDetails}>
                                <h3 className={styles.contactLabel}>Email Us</h3>
                                <a
                                    href="mailto:info@vishdesignstudio.com"
                                    className={styles.contactValue}
                                >
                                    info@vishdesignstudio.com
                                </a>
                                <a
                                    href="mailto:designstudio.vish@gmail.com"
                                    className={styles.contactValue}
                                    style={{
                                        display: 'block',
                                        marginTop: '0.5rem',
                                        fontSize: '1.125rem',
                                    }}
                                >
                                    designstudio.vish@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className={styles.contactDetails}>
                                <h3 className={styles.contactLabel}>Location</h3>
                                <p className={styles.contactValue}>Chennai, India</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className={styles.socialSection}>
                            <h3 className={styles.socialTitle}>Follow Our Journey</h3>
                            <div className={styles.socialGrid}>
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialCard}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        style={
                                            {
                                                '--social-color': social.color,
                                            } as React.CSSProperties
                                        }
                                    >
                                        <div className={styles.socialIconWrapper}>
                                            {getSocialIcon(social.icon)}
                                        </div>
                                        <span className={styles.socialName}>{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div className={styles.formCard} variants={fadeInUp}>
                        <h2 className={styles.formTitle}>Send Us a Message</h2>
                        <p className={styles.formSubtitle}>
                            Fill out the form below and we'll get back to you within 24 hours.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    className={styles.formInput}
                                    placeholder="John Doe"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="reply_to"
                                    className={styles.formInput}
                                    placeholder="john@example.com"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.formLabel}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className={styles.formInput}
                                    placeholder="+1 (555) 000-0000"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="project" className={styles.formLabel}>
                                    Project Type
                                </label>

                                {/* Custom themed dropdown */}
                                <ProjectTypeDropdown
                                    value={projectType}
                                    onChange={setProjectType}
                                    disabled={isLoading}
                                />

                                {/* Hidden native select so EmailJS still receives project_type */}
                                <select
                                    id="project"
                                    name="project_type"
                                    value={projectType}
                                    onChange={(e) => setProjectType(e.target.value)}
                                    className={styles.nativeSelectHidden}
                                    disabled={isLoading}
                                >
                                    {PROJECT_TYPES.map((option) => (
                                        <option
                                            key={option.value || 'empty'}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className={styles.formTextarea}
                                    placeholder="Tell us about your project."
                                    required
                                    disabled={isLoading}
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className={styles.submitButton}
                                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                disabled={isLoading}
                            >
                                <span>{isLoading ? 'Sending.' : 'Send Message'}</span>
                                {!isLoading && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            {/* Success/Error Modal */}
            {formStatus !== 'idle' && (
                <motion.div
                    className={styles.modalBackdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setFormStatus('idle')}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalContent}>
                            {formStatus === 'success' ? (
                                <>
                                    <div
                                        className={styles.modalIcon}
                                        style={{ background: '#d4edda' }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="48"
                                            height="48"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#155724"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.modalTitle}>
                                        Message Sent Successfully!
                                    </h3>
                                    <p className={styles.modalText}>
                                        Thank you for reaching out. We'll get back to you
                                        within 24 hours.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div
                                        className={styles.modalIcon}
                                        style={{ background: '#f8d7da' }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="48"
                                            height="48"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#721c24"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="15" y1="9" x2="9" y2="15" />
                                            <line x1="9" y1="9" x2="15" y2="15" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.modalTitle}>
                                        Oops! Something Went Wrong
                                    </h3>
                                    <p className={styles.modalText}>
                                        Failed to send message. Please try again or email us
                                        directly at info@vishdesignstudio.com
                                    </p>
                                </>
                            )}
                            <button
                                className={styles.modalButton}
                                onClick={() => setFormStatus('idle')}
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            <Footer />
        </main>
    );
}

// Social Media Icons
function getSocialIcon(type: string) {
    switch (type) {
        case 'instagram':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            );
        case 'facebook':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            );
        case 'linkedin':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            );
        case 'youtube':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
            );
        case 'pinterest':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
            );
        default:
            return null;
    }
}
