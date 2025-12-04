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

const FRAME_COUNT = 300; // 000001.webp ... 000300.webp
const MAX_DPR = 1.25;    // limit internal resolution

// /public/9mb/000001.webp ... /public/9mb/000300.webp
const getFrameSrc = (index: number) => {
  const frameNumber = index.toString().padStart(6, '0');
  return `/9mb/${frameNumber}.webp`;
};

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number | null>(null);

  // container for the scroll region that controls the animation
  const containerRef = useRef<HTMLDivElement | null>(null);

  // scroll progress of the container (0 → 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // 0 when top of container hits top of viewport,
    // 1 when bottom of container hits top of viewport.
    offset: ['start start', 'end start'],
  });

  // map scroll 0–1 → frame 1–300
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // text animation based on same scroll
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

  // preload all frames once
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

  // render on scroll, forward and backward, synced with scrollbar
  useMotionValueEvent(currentIndex, 'change', (latest) => {
    const frame = Math.min(
      Math.max(Math.round(latest), 1),
      FRAME_COUNT
    );

    if (frame === lastFrameRef.current) return;
    lastFrameRef.current = frame;
    render(frame);
  });

  // initial draw
  useEffect(() => {
    render(1);
  }, [render]);

  return (
    <div ref={containerRef}>
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

      {/* this spacer defines how long you scroll while the video plays
          before the below content starts to appear */}
      <div className={styles.spacer} />

      <Navbar />
      {/* rest of your page below */}
    </div>
  );
}
