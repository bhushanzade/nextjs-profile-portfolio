"use client";

import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import { NeonButton } from "@components/ui/NeonButton";
import TerminalWindow from "@components/ui/TerminalWindow";
import GitHubStats from "@components/Home/GitHubStats";
import ParticleExplosion from "@components/ui/ParticleExplosion";

const HackerHero = () => {
    const [showContent, setShowContent] = useState(false);
    const [breachText, setBreachText] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        // Simulate "System Breach" loading sequence
        const sequence = [
            { text: "CONNECTING TO SECURE SERVER...", delay: 800 },
            { text: "BYPASSING FIREWALL...", delay: 1600 },
            { text: "ACCESS GRANTED.", delay: 2400 },
        ];

        const timeouts: NodeJS.Timeout[] = [];

        sequence.forEach(({ text, delay }, index) => {
            const timeout = setTimeout(() => {
                setBreachText(text);
                if (index === sequence.length - 1) {
                    setTimeout(() => setShowContent(true), 800);
                }
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <section className="relative w-full min-h-screen container mx-auto px-4 pt-24 pb-12 flex flex-col">
            {/* Background Particles */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <ParticleExplosion />
            </div>

            <AnimatePresence>
                {!showContent && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center">
                            <div className="text-neon-cyan font-mono text-2xl md:text-4xl tracking-widest animate-pulse mb-4">
                                {breachText}
                            </div>
                            <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
                                <motion.div
                                    className="h-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {showContent && (
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left z-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-xl md:text-2xl font-light text-neon-cyan tracking-[0.2em] mb-4 uppercase">
                                    Identity Verification: Complete
                                </h2>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                    Bhushan Zade
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 h-[60px]"
                            >
                                <TypeAnimation
                                    sequence={[
                                        "Architecting Digital Solutions",
                                        1000,
                                        "Engineering Full Stack Systems",
                                        1000,
                                        "Contributing to Open Source",
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={60}
                                    repeat={Infinity}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="flex gap-6 justify-center lg:justify-start"
                            >
                                <NeonButton variant="primary">Initiate Project</NeonButton>
                                <NeonButton variant="secondary">Establish Comms</NeonButton>
                            </motion.div>
                        </div>

                        {/* Right Content - Terminal */}
                        <motion.div
                            initial={{ opacity: 0, rotateX: 90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex-1 w-full max-w-xl z-20 lg:mt-0 perspective-1000"
                        >
                            <TerminalWindow />
                        </motion.div>
                    </div>

                    {/* GitHub Stats Section */}
                    <GitHubStats />
                </div>
            )}
        </section>
    );
};

export default HackerHero;
