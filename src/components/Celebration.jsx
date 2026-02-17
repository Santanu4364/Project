import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpenText, Landmark, Sparkles } from 'lucide-react';
import AshokaChakra from './AshokaChakra';

const Celebration = () => {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <section className="upsc-finale-section">
      <div className="upsc-finale-glow upsc-finale-glow-top" aria-hidden="true" />
      <div className="upsc-finale-glow upsc-finale-glow-bottom" aria-hidden="true" />

      <motion.article
        className="upsc-finale-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <div className="upsc-finale-tag">
          <Landmark size={16} />
          <span>UPSC Dream</span>
        </div>

        <motion.div
          className="upsc-finale-emblem"
          animate={{ y: [0, -6, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {showFallback ? (
            <AshokaChakra size={86} opacity={0.9} />
          ) : (
            <img
              src="/birthday-wisher/assets/national-emblem-india.png"
              alt="National Emblem of India"
              onError={() => setShowFallback(true)}
            />
          )}
        </motion.div>

        <h1 className="upsc-finale-title">Happy Birthday</h1>
        <h2 className="upsc-finale-subtitle">Future IPS Officer</h2>

        <div className="upsc-finale-divider" aria-hidden="true">
          <Sparkles size={14} />
          <span />
          <BookOpenText size={14} />
          <span />
          <Sparkles size={14} />
        </div>

        <p className="upsc-finale-message">
          To the one who studies while the world sleeps,
          <br />
          May your determination shine brighter than any candle.
        </p>

        <p className="upsc-finale-journey">
          Your journey from <strong>Delhi</strong> to <strong>LBSNAA</strong>
          <br />
          is written in the stars.
        </p>

        <blockquote className="upsc-finale-quote">
          “Success is never the end, failure is never the collapse — what truly matters is the courage to keep moving.”
        </blockquote>
      </motion.article>
    </section>
  );
};

export default Celebration;
