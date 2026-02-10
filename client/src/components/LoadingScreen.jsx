import React, { useState, useEffect } from 'react';
import carImage from '../assets/Ae86.jpg';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center">

            {/* Circular Progress Ring Container */}
            <div className="relative w-48 h-48 mb-8 flex items-center justify-center">

                {/* 1. The Real Image (Masked) */}
                <div className="absolute inset-2 z-10 rounded-full overflow-hidden border-4 border-sidebar/50">
                    <img
                        src={carImage}
                        alt="AE86"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay for text readability if needed, or visual style */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* 2. Rotating Progress Ring (Outer Glow) */}
                <div className="absolute inset-0 z-20 animate-spin-slow">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" /> {/* Primary Color (Violet) */}
                                <stop offset="100%" stopColor="#c084fc" stopOpacity="0" /> {/* Transparent tail */}
                            </linearGradient>
                        </defs>
                        <circle
                            cx="50" cy="50" r="48"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                        />
                    </svg>
                </div>

                {/* 3. Static Inner Ring (Optional decoration) */}
                <div className="absolute inset-0 rounded-full border border-white/5 z-0 scale-110"></div>

            </div>

            {/* Loading Text */}
            <div className="text-center z-20">
                <h2 className="text-xl font-bold text-white tracking-[0.2em] uppercase animate-pulse">
                    Starting Engine
                </h2>
                <div className="flex justify-center gap-1 mt-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
