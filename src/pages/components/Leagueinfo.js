import React from "react";
import './Components.css';


import friendship from '../../assets/imageapi/friendship.png';

function Leagueinfo() {


    return (

        <>

<div className="league-main-container">
                        <div className="league-main-row">
                            <div className="league-center-title">
                                <div className="imageflex">
                                    <img src={friendship} alt="England" width="36" height="36" className="league-imageflex"/>
                                    <h4 className="league-heading-sub">League info </h4>
                                </div>


                            </div>

                            <div className="league-content-container">
                                <div className="league-content-row">
                                    <div className="league-center-title">
                                        <h4 className="league-heading-sub">Titles </h4>
                                    </div>
                                    <div className="league-box">
                                        <div className="league-box-flex">
                                            <div className="league-box-row">
                                                <img src="https://api.sofascore.app/api/v1/team/2829/image" width="40" height="40" alt="Real Madrid" className="Img jbaYme"/>
                                                <div>Real Madrid </div>
                                                <div>Title holder (15)</div>
                                            </div>
                                            <div className="league-box-row">
                                                <img src="https://api.sofascore.app/api/v1/team/2829/image" width="40" height="40" alt="Real Madrid" className="Img jbaYme"/>
                                                <div>Real Madrid </div>
                                                <div>Title holder (15)</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="league-content-row">
                                    <div className="league-center-title">
                                        <h4 className="league-heading-sub">Facts </h4>
                                    </div>
                                    <div className="league-facts-container">
                                        <div className="league-facts-row">
                                            <div className="league-facts-list"> Goals </div>
                                            <div className="league-facts-list"> 239 </div>
                                        </div>
                                        <div className="league-facts-row">
                                            <div className="league-facts-list"> Average goals </div>
                                            <div className="league-facts-list"> 3.03 </div>
                                        </div>
                                        <div className="league-facts-row">
                                            <div className="league-facts-list"> Number of competitors </div>
                                            <div className="league-facts-list"> 2 </div>
                                        </div>
                                        <div className="league-facts-row">
                                            <div className="league-facts-list"> Red cards </div>
                                            <div className="league-facts-list">0.09</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


           
        </>


    );

}

export default Leagueinfo;