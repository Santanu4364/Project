import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import AshokaChakra from './AshokaChakra';

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const sentenceAnimation = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const Hero = () => {
    const title = "Happy Birthday";
    const subtitle = "THE LADY SINGHAM";

    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>

            {/* Moving Ashoka Chakra Background */}
            <div className="chakra-bg">
                <AshokaChakra size={600} opacity={0.15} />
            </div>

            {/* Background Glow Effect */}
            <motion.div
                className="hero-glow"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    variants={sentenceAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {title.split("").map((char, index) => (
                        <motion.span key={index} variants={letterAnimation}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="subtitle-decoration">✦</span> {subtitle} <span className="subtitle-decoration">✦</span>
                </motion.h2>

                <motion.div
                    className="hero-quote-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <div className="quote-line"></div>
                    <p className="hero-quote">
                        "The distance between dreams and reality is called discipline."
                    </p>
                    <div className="quote-line"></div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="scroll-indicator"
            >
                <span>Begin the Journey</span>
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
