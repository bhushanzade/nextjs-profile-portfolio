"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import { NeonButton } from "@components/ui/NeonButton";

const packages = [
    {
        name: "search-multiselect-dropdown",
        version: "v2.1.0",
        downloads: "15k+",
        desc: "Angular (8+) search and multiselection dropdown component.",
        url: "https://www.npmjs.com/package/search-multiselect-dropdown"
    },
    {
        name: "input-search-select-option",
        version: "v1.4.2",
        downloads: "8k+",
        desc: "Custom input search select option component for Angular.",
        url: "https://www.npmjs.com/package/input-search-select-option"
    },
    {
        name: "ngx-http-loader",
        version: "v3.0.1",
        downloads: "22k+",
        desc: "HTTP loader for Angular with customizable templates.",
        url: "https://www.npmjs.com/package/ngx-http-loader"
    },
    {
        name: "angular-intl-phone",
        version: "v1.0.5",
        downloads: "5k+",
        desc: "Phone library supported intl-tel-input & google-libphonenumber.",
        url: "https://www.npmjs.com/package/angular-intl-phone"
    },
    {
        name: "window-modal-dialog",
        version: "v1.2.0",
        downloads: "3k+",
        desc: "Modal popup for Angular 14+ pure css bootstrap modal.",
        url: "https://www.npmjs.com/package/window-modal-dialog"
    }
];

const PackageRegistry = () => {
    return (
        <section className="relative z-10 container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent flex-1" />
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center tracking-widest uppercase glow-text">
                    NPM <span className="text-neon-purple">Registry</span>
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg, idx) => (
                    <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="h-full flex flex-col justify-between group hover:border-neon-purple/50">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-neon-purple/10 text-neon-purple px-2 py-1 rounded text-xs font-mono">
                                        npm i {pkg.name}
                                    </div>
                                    <span className="text-gray-500 text-xs">{pkg.version}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                                    {pkg.name}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {pkg.desc}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <span className="text-neon-purple">⬇</span> {pkg.downloads}
                                </div>
                                <a href={pkg.url} target="_blank" rel="noopener noreferrer" className="text-neon-cyan text-sm hover:underline">
                                    View Package &rarr;
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PackageRegistry;
