"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import { NeonButton } from "@components/ui/NeonButton";

const RecentWorkNew = () => {
    return (
        <section className="relative z-10 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Experience <span className="text-neon-purple">Log</span>
                    </h2>
                    <div className="h-1 w-20 bg-neon-purple mx-auto md:mx-0 rounded-full shadow-[0_0_10px_#bc13fe]" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-8 md:p-10 relative">
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl" />

                            <h3 className="text-3xl font-bold text-white mb-2">Bacancy Technology</h3>
                            <p className="text-neon-cyan font-mono text-sm mb-6 tracking-widest uppercase">
                                June 2024 - Current
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                Spearheaded the development of a complex React Native application from the ground up.
                                Architected the full stack solution using <span className="text-white font-semibold">React Native</span>, <span className="text-white font-semibold">TypeScript</span>, and <span className="text-white font-semibold">React Query</span>, delivering high-performance mobile experiences.
                            </p>

                            <Link href="/work" passHref>
                                <NeonButton variant="secondary">Full Career Map</NeonButton>
                            </Link>
                        </GlassCard>
                    </motion.div>

                    {/* Decorative / Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex justify-center relative"
                    >
                        {/* Abstract Tech Visual instead of generic SVG */}
                        <div className="relative w-full max-w-sm aspect-square">
                            <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-spin-slow" />
                            <div className="absolute inset-4 border border-neon-purple/30 rounded-full" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 to-transparent rounded-full blur-2xl" />

                            {/* Holographic Code Block simulation */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-black/40 backdrop-blur-sm border border-neon-purple/50 rounded-lg p-4 font-mono text-xs text-neon-purple overflow-hidden">
                                <div className="opacity-50">
                                    &lt;Developer&gt;<br />
                                    &nbsp;&nbsp;const status = "Building Future";<br />
                                    &nbsp;&nbsp;return &lt;Innovation /&gt;;<br />
                                    &lt;/Developer&gt;
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecentWorkNew;
