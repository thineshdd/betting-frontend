import React from 'react';
import '../index.css';

function FeatureMatch(){


    return(

        <>

<div className="match">
    <div className="match-header">

        <div className="match-tournament">Featured Match</div>
        <button className="match-bet-place1">Bet Now <span className="svgspan"><svg fill="#000000" width="15px" height="15px" viewBox="0 0 24 24" id="right" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon-svg flat-color">
                    <path id="primary" d="M21.71,11.29l-7-7a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,11.29Z" style={{fill: 'white'}}></path>
                </svg></span></button>
    </div>
    <div className="match-content">

        <div className="column">

            <div className="team team--home">
                <div className="team-logo">
                    <img src="https://assets.codepen.io/285131/whufc.svg" />
                </div>
                <h3 className="team-name">West Ham</h3>
            </div>
        </div>
        <div className="column">
            <div className="match-details">
                <div className="match-date">
                    12 Aug at <strong>19:00</strong>
                </div>
                <div className="match-score">
                    <span className="match-score-number match-score-number--leading">2</span>
                    <span className="match-score-divider">:</span>
                    <span className="match-score-number">0</span>
                </div>



            </div>
        </div>
        <div className="column">
            <div className="team team--away">
                <div className="team-logo">
                    <img src="https://assets.codepen.io/285131/chelsea.svg" />
                </div>
                <h3 className="team-name">Chelsea</h3>
            </div>
        </div>
    </div>
</div>

        
        </>
    );
}

export default  FeatureMatch;