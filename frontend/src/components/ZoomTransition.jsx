import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const ZoomTransition = ({ onComplete }) => {
  const [zoomStarted, setZoomStarted] = useState(false);

  useEffect(() => {
    // Start zoom immediately
    setZoomStarted(true);
    
    // Complete zoom after 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="zoom-transition">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 5]}
          fov={75}
        />
        
        {/* Ambient light */}
        <ambientLight intensity={0.6} />
        
        {/* Directional light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Golden center sphere that expands */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[zoomStarted ? 50 : 0.1, 32, 32]} />
          <meshStandardMaterial 
            color="#FFD700"
            emissive="#FFA500"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        <OrbitControls enabled={false} />
      </Canvas>
      
      <style jsx>{`
        .zoom-transition {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 2000;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          transition: all 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ZoomTransition;