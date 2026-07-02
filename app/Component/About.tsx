'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedWords({ text, className }: { text: string; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const words = text.split(' ');

    return (
        <p ref={ref} className={className}>
            {words.map((word, i) => {
                const isHighlight = word.toLowerCase().includes('development') || word.toLowerCase().includes('applications') || word.toLowerCase().includes('webstudio');
                return (
                    <span key={i} className="inline-block">
                        <motion.span
                            className={`inline-block ${isHighlight ? 'text-[#b8ff57]' : ''}`}
                            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { filter: 'blur(0px)', opacity: 1, y: 0 }
                                    : { filter: 'blur(10px)', opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                        >
                            {word}
                        </motion.span>
                        {i < words.length - 1 && <span>&nbsp;</span>}
                    </span>
                );
            })}
        </p>
    );
}

import AnimatedBeamDefault from './AnimatedBeamDefault';

export default function AboutSection() {
    return (
        <>
            <style>{`
                .about-section {
                    position: relative;
                    min-height: 60vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-bottom: 60px;
                    padding-top: 60px;
                    z-index: 10;
                }
                .about-content {
                    padding: 0 44px;
                    width: 100%;
                    max-width: 1100px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }
                .about-text {
                    max-width: 800px;
                    flex: 1;
                }
                .about-visual {
                    flex: 1;
                    width: 100%;
                    max-width: 500px;
                }
                @media (min-width: 1024px) {
                    .about-content {
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                }
                @media (max-width: 1024px) {
                    .about-content {
                        padding: 0 30px;
                        gap: 36px;
                    }
                    .about-text {
                        max-width: 100%;
                    }
                    .about-visual {
                        max-width: 100%;
                    }
                }
                @media (max-width: 768px) {
                    .about-section {
                        min-height: auto;
                        padding-top: 40px;
                        padding-bottom: 40px;
                    }
                    .about-content {
                        padding: 0 20px;
                        gap: 32px;
                    }
                }
                @media (max-width: 480px) {
                    .about-section {
                        padding-top: 30px;
                        padding-bottom: 30px;
                    }
                    .about-content {
                        padding: 0 16px;
                        gap: 24px;
                    }
                }
            `}</style>
            <section className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <span className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-6 block">
                            About Us
                        </span>

                        <AnimatedWords
                            text="We are WebStudio a web design and development studio building fast, modern websites and web applications for businesses, startups, and creators."
                            className="text-3xl md:text-5xl font-semibold text-white leading-tight"
                        />

                        <div className="h-10" />

                        <AnimatedWords
                            text="We don't just design pretty pages; we build products that actually work — from idea to deployment."
                            className="text-xl md:text-2xl font-medium text-gray-400 leading-snug"
                        />
                    </div>
                    <div className="about-visual">
                        <AnimatedBeamDefault />
                    </div>
                </div>
            </section>
        </>
    );
}