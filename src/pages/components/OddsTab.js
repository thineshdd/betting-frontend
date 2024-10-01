import React, { useState } from 'react';
import './Components.css';



import  { OddsTableOne, OddsTableTwo,OddsTableThree } from "./Oddsdata";

function OddsTab(){

  
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { label: '1X2', content:  <OddsTableOne />},
      { label: 'Over/Under', content: <OddsTableTwo />},
      { label: 'Asian handicap', content:  <OddsTableThree />},
      { label: 'Both teams to score', content:<OddsTableTwo />},
      { label: 'Double chance', content: <OddsTableThree />},
      { label: 'Half Time/Full Time', content:  <OddsTableOne />},
      { label: 'Odd/Even', content: <OddsTableThree />},
    
    ];
  
    return (
      <div className="tabs">
        <div className="tab-buttons">
          {tabs.map((tab, index) => (
          <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
         
          ))}

          
        </div>
        <div className="tab-content">{tabs[activeTab].content}</div>
      </div>
    );
}

export default OddsTab;