import React from "react";
import './Components.css';


import friendship from '../../assets/imageapi/friendship.png';
import Odds from '../../assets/imageapi/Odds.svg';

import OddsTab from "../../pages/components/OddsTab";

function OddShow() {


    return (

        <>

<div className="league-main-container">
                        <div className="league-main-row">
                            <div className="league-center-title">
                                <div className="imageflex">
                                    <img src={Odds} alt="England" width="66" height="66" className="league-imageflex" />
                                    <h4 className="league-heading-sub">Odds </h4>
                                </div>

                                <div className="odds-container">

                                 
                                   <OddsTab/>
                                </div>


                            </div>

                         
                        </div>

                    </div>


           
        </>


    );

}

export default OddShow;