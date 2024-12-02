import React, { useState, useRef, useEffect } from 'react';
import SearchMenu from "./SearchMenu";
import Panel from "../../templates/Panel";
import PlaylistPanel from './PlaylistPanel';

function Home() {
  const [leftPanelFlex, setLeftPanelFlex] = useState(3); 
  const [rightPanelFlex, setRightPanelFlex] = useState(6); 
  const [isDragging, setIsDragging] = useState(false); 
  const dividerRef = useRef(null); 
  const containerRef = useRef(null); 
  const leftPanelRef = useRef(null); 
  const rightPanelRef = useRef(null); 

  const handleMouseDown = (e) => {
    setIsDragging(true);

    if (dividerRef.current) {
      dividerRef.current.style.opacity = 0.3; // Set opacity to 50% when dragging
    }
  };



  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const newDividerPosition = e.clientX - containerRect.left;

    const totalWidth = containerRect.width;
    const leftFlex = (newDividerPosition / totalWidth) * 12; 
    const rightFlex = 12 - leftFlex - 0.03; 

    setLeftPanelFlex(Math.max(leftFlex, 0.5));
    setRightPanelFlex(Math.max(rightFlex, 0.5));

    dividerRef.current.style.left = `${newDividerPosition}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Reset the divider's opacity when dragging ends
    if (dividerRef.current) {
      dividerRef.current.style.opacity = 1; // Set opacity back to 100% when dragging ends
    }
  };

  // Attach global mouse move and up handlers during dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Calculate the initial position of the divider based on the widths of the panels and their margins
  useEffect(() => {
    const leftPanelRect = leftPanelRef.current.getBoundingClientRect();
    const rightPanelRect = rightPanelRef.current.getBoundingClientRect();

    // Calculate the initial position of the divider based on the left panel's width
    const initialDividerPosition =
      leftPanelRect.width + leftPanelRect.left - containerRef.current.getBoundingClientRect().left;

    dividerRef.current.style.left = `${initialDividerPosition}px`;

    const totalWidth = leftPanelRect.width + rightPanelRect.width;
    const leftPanelFlexCalculated = (leftPanelRect.width / totalWidth) * 12;
    const rightPanelFlexCalculated = 12 - leftPanelFlexCalculated - 0.03;

    setLeftPanelFlex(leftPanelFlexCalculated);
    setRightPanelFlex(rightPanelFlexCalculated);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        position: 'relative', // Ensure divider is positioned correctly within the container
      }}
    >
      {/* Left Panel */}
      <div ref={leftPanelRef} style={{ flex: leftPanelFlex, transition: 'flex 0.1s' }}>
        <Panel backgroundColor="#89928A" borderRadius="20px">
          <SearchMenu />
        </Panel>
      </div>

      {/* Resizable Divider */}
      <div
        ref={dividerRef}
        style={{
          position: 'absolute',
          cursor: 'col-resize',
          backgroundColor: '#FFFFFF',
          width: '5px',
          height: '100%',
          zIndex: 1,
          opacity: 1, // Default opacity (fully opaque)
          transition: 'opacity 0.1s ease', // Smooth transition for opacity change
        }}
        onMouseDown={handleMouseDown}
      ></div>

      {/* Right Panel */}
      <div ref={rightPanelRef} style={{ flex: rightPanelFlex, transition: 'flex 0.1s' }}>
        <Panel backgroundColor="#D3ECC0" borderRadius="20px">
          <PlaylistPanel />
        </Panel>
      </div>
    </div>
  );
}

export default Home;
