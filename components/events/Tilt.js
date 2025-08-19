"use client";
import React, { useState } from 'react';

/**
 * Tilt component for creating 3D hover effects
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to apply tilt effect to
 * @param {string} props.className - Additional CSS classes
 */
const Tilt = ({ children, className }) => {
  const [tiltStyles, setTiltStyles] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const boundingRect = card.getBoundingClientRect();
    const cardCenterX = boundingRect.left + boundingRect.width / 2;
    const cardCenterY = boundingRect.top + boundingRect.height / 2;
    const x = e.clientX - cardCenterX;
    const y = e.clientY - cardCenterY;
    const rotateX = y / 15 * -1;
    const rotateY = x / 15;

    setTiltStyles({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyles({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    });
  };

  return (
    <div 
      className={`relative will-change-transform ${className}`}
      style={{ 
        ...tiltStyles,
        transition: '0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Tilt;
