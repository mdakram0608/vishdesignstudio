'use client';

import { useEffect, useState } from 'react';
import ScrollVideo from '@/components/ScrollVideo';
import PortfolioContent from '@/components/PortfolioContent';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
    // Always initialize to false on server to prevent hydration mismatch
    const [hasSeenLoading, setHasSeenLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);

    // Check sessionStorage on client mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasSeenBefore = sessionStorage.getItem('hasSeenLoading') === 'true';
            if (hasSeenBefore) {
                setHasSeenLoading(true);
                setIsLoadingComplete(true);
                setShowContent(true);
            }
        }
    }, []);

    useEffect(() => {
        if (!showContent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

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

        if (typeof window !== 'undefined') {
            sessionStorage.setItem('hasSeenLoading', 'true');
            setHasSeenLoading(true);
        }
    };

    return (
        <>
            <LoadingScreen
                progress={loadingProgress}
                isComplete={isLoadingComplete}
                onLoadingComplete={handleLoadingComplete}
                skip={hasSeenLoading}
            />
            <main style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
                <ScrollVideo onLoadingProgress={handleLoadingProgress} />
                <PortfolioContent />
                <Footer />
            </main>
        </>
    );
}
