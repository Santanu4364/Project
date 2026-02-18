import React from 'react';
import { motion } from 'framer-motion';
import { Book, Coffee, Sunrise, Star } from 'lucide-react';

const timelineData = [
    {
        year: "Phase 1",
        title: "The Beginning",
        desc: "Every journey starts with a single step. The decision to serve the nation.",
        icon: <Book size={20} color="#1a1a2e" />
    },
    {
        year: "Phase 2",
        title: "The Grind",
        desc: "Endless nights, Sea of Books, and the silence of 4 AM.",
        icon: <Coffee size={20} color="#1a1a2e" />
    },
    {
        year: "Phase 3",
        title: "Resilience",
        desc: "Falling down seven times, standing up eight. Strength in adversity.",
        icon: <Sunrise size={20} color="#1a1a2e" />
    },
    {
        year: "Future",
        title: "The Goal",
        desc: "LBSNAA calling. The dream is closer than it appears.",
        icon: <Star size={20} color="#1a1a2e" />
    }
];

const Timeline = () => {
    return (
        <section className="timeline-section">
            <h2 className="section-title">Your Journey</h2>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="timeline-content">
                            <div className="timeline-year">{item.year}</div>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-desc">{item.desc}</p>
                        </div>
                        <div className="timeline-dot">
                            {item.icon}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
