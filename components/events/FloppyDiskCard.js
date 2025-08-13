"use client";
import React from 'react';
import Tilt from './Tilt';

/**
 * FloppyDiskCard component for displaying event information
 * @param {Object} props - Component props
 * @param {Object} props.event - Event object containing event details
 * @param {Function} props.onClick - Callback function when card is clicked
 */
const FloppyDiskCard = ({ event, onClick }) => {
  // Get background color based on department
  const getDepartmentColor = (department) => {
    switch (department) {
      case "Computer Science and Engineering": return "#1D87B8";
      case "Information Technology": return "#5E181C";
      case "Electronics and Communication": return "#2F9F72";
      case "Electrical and Electronics": return "#385EA6";
      case "Mechanical Engineering": return "#55B6CD";
      case "Civil Engineering": return "#D98F48";
      case "Biotechnology": return "#7861A3";
      case "Chemical Engineering": return "#C04A51";
      default: return "#000000";
    }
  };

  return (
    <div className="p-4">
      <Tilt className="relative">
        {/* Floppy Disk Design */}
        <div 
          className="relative w-full aspect-square shadow-xl transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]" 
          onClick={() => onClick(event)}
          style={{ 
            transform: 'translateZ(100px)',
            backgroundColor: getDepartmentColor(event.department),
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          {/* White top area with cutout */}
          <div className="absolute top-0 left-0 w-full h-[20%] bg-white rounded-t-lg flex items-center justify-between px-4">
            <div className="h-full w-[45%] flex items-center">
              <div className="rounded-md w-[50%] h-[70%] bg-transparent border-2 border-gray-300"></div>
            </div>
            <div className="w-[15%] h-[30%] flex justify-end">
              <div className="w-[40%] h-full rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Label area */}
          <div className="absolute top-[25%] left-[10%] w-[80%] h-[70%] bg-[#e3f1e6] bg-opacity-90 rounded-sm flex flex-col justify-between p-4 shadow-sm">
            <div>
              <h3 className="font-mono text-xl font-bold leading-tight text-black">{event.name}</h3>
              <p className="font-mono text-sm mt-2 text-black">{event.department}</p>
            </div>
            <div className="mt-2">
              <p className="font-mono text-xs text-black">Date: {event.date}</p>
            </div>
          </div>

          {/* Bottom label decoration */}
          <div className="absolute bottom-[5%] left-[10%] w-[80%] h-[6%] flex">
            <div className="w-3/4 h-full bg-yellow-600"></div>
            <div className="w-1/4 h-full bg-gray-800"></div>
          </div>

          {/* Square markers at bottom */}
          <div className="absolute bottom-[1%] left-[15%] w-[8%] h-[4%] bg-black"></div>
          <div className="absolute bottom-[1%] right-[15%] w-[8%] h-[4%] bg-black"></div>

          {/* Invente25 Logo */}
          <div className="absolute top-[8%] right-[12%] text-[9px] font-bold text-gray-800">
            Invente'25
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default FloppyDiskCard;
