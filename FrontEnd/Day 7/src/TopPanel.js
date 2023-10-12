// TopPanel.js
import React from 'react';

const TopPanel = ({ toggleSidePanel }) => {
  return (
    <div className="top-panel">
      <div className="left-section">
        <div className="toggle-button" onClick={toggleSidePanel}>
          &lt;{/* Add your toggle icon or text here */}
        </div>
      </div>
      <div className="right-section">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default TopPanel;
