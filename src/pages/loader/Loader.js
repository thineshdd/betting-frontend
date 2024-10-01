// src/components/Loader.js
import React from 'react';
import './Loader.css'; // Import the CSS file containing styles

const Loader = () => {
  return (
    <div className="loading">
      <div className="rs-box">
        <div className="rs-shadow"></div>
        <div className="rs-gravity">
          <div className="rs-ball"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
