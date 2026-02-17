import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="hero-content"
            >
                <h1 className="hero-title">Happy Birthday</h1>
                <h2 className="hero-subtitle">Future IAS Officer</h2>

                <p className="hero-quote">
                    "The distance between dreams and reality is called discipline."
                </p>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="scroll-indicator"
            >
                <span>Scroll to Explore</span>
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
