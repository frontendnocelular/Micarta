import React, { useState } from "react";
import "./App.css";
import FlowerAnimation from "./components/FlowerAnimation";
import ZoomTransition from "./components/ZoomTransition";
import LoveLetter from "./components/LoveLetter";

function App() {
  const [currentPhase, setCurrentPhase] = useState('flowers'); // 'flowers', 'zoom', 'letter'

  const handleFlowerComplete = () => {
    setCurrentPhase('zoom');
  };

  const handleZoomComplete = () => {
    setCurrentPhase('letter');
  };

  return (
    <div className="App">
      {currentPhase === 'flowers' && (
        <FlowerAnimation onComplete={handleFlowerComplete} />
      )}
      
      {currentPhase === 'zoom' && (
        <ZoomTransition onComplete={handleZoomComplete} />
      )}
      
      {currentPhase === 'letter' && (
        <LoveLetter />
      )}
    </div>
  );
}

export default App;
