import React, { useState } from 'react';
import './Components.css';

import Statistics from './Statistics';
import Lineups from './Lineups';

function  MatchTab(){

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Statistics', content: <Statistics/>},
        { label: 'Lineups', content: <Lineups/>},
       
      
      ];

    return(
        <>
        
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
        </>
    );
}

export default MatchTab;