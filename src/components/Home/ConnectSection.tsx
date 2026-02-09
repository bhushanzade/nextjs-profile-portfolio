"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import { NeonButton } from "@components/ui/NeonButton";

const ConnectSection = () => {
    return (
        <section className="relative z-10 container mx-auto px-4 mb-20">
            <GlassCard className="max-w-4xl mx-auto text-center py-16 px-6 relative overflow-visible bg-gradient-to-br from-black/60 to-neon-purple/10 border-neon-purple/30">

                {/* Decorative Pulse */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl animate-pulse" />

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to <span className="text-neon-cyan">Collaborate?</span>
                </h2>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Initiate a secure transmission. Whether it's a new project, a freelance inquiry, or just to say hello.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <NeonButton variant="primary" className="min-w-[160px]">
                        Send Email
                    </NeonButton>
                    <NeonButton variant="secondary" className="min-w-[160px]">
                        LinkedIn Comms
                    </NeonButton>
                </div>

                {/* Decoder Effect Footer */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-mono tracking-wider">
                    <a href="#" className="hover:text-neon-cyan transition-colors">GITHUB_UPLINK</a>
                    <a href="#" className="hover:text-neon-cyan transition-colors">LINKEDIN_SIGNAL</a>
                    <a href="#" className="hover:text-neon-cyan transition-colors">INSTAGRAM_FEED</a>
                    <a href="#" className="hover:text-neon-cyan transition-colors">DEV_LOGS</a>
                </div>
            </GlassCard>
        </section>
    );
};

export default ConnectSection;
