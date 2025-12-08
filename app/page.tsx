'use client';

import { useEffect, useState } from 'react';
import ScrollVideo from '@/components/ScrollVideo';
import PortfolioContent from '@/components/PortfolioContent';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);

    // Prevent scrolling while loading
    useEffect(() => {
        if (!showContent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup - restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [showContent]);

    const handleLoadingProgress = (progress: number, isComplete: boolean) => {
        setLoadingProgress(progress);
        if (isComplete && !isLoadingComplete) {
            setIsLoadingComplete(true);
        }
    };

    const handleLoadingComplete = () => {
        setShowContent(true);
    };

    return (
        <>
            <LoadingScreen
                progress={loadingProgress}
                isComplete={isLoadingComplete}
                onLoadingComplete={handleLoadingComplete}
            />
            <main style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
                <ScrollVideo onLoadingProgress={handleLoadingProgress} />
                <PortfolioContent />
                <Footer />
            </main>
        </>
    );
}
