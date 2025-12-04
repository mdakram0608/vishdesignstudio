'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import styles from './ScrollVideo.module.css';
import Navbar from './Navbar';

const FRAME_COUNT = 300; // 000001.webp ... 000300.webp
const MAX_DPR = 1.25;   

// /public/9mb/000001.webp ... 000300.webp
const getFrameSrc = (index: number) => {
  const frameNumber = index.toString().padStart(6, '0');
  return `/9mb/${frameNumber}.webp`;
};

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number | null>(null);

  // our own scroll progress (0 → 1) not tied to page scroll
  const progressRef = useRef(0);
  const scrollProgress = useMotionValue(0);

  // text animation based on this virtual progress
  const textOpacity = useTransform(scrollProgress, [0, 0.15, 0.3], [0, 1, 1]);
  const textY = useTransform(scrollProgress, [0, 0.15, 0.3], [100, 0, 0]);

  // ensure canvas size matches viewport & DPR
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const rawDpr = window.devicePixelRatio || 1;
      const dpr = Math.min(rawDpr, MAX_DPR);
      const targetWidth = rect.width * dpr;
      const targetHeight = rect.height * dpr;
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const render = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index - 1];
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const rawDpr = window.devicePixelRatio || 1;
    const dpr = Math.min(rawDpr, MAX_DPR);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(image, 0, 0, rect.width, rect.height);
  }, []);

  // preload 000001.webp → 000300.webp
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

  // wheel-based virtual scrolling:
  //   - while progress < 1: prevent page scroll & update frames
  //   - after progress hits 1: allow normal scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const current = progressRef.current;

      // video phase: consume scroll and do not move the page
      if (current < 1) {
        e.preventDefault();

        const speed = 0.0015; // increase/decrease to tune sensitivity
        const delta = e.deltaY;
        let next = current + delta * speed;
        if (next < 0) next = 0;
        if (next > 1) next = 1;

        progressRef.current = next;
        scrollProgress.set(next);

        const frame = Math.round(1 + next * (FRAME_COUNT - 1));
        if (frame !== lastFrameRef.current) {
          lastFrameRef.current = frame;
          render(frame);
        }
      }
      // once current >= 1, we do nothing special → page scrolls normally
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel as any);
  }, [render, scrollProgress]);

  return (
    <div>
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
              <p>Crafting Architectural Excellence Through Vision &amp; Innovation</p>
            </motion.div>
            <div className={styles.scrollIndicator}>Scroll to Explore</div>
          </div>
        </div>
      </section>

      <Navbar />
      <div className={styles.spacer} />
    </div>
  );
}
