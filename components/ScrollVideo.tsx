'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollVideo.module.css';
import Navbar from './Navbar';

export default function ScrollVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const maxTimeRef = useRef(0); // stores how much of the video scroll will control


    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let animationFrameId: number;

        // Handle video loaded and ready
        const handleCanPlay = () => {
            console.log('Video can play, duration:', video.duration);
            if (video.duration && video.duration !== Infinity) {

                // CONTROL UP TO 5 SECONDS (but NOT beyond actual video length)
                maxTimeRef.current = Math.min(video.duration, 8);
                // maxTimeRef.current = video.duration;
                setIsVideoReady(true);
                updateVideoTime();
            }
        };

        // Update video time based on scroll position  
        const updateVideoTime = () => {
            if (!video || !video.duration || video.duration === Infinity) return;

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Video plays through 300vh of scroll
            const videoScrollHeight = windowHeight * 3.5;

            // Calculate scroll percentage
            const scrollPercent = Math.min(Math.max(scrollPosition / videoScrollHeight, 0), 1);

            // Map to 5 seconds of video
            const maxVideoTime =
            maxTimeRef.current > 0 ? maxTimeRef.current : video.duration;
            const targetTime = scrollPercent * maxVideoTime;

            // Smooth easing towards targetTime (removes lag)
            const lerpFactor = 0.2;
            const newTime = video.currentTime + (targetTime - video.currentTime) * lerpFactor;

            // Ultra-fine threshold for maximum smoothness
            if (Math.abs(video.currentTime - newTime) > 0.01) {
                video.currentTime = newTime;
            }
        };

        // Ultra-smooth scroll handler - no throttling for max responsiveness
        const handleScroll = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            animationFrameId = requestAnimationFrame(updateVideoTime);
        };

        // Add event listeners
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('canplaythrough', handleCanPlay);
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Force video to load
        video.load();

        // Check if already ready
        if (video.readyState >= 3) {
            handleCanPlay();
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('canplaythrough', handleCanPlay);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className={styles.videoContainer}>
                <video
                    ref={videoRef}
                    className={styles.video}
                    preload="auto"
                    muted
                    playsInline
                    disablePictureInPicture
                >
                    <source src="/videos/20251129-1206-37.9445883.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.overlay}>
                    <div className={styles.textContent}>
                        <h1>Vish Design Studio</h1>
                        <p>Crafting Architectural Excellence Through Vision & Innovation</p>
                    </div>
                    <div className={styles.scrollIndicator}>
                        Scroll to Explore
                    </div>
                </div>
            </div>
            {/* Spacer to enable scrolling */}
            <div className={styles.spacer} />
            <Navbar/>
        </>
    );
}
