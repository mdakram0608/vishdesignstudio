'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import styles from './ScrollVideo.module.css';
import Navbar from './Navbar';

const FRAME_COUNT = 300;
const MAX_DPR = 1.5;

const getFrameSrc = (index: number) => {
  const frameNumber = index.toString().padStart(6, '0');
  return `/9mb/${frameNumber}.webp`;
};

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number | null>(null);

  // container controls scroll progress tied to animation
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'], // end of animation aligns with top
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT *1.2]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [100, 0, 0]);

  const render = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index - 1];
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const rawDpr = window.devicePixelRatio || 1;
    const dpr = Math.min(rawDpr, MAX_DPR);

    const targetWidth = rect.width * dpr;
    const targetHeight = rect.height * dpr;

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(image, 0, 0, rect.width, rect.height);
  }, []);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      imgs.push(img);
    }
    imagesRef.current = imgs;

    const first = imgs[0];
    if (first) {
      if (first.complete) {
        render(1);
      } else {
        first.onload = () => render(1);
      }
    }
  }, [render]);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    const frame = Math.min(
      Math.max(Math.round(latest), 1),
      FRAME_COUNT
    );

    if (frame === lastFrameRef.current) return;
    lastFrameRef.current = frame;
    render(frame);
  });

  useEffect(() => {
    render(1);
  }, [render]);

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <section className={styles.heroSection}>
        <div className={styles.videoContainer}>
          <canvas
            ref={canvasRef}
            className={styles.video}
            width={1920}
            height={1080}
          />
          <div className={styles.overlay}>
            <motion.div
              className={styles.textContent}
              style={{ opacity: textOpacity, y: textY }}
            >
              <h1>Vish Design Studio</h1>
              <p>Crafting Architectural Excellence Through Vision & Innovation</p>
            </motion.div>
            <div className={styles.scrollIndicator}>Scroll to Explore</div>
          </div>
        </div>
      </section>

      {/* Scrollspace to push next content AFTER animation completes */}
      <div className={styles.afterVideoSpace}>
        <Navbar />
      </div>
    </div>
  );
}
