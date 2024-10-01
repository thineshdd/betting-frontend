import React, { useState } from 'react';

import './Components.css';
import  { StandardTableOne, StandardTableTwo } from "./StandardTable";
import MatchSummary from "./MatchSummary";


  const SummaryMatchTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { label: 'Summary', content: <MatchSummary />},
      { label: 'Standings', content: <StandardTableTwo /> },
    
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
  
  export default SummaryMatchTab;


