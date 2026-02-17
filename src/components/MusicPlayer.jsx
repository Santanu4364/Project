import React, { useState, useRef } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player-container">
            <audio ref={audioRef} loop>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            </audio>

            <motion.button
                onClick={togglePlay}
                className="music-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span className="music-label">{isPlaying ? "Pause" : "Play BGM"}</span>
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
