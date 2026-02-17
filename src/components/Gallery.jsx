import React from 'react';
import { motion } from 'framer-motion';

const memories = [1, 2, 3, 4, 5, 6]; // Placeholders

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h2 className="section-title">Memories</h2>
            <div className="gallery-grid">
                {memories.map((id) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: id * 0.1 }}
                        viewport={{ once: true }}
                        className="gallery-item"
                    >
                        <div className="gallery-placeholder">
                            <span>Memory {id}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            <p className="gallery-note">"No photos live here; the memories of a true friendship were simply too alive to be captured."</p>
        </section>
    );
};

export default Gallery;
