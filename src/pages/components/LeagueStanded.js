import React from "react";
import './Components.css';


import leaguebanner from '../../assets/imageapi/leaguebanner.png';
import leagueicon from '../../assets/imageapi/league-icon.png';
import friendship from '../../assets/imageapi/friendship.png';
import standings from '../../assets/imageapi/standing.svg';

// import SummaryTAb from "./SummaryTab";
import ApiStandars from "./ApiStandars";
import RealAPI from "./RealAPI";
function LeagueStanded() {


    return (

        <>

            <div className="league-main-container">
                <div className="league-main-row">
                    <div className="league-center-title">
                        <div className="imageflex">
                            <img src={standings} alt="England" width="36" height="36" className="league-imageflex" />
                            <h4 className="league-heading-sub">Standings </h4>
                        </div>


                    </div>

                    <div className="league-main-tabel">

                        <div className="tabsection-container">
                            {/* <SummaryTAb /> */}
                           <ApiStandars/>
                           <RealAPI/>

                        </div>




                    </div>




                </div>

            </div>


        </>


    );

}

export default LeagueStanded;