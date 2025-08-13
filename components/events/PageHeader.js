"use client";
import React from 'react';

/**
 * PageHeader component with layered text effect
 */
const PageHeader = () => {
  return (
    <header style={{width: '100%', height: '200px', backgroundColor: 'transparent', background: 'none'}}>
      <div className="flex flex-col justify-left gap-2 relative left-[5%] top-[35%]">
        <span className="relative inline-block " style={{fontFamily: 'Lobster, cursive', fontSize: 'clamp(20px, 6.5vw, 70px)', lineHeight: '1', whiteSpace: 'nowrap', display: 'inline-block'}}>
          <span style={{fontFamily: 'Lobster, cursive', fontSize: 'clamp(20px, 6.5vw, 70px)', lineHeight: '1', whiteSpace: 'nowrap', display: 'inline-block', color: '#1F6789', position: 'absolute', top: '0px', left: '0px', zIndex: '5', textShadow: '0 0 1px rgba(0,0,0,0.1)'}}>EVENTS</span>
          <span style={{fontFamily: 'Lobster, cursive', fontSize: 'clamp(20px, 6.5vw, 70px)', lineHeight: '1', whiteSpace: 'nowrap', display: 'inline-block', color: '#18315A', position: 'absolute', top: '1px', left: '2px', zIndex: '4', textShadow: '0 0 1px rgba(0,0,0,0.1)'}}>EVENTS</span>
          <span style={{fontFamily: 'Lobster, cursive', fontSize: 'clamp(20px, 6.5vw, 70px)', lineHeight: '1', whiteSpace: 'nowrap', display: 'inline-block', color: '#F68C19', position: 'absolute', top: '2px', left: '4px', zIndex: '3', textShadow: '0 0 1px rgba(0,0,0,0.1)'}}>EVENTS</span>
          <span style={{fontFamily: 'Lobster, cursive', fontSize: 'clamp(20px, 6.5vw, 70px)', lineHeight: '1', whiteSpace: 'nowrap', display: 'inline-block', color: '#5FBEBE', position: 'absolute', top: '3px', left: '6px', zIndex: '2', textShadow: '0 0 1px rgba(0,0,0,0.1)'}}>EVENTS</span>
          <span style={{fontFamily: 'Lobster, cursive', fontSize: 'clamp(20px, 6.5vw, 70px)', lineHeight: '1', whiteSpace: 'nowrap', display: 'inline-block', color: '#FF0000', position: 'absolute', top: '4px', left: '8px', zIndex: '1', textShadow: '0 0 1px rgba(0,0,0,0.1)'}}>EVENTS</span>
          <span style={{fontFamily: 'Lobster, cursive', fontSize: 'clamp(20px, 6.5vw, 70px)', lineHeight: '1', whiteSpace: 'nowrap', display: 'inline-block', opacity: '0'}}>EVENTS</span>
        </span>
      </div>
    </header>
  );
};

export default PageHeader;
