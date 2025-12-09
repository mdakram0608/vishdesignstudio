'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
    progress: number;
    isComplete: boolean;
    onLoadingComplete: () => void;
    skip?: boolean; // Skip loading screen entirely
}

export default function LoadingScreen({
    progress,
    isComplete,
    onLoadingComplete,
    skip = false,
}: LoadingScreenProps) {
    const [shouldRender, setShouldRender] = useState(!skip);
    const [canHide, setCanHide] = useState(false);
    const mountTimeRef = useRef<number>(Date.now());
    const MIN_DISPLAY_TIME = 1500; // Minimum 1.5 seconds display

    // Ensure minimum display time
    useEffect(() => {
        const elapsed = Date.now() - mountTimeRef.current;
        const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

        const timer = setTimeout(() => {
            setCanHide(true);
        }, remaining);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isComplete && canHide) {
            // Wait for fade-out animation before removing from DOM
            const timer = setTimeout(() => {
                setShouldRender(false);
                onLoadingComplete();
            }, 800); // Match animation duration

            return () => clearTimeout(timer);
        }
    }, [isComplete, canHide, onLoadingComplete]);

    if (!shouldRender) return null;

    return (
        <motion.div
            className={styles.loadingScreen}
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete && canHide ? 0 : 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div className={styles.content}>
                {/* Logo/Brand */}
                <motion.div
                    className={styles.logoContainer}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <img
                        src="/logo2.png"
                        alt="Vish Design Studio"
                        className={styles.logo}
                    />
                </motion.div>

                {/* Loading Text */}
                <motion.p
                    className={styles.loadingText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Loading Experience
                </motion.p>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                    <motion.div
                        className={styles.progressBar}
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                </div>

                {/* Progress Percentage */}
                <motion.p
                    className={styles.progressText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {Math.round(progress)}%
                </motion.p>
            </div>
        </motion.div>
    );
}
