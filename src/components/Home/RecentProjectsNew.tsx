"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import { NeonButton } from "@components/ui/NeonButton";

const RecentProjectsNew = () => {
    return (
        <section className="relative z-10 py-20 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Latest <span className="text-neon-cyan">Deployment</span>
                        </h2>
                        <div className="h-1 w-20 bg-neon-cyan mx-auto lg:mx-0 rounded-full shadow-[0_0_10px_#00f3ff] mb-8" />

                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-4">Pro Code Programming</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                A comprehensive ed-tech platform revolutionizing how programming is learned.
                                Designed to guide users from "Hello World" to advanced mastery in JavaScript, Python, and Java.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                                {["Next.js", "TypeScript", "Tailwind", "Supabase"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link href="/projects" passHref>
                            <NeonButton variant="primary">Explore Projects</NeonButton>
                        </Link>
                    </motion.div>

                    {/* Card Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-lg"
                    >
                        <GlassCard className="group cursor-pointer min-h-[300px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="text-center z-10 p-6">
                                <div className="text-6xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500">
                                    🚀
                                </div>
                                <h4 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                    Featured Project
                                </h4>
                                <p className="text-sm text-gray-400 mt-2">Click to view details</p>
                            </div>

                            {/* Grid Effect overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default RecentProjectsNew;
