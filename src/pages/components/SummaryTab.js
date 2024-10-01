import React, { useState } from 'react';

import './Components.css';
import  { StandardTableOne } from "./StandardTable";



  const SummaryTAb = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { label: 'ALL', content: <StandardTableOne />},
      { label: 'HOME', content: 'data'},
     
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
  };
  
  export default SummaryTAb;


