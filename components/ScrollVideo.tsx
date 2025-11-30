'use client';

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import styles from './ScrollVideo.module.css';
import Navbar from './Navbar';

const FRAME_COUNT = 192;


const getFrameSrc = (index: number) => `/videos/Images/${index}.webp`;

export default function ScrollVideo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });


    const render = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const image = imagesRef.current[index - 1];

        if (!canvas || !ctx || !image) return;

        const { width, height } = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, 0, 0, width, height);
    }, []);


    useEffect(() => {
        const loaded: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFrameSrc(i);
            loaded.push(img);
        }

        imagesRef.current = loaded;

        const first = loaded[0];
        if (first) {
            if (first.complete) {
                render(1);
            } else {
                first.onload = () => render(1);
            }
        }
    }, [render]);

    // 4) MAP SCROLL 0→1 TO FRAME 1→192
    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);


    const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.30], [0, 1, 1]);
    const textY = useTransform(scrollYProgress, [0, 0.15, 0.30], [100, 0, 0]);

    useMotionValueEvent(currentIndex, 'change', (latest) => {
        const frame = Math.min(Math.max(Math.round(latest), 1), FRAME_COUNT);
        render(frame);
    });

    return (
        <div ref={containerRef}>
            {/* HERO SECTION (canvas fixed via CSS in .videoContainer) */}
            <section className={styles.heroSection}>
                <div className={styles.videoContainer}>
                    <canvas
                        ref={canvasRef}
                        className={styles.video}
                        width={1920}   // set to your frame width
                        height={1080}  // set to your frame height
                    />

                    <div className={styles.overlay}>
                        <motion.div
                            className={styles.textContent}
                            style={{
                                opacity: textOpacity,
                                y: textY
                            }}
                        >
                            <h1>Vish Design Studio</h1>
                            <p>Crafting Architectural Excellence Through Vision & Innovation</p>
                        </motion.div>
                        <div className={styles.scrollIndicator}>
                            Scroll to Explore
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVBAR + SPACER FOR SCROLL */}
            <Navbar />
            <div className={styles.spacer} />
        </div>
    );
}
