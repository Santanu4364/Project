import React from 'react';
import { motion } from 'framer-motion';

const AshokaChakra = ({ size = 300, color = "#fbbf24", opacity = 0.1 }) => {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ opacity: opacity }}
        >
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill={color} />
            {[...Array(24)].map((_, i) => (
                <line
                    key={i}
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="2"
                    stroke={color}
                    strokeWidth="0.5"
                    transform={`rotate(${i * 15} 12 12)`}
                />
            ))}
        </motion.svg>
    );
};

export default AshokaChakra;
