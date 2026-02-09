"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { GlassCard } from "@components/ui/GlassCard";
import Image from "next/image";

const stats = [
    { label: "Experience", value: "7+ Yrs", color: "neon-cyan" },
    { label: "Performance", value: "95% Boost", color: "neon-purple" },
    { label: "NPM Users", value: "13K+", color: "green-500" },
];

const OriginStory = () => {
    return (
        <section className="relative z-10 container mx-auto px-4 py-24 mb-20">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

                {/* LEFT: Holographic Profile Core */}
                <div className="w-full lg:w-5/12 flex justify-center perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, rotateY: -30 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Spinning Data Rings */}
                        <div className="absolute inset-[-20px] border border-neon-cyan/20 rounded-full animate-spin-slow border-dashed" />
                        <div className="absolute inset-[-40px] border border-neon-purple/20 rounded-full animate-spin-reverse-slow border-dotted opacity-50" />

                        {/* Avatar Container */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-black/50 shadow-[0_0_50px_rgba(0,243,255,0.2)]">
                            {/* Removed overlays for clear image */}
                            <Image
                                src="/images/myimg.png"
                                alt="Bhushan Zade"
                                fill
                                className="object-cover"
                            />

                            {/* Scanning Line Overlay */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 animate-scan-fast z-20 opacity-30 pointer-events-none" />
                        </div>

                        {/* Floating Status Widgets */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-8 top-20 bg-black/80 backdrop-blur-md border border-neon-cyan/50 px-4 py-2 rounded text-xs font-mono text-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                        >
                            <span className="animate-pulse">●</span> STATUS: ACTIVE
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="absolute -left-8 bottom-20 bg-black/80 backdrop-blur-md border border-neon-purple/50 px-4 py-2 rounded text-xs font-mono text-neon-purple shadow-[0_0_20px_rgba(188,19,254,0.3)]"
                        >
                            ID: SR_ENGINEER
                        </motion.div>
                    </motion.div>
                </div>

                {/* RIGHT: Data Stream Content */}
                <div className="w-full lg:w-7/12">
                    <GlassCard className="p-6 md:p-12 relative overflow-hidden border-l-4 border-l-neon-purple bg-black/60">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-neon-purple font-mono text-xs tracking-[0.3em]">IDENTITY_RECORD_FOUND</span>
                                <div className="h-px flex-grow bg-gradient-to-r from-neon-purple/50 to-transparent" />
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Bhushan <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Zade</span>
                            </h1>

                            <div className="text-xl md:text-2xl font-mono text-gray-400 mb-8 min-h-[32px] flex items-center gap-2">
                                <span className="text-neon-cyan">{">"}</span>
                                <TypeAnimation
                                    sequence={[
                                        "Initializing Architecture...",
                                        1000,
                                        "Senior Software Engineer",
                                        2000,
                                        "Angular Expert & Architect",
                                        2000,
                                        "Generative AI Integrator",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={60}
                                    repeat={Infinity}
                                    className="text-white"
                                />
                            </div>

                            <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light mb-10 border-l border-white/10 pl-6 h-fit">
                                <p>
                                    Results-oriented <strong className="text-white">Senior Software Engineer</strong> with <span className="text-neon-cyan">6.10+ years</span> of experience architecting scalable enterprise applications for Healthcare, E-commerce, and SaaS sectors. Expert in modernizing legacy systems and building high-performance architectures.
                                </p>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/5 p-4 rounded border-l-2 border-neon-cyan"
                                >
                                    <h4 className="text-xs font-mono text-neon-cyan mb-2 tracking-widest">MISSION HIGHLIGHTS</h4>
                                    <ul className="text-sm list-disc pl-4 space-y-2">
                                        <li>Optimized SQL query performance by <span className="text-white font-bold">95%</span> (30s → 3s).</li>
                                        <li>Architected microservices on <span className="text-white font-bold">GCP</span> with Dockerized environments.</li>
                                        <li>Published <code>ngx-http-loader</code> on NPM (13,000+ developers).</li>
                                    </ul>
                                </motion.div>
                                <p>
                                    Recently focused on integrating <span className="text-neon-purple font-bold">Generative AI</span> (Gemini/GroqCloud) into web ecosystems to deliver robust, intelligent software solutions.
                                </p>
                            </div>

                            {/* Stat Modules */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white/5 p-4 rounded border border-white/5 hover:border-neon-cyan/30 transition-colors group">
                                        <div className={`text-[10px] text-${stat.color} font-mono mb-1 group-hover:animate-pulse uppercase tracking-wider`}>
                                            {stat.label}
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                            {stat.value}
                                        </div>
                                        {/* Fake Gauge */}
                                        <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1, delay: 1 + (idx * 0.2) }}
                                                className={`h-full bg-${stat.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>

            </div>
        </section>
    );
};

export default OriginStory;
