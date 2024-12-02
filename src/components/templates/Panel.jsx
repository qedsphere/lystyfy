import React from 'react';
import './Panel.css';

const Panel = ({ children, backgroundColor, borderRadius, flexWidth }) => {
  
    let  panelStyle = {
        backgroundColor: backgroundColor, 
        borderRadius: borderRadius, 
        flex : flexWidth,
    };
  return (
    <div className="panel-container" style={panelStyle}>
      {children}
    </div>
  );
};

export default Panel;
