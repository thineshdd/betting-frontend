import React from "react";
import './Components.css';

import matchinfo from '../../assets/imageapi/matchinfo.png';

function Lineups() {

    return (

        <>

            <div className="lineups-container">
                <div className="lineups-container-row">
                    <div className="lineups-container-images">
                        <img src={matchinfo} alt="England" className="league-lineups" />
                    </div>
                    <div className="lineups-container-players">

                        <div className="lineups-playerslist">
                            <div className="lineups-players-data-title">
                                <h4>LIVEPOOL</h4>
                                <img  src="https://api.sofascore.app/api/v1/unique-tournament/17015/image" width="24" height="24" alt="England" className="lineups-imageflex" />
                            </div>
                            <div className="lineups-players-data-list">
                                <div className="lineups-players-coach  coachbg">
                                    <h4 className="lineups-sub">COACH</h4>
                                </div>
                                <div className="lineups-players-coach-name">
                                    3.Thijmen Blokzijl
                                </div>

                            </div>
                            <div className="lineups-players-data-list">
                                <div className="lineups-players-coach coachbg">
                                    <h4 className="lineups-sub">Players</h4>
                                </div>
                                <div className="lineups-players-coach-name">
                                    3.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    4.Marco Rente
                                </div>
                                <div className="lineups-players-coach-name">
                                    6.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    7. Leandro Bacuna
                                </div>

                            </div>
                            <div className="lineups-players-data-list">
                                <div className="lineups-players-coach coachbg">
                                    <h4 className="lineups-sub">SUBSTITUTES</h4>
                                </div>
                                <div className="lineups-players-coach-name">
                                    3.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    4.Marco Rente
                                </div>
                                <div className="lineups-players-coach-name">
                                    6.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    7. Leandro Bacuna
                                </div>

                            </div>

                        </div>
                        <div className="lineups-playerslist">
                            <div className="lineups-players-data-title">
                                <h4>LIVEPOOL</h4>
                                <img  src="https://api.sofascore.app/api/v1/unique-tournament/17015/image" width="24" height="24" alt="England" className="lineups-imageflex" />
                            </div>
                            <div className="lineups-players-data-list">
                                <div className="lineups-players-coach  coachbg">
                                    <h4 className="lineups-sub">COACH</h4>
                                </div>
                                <div className="lineups-players-coach-name">
                                    3.Thijmen Blokzijl
                                </div>

                            </div>
                            <div className="lineups-players-data-list">
                                <div className="lineups-players-coach coachbg">
                                    <h4 className="lineups-sub">Players</h4>
                                </div>
                                <div className="lineups-players-coach-name">
                                    3.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    4.Marco Rente
                                </div>
                                <div className="lineups-players-coach-name">
                                    6.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    7. Leandro Bacuna
                                </div>

                            </div>
                            <div className="lineups-players-data-list">
                                <div className="lineups-players-coach coachbg">
                                    <h4 className="lineups-sub">SUBSTITUTES</h4>
                                </div>
                                <div className="lineups-players-coach-name">
                                    3.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    4.Marco Rente
                                </div>
                                <div className="lineups-players-coach-name">
                                    6.Thijmen Blokzijl
                                </div>
                                <div className="lineups-players-coach-name">
                                    7. Leandro Bacuna
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Lineups;