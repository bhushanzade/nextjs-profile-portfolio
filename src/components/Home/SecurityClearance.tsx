"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";

const certs = [
    {
        title: "Full Stack Web Development",
        issuer: "Amazon",
        id: "NRAGJB0NJ019",
        color: "brand-amazon", // We'll just use neon-cyan for now
        icon: "aws"
    },
    {
        title: "Developing Back-End Apps",
        issuer: "IBM",
        id: "ZBSV6Y9LJAHK",
        color: "brand-ibm",
        icon: "ibm"
    },
    {
        title: "Operating Systems Security",
        issuer: "IBM",
        id: "AC8AF635",
        color: "brand-ibm",
        icon: "ibm"
    },
    {
        title: "Cybersecurity Essentials",
        issuer: "EC-Council",
        id: "I1FKUKGKZ1Z3",
        color: "brand-ec",
        icon: "security"
    }
];

const SecurityClearance = () => {
    return (
        <section className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
                <h4 className="text-neon-cyan font-mono tracking-[0.5em] text-sm mb-2">AUTHORIZED PERSONNEL</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Security <span className="text-neon-purple">Clearance</span></h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {certs.map((cert, idx) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-sm"
                    >
                        <GlassCard className="relative overflow-hidden group bg-black/40 border-l-4 border-l-neon-cyan">
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out" />

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-2xl">🎖️</span>
                                </div>
                                <div>
                                    <h5 className="text-xs text-neon-cyan font-mono mb-1">ID: {cert.id}</h5>
                                    <h3 className="text-white font-bold text-lg leading-tight mb-2">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm">Issued by <span className="text-white">{cert.issuer}</span></p>
                                </div>
                            </div>

                            <div className="absolute top-2 right-2">
                                <span className="text-[10px] border border-green-500/50 text-green-500 px-1 py-0.5 rounded uppercase">Verified</span>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SecurityClearance;
