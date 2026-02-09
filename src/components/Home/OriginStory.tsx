"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { GlassCard } from "@components/ui/GlassCard";
import Image from "next/image";

const OriginStory = () => {
    return (
        <section className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Avatar / Identity Visual */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Hexagon or Tech Frame */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full animate-pulse opacity-50" />
                            <div className="absolute inset-4 border border-neon-purple/30 rounded-full animate-spin-slow" />
                            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-black/50">
                                <Image
                                    src="/images/myimg.png"
                                    alt="Bhushan Zade"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Tech Badges */}
                            <div className="absolute -right-4 top-10 bg-black/80 border border-neon-cyan/50 px-3 py-1 text-xs font-mono text-neon-cyan rounded backdrop-blur-md">
                                STATUS: ONLINE
                            </div>
                            <div className="absolute -left-4 bottom-10 bg-black/80 border border-neon-purple/50 px-3 py-1 text-xs font-mono text-neon-purple rounded backdrop-blur-md">
                                LVL: SENIOR
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/3">
                    <GlassCard className="p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <i className="text-6xl text-white">01</i>
                        </div>

                        <h3 className="text-neon-cyan font-mono tracking-widest text-sm mb-4">
                            // ORIGIN_STORY
                        </h3>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Constructing <span className="text-neon-purple">Digital Reality</span>
                        </h2>

                        <div className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 min-h-[60px]">
                            <TypeAnimation
                                sequence={[
                                    "Senior Software Engineer",
                                    1500,
                                    "Full Stack Architect",
                                    1500,
                                    "Open Source Contributor",
                                    1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple"
                            />
                        </div>

                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                I am <strong className="text-white">Bhushan Zade</strong>, a Senior Software Engineer with over 5 years of mission-critical experience.
                                My operating parameters focus on building scalable, high-performance digital solutions that push the boundaries of user experience.
                            </p>
                            <p>
                                Specialized in <span className="text-neon-cyan">Angular (Expert)</span>, <span className="text-neon-cyan">React</span>, and <span className="text-neon-cyan">Next.js</span>,
                                I engineer complex frontend systems while maintaining robust backend architectures with Node.js.
                                My database protocols include MySQL, MongoDB, and Firebase.
                            </p>
                            <p>
                                Currently deployed on cloud-based operations, managing private VPS and shared hosting environments to ensure optimal uptime and security.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default OriginStory;
