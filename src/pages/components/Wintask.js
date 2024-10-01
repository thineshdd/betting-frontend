import React from "react";
import './Components.css';

function Wintask(){

    return(
        <>
        
        <div className="league-main-container">
                        <div className="league-main-row">
                           
                            <div className="totalwin-score">
                                <h4 className="league-heading-sub">Who Will Win? </h4>
                                <div className="totalvotes"> Total votes: 1593</div>
                            </div>

                            <div className="win-score-row">
                                <div className="win-score-row-list orange" style={{width:'60%'}}> 60% </div>
                                <div className="win-score-row-list black" style={{width:'40%'}}> 40% </div>

                            </div>

                        </div>
                    </div>
        </>
    );
}

export default Wintask;