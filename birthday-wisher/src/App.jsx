import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Celebration from './components/Celebration';
import MusicPlayer from './components/MusicPlayer';
import Sakura from './components/Sakura';

function App() {
  return (
    <div className="app-container">
      <Sakura />
      <MusicPlayer />
      <Hero />
      <Timeline />
      <Gallery />
      <Celebration />
    </div>
  );
}

export default App;
