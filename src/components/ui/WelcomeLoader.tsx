'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeLoader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if user has already seen the loader in this session
        const hasSeenLoader = sessionStorage.getItem('welcome-loader-seen');

        if (hasSeenLoader) {
            setIsVisible(false);
            return;
        }

        // Set timeout to hide loader
        const timer = setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('welcome-loader-seen', 'true');
        }, 2500); // 2.5 seconds visibility

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Background subtle glow */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 0.15 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="absolute inset-0 bg-primary rounded-full blur-3xl"
                        />

                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.2
                            }}
                            className="relative z-10"
                        >
                            <img
                                src="/favicon-interrogante.png"
                                alt="Interrogante Spettacolo"
                                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                            />
                        </motion.div>

                        {/* Spinner Detail */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-6 flex flex-col items-center"
                        >
                            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                        </motion.div>
                    </div>

                    {/* Loading progress-like bar at the bottom */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2.2, ease: "linear" }}
                        className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary origin-left"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
