"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import { TEducation } from "@type/Eduction";

type Props = {
    educations: TEducation[];
};

const AcademicLog = ({ educations }: Props) => {
    // Sort logic if needed, or rely on API order. Usually reverse chronological is best.

    return (
        <section className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col items-center mb-16">
                <h4 className="text-neon-purple font-mono tracking-[0.5em] text-sm mb-2">SYSTEM DATA</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Academic <span className="text-neon-cyan">Logs</span></h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Central Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent md:-translate-x-1/2 ml-6 md:ml-0" />

                <div className="space-y-12">
                    {educations.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row gap-8 relative ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black border-2 border-neon-cyan rounded-full -translate-x-1/2 md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_#00f3ff]" />

                            <div className="flex-1 md:w-1/2 pl-16 md:pl-0">
                                <GlassCard className={`relative p-6 border-l-4 ${idx % 2 === 0 ? "border-l-neon-purple" : "border-l-neon-cyan"} hover:bg-white/5 transition-colors`}>

                                    <div className="font-mono text-xs text-gray-500 mb-2 flex justify-between">
                                        <span>{edu.date}</span>
                                        <span>{edu.location}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                    <h4 className="text-neon-cyan font-semibold mb-2">{edu.program}</h4>

                                    <div className="p-2 bg-black/30 rounded border border-white/5 inline-block text-sm text-gray-300">
                                        Grade: <span className="text-white">{edu.grade}</span>
                                    </div>
                                </GlassCard>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicLog;
