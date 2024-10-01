import React from "react";
import './Components.css';
import friendship from '../../assets/imageapi/friendship.png';

import MatchTab from './MatchTab';


function MatchInfo() {


    return (

        <>

            <div className="league-main-container">

                <div className="league-main-row">
                    <div className="league-center-title">
                        <div className="imageflex">
                            <img src={friendship} alt="England" width="36" height="36" className="league-imageflex" />
                            <h4 className="league-heading-sub">Match Info </h4>
                        </div>

                        <div>

                            <MatchTab/>
                           
                        </div>


                    </div>


                </div>


            </div>

        </>


    );

}

export default MatchInfo;