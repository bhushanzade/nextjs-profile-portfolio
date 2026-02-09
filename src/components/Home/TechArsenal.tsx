"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import clsx from "clsx";

const categories = [
    {
        id: "languages",
        name: "LANGUAGES",
        skills: [
            { name: "JavaScript", level: 98, icon: "js" },
            { name: "TypeScript", level: 95, icon: "ts" },
            { name: "Python", level: 85, icon: "py" },
            { name: "Java", level: 80, icon: "java" },
        ]
    },
    {
        id: "frontend",
        name: "FRONTEND_OPS",
        skills: [
            { name: "React", level: 98, icon: "react" },
            { name: "Next.js", level: 96, icon: "nextjs" },
            { name: "Angular", level: 90, icon: "angular" },
            { name: "Tailwind", level: 99, icon: "tailwind" },
            { name: "Three.js", level: 75, icon: "threejs" },
        ]
    },
    {
        id: "backend",
        name: "BACKEND_SYS",
        skills: [
            { name: "Node.js", level: 92, icon: "nodejs" },
            { name: "Express", level: 90, icon: "express" },
            { name: "NestJS", level: 85, icon: "nestjs" },
            { name: "GraphQL", level: 80, icon: "graphql" },
        ]
    },
    {
        id: "db",
        name: "DATA_CORE",
        skills: [
            { name: "MongoDB", level: 90, icon: "mongodb" },
            { name: "PostgreSQL", level: 88, icon: "postgres" },
            { name: "Redis", level: 80, icon: "redis" },
            { name: "Firebase", level: 92, icon: "firebase" },
        ]
    }
];

const TechArsenal = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");

    return (
        <section className="relative z-10 container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent flex-1" />
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center tracking-widest uppercase glow-text">
                    Tech <span className="text-neon-cyan">Arsenal</span>
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent flex-1" />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
                {/* Category Selection (Side Menu) */}
                <div className="w-full lg:w-1/4 flex flex-col gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={clsx(
                                "p-4 text-left border-l-2 transition-all duration-300 font-mono text-sm tracking-wider hover:bg-white/5",
                                activeCategory === cat.id
                                    ? "border-neon-cyan text-neon-cyan bg-white/5 shadow-[inset_10px_0_20px_-10px_rgba(0,243,255,0.2)]"
                                    : "border-gray-800 text-gray-500 hover:text-gray-300"
                            )}
                        >
                            {`// ${cat.name}`}
                        </button>
                    ))}

                    {/* Decorative Filler */}
                    <div className="flex-1 border-l border-gray-800 relative hidden lg:block opacity-30">
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
                    </div>
                </div>

                {/* Skills Grid (Weapon Rack) */}
                <div className="flex-1 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {categories.find(c => c.id === activeCategory)?.skills.map((skill, idx) => (
                                <GlassCard
                                    key={skill.name}
                                    className="p-4 flex items-center gap-4 group cursor-crosshair border-white/5 hover:border-neon-cyan/50 transition-colors"
                                >
                                    <div className="w-12 h-12 relative flex items-center justify-center bg-black/50 rounded-md border border-white/10 group-hover:border-neon-cyan transition-colors">
                                        {/* Skill Icon Placeholder - In real use, use proper SVG/Icon component */}
                                        <img
                                            src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                            alt={skill.name}
                                            className="w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-white font-bold group-hover:text-neon-cyan transition-colors">{skill.name}</h4>
                                            <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* HUD Overlay Decor */}
                    <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/30" />
                    <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-neon-cyan/30" />
                </div>
            </div>
        </section>
    );
};

export default TechArsenal;
