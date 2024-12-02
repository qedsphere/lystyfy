import React from 'react';
import './Panel.css';

const Panel = ({
  children,
  backgroundColor = 'FFFFFF', 
  borderRadius = '5px', 
  flexWidth = '1', 
  leftMargin = '10px', 
  rightMargin = '10px', 
  topMargin = '20px', 
  bottomMargin = '20px', 
  justifyContent = 'center',
  height = "100%",
  alignItems="",
}) => {
  
  const panelStyle = {
    backgroundColor,
    borderRadius,
    flex: flexWidth,
    marginLeft: leftMargin,
    marginRight: rightMargin,
    marginTop: topMargin,
    marginBottom: bottomMargin,
    justifyContent: justifyContent,
    height: height,
    alignItems: alignItems
  };

  return (
    <div className="panel-container" style={panelStyle}>
      {children}
    </div>
  );
};

export default Panel;
