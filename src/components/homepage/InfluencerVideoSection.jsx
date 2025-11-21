"use client";
import React from "react";
import { motion } from "framer-motion";

export default function InfluencerVideoSection() {
    return (
        <section className="w-full py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

                {/* ================= VIDEO SECTION ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.2)] transition-all duration-500">
                        <video
                            src="https://res.cloudinary.com/dnnxal66k/video/upload/f_auto,q_auto/v1763697187/optixinfo_c30nbq.mp4"
                            controls
                            preload="metadata"
                            className="w-full rounded-3xl"
                        />
                    </div>
                </motion.div>

                {/* ================= TEXT SECTION ================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
                    >
                        {/* AI Influencer Video Showcase */}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.35 }}
                        className="text-[18px] text-gray-700 leading-[1.9] tracking-wide bg-white/60 p-6 rounded-2xl shadow-sm border border-gray-200"
                    >
                        At OptixDigitalAI, we specialize in crafting high-performance digital
                        experiences through modern website development, mobile app development,
                        premium UI/UX design, social media marketing, and powerful Meta & Google Ads
                        campaigns. Alongside these services, our AI-driven influencer video system
                        helps brands create smooth, engaging, and human-like content optimized for
                        performance.
                   
                       
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
