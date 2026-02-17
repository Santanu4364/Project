import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Celebration = () => {
    return (
        <section className="celebration-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="celebration-card"
            >
                <motion.div
                    className="ashoka-emblem-container"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src="/birthday-wisher/assets/lbsnaa.png" alt="Emblem" className="emblem-img" />
                </motion.div>

                <h1 className="celebration-title">Happy Birthday</h1>
                <h2 className="celebration-subtitle">Future IPS Officer</h2>

                <div className="celebration-divider">
                    <Star size={12} color="#ffd700" fill="#ffd700" />
                    <div className="line"></div>
                    <Star size={12} color="#ffd700" fill="#ffd700" />
                </div>

                <div className="celebration-message">
                    <p>
                        To the one who studies while the world sleeps,<br />
                        May your determination shine brighter than any candle.
                    </p>
                    <p className="highlight-text">
                        Your journey from <strong>Delhi</strong> to <strong>LBSNAA</strong><br />
                        is written in the stars.
                    </p>
                </div>

                <div className="quote-container">
                    <p className="final-quote">
                        "Success is not final, failure is not fatal:<br />
                        it is the courage to continue that counts."
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Celebration;
