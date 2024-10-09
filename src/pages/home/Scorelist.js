import React from "react";

// import FeatureMatch from "../../sidebar/FeaturedMatch";
import Topleagues from "../../sidebar/Topleagues";
import Alleagues from "../../sidebar/Alleagues";
import Add from "../../sidebar/Add";
import LatestBlog from "../../post/blog/LatestBlog";


// import Scorematch from "../../pages/home/Scorematch";
import HomeBlog from "../../pages/home/HomeBlog";
import HomeGame from "../../pages/home/HomeGame";

import Scorematch, { ScorematchC, ScorematchD } from "./Scorematch";
import ScoreLeagueone from "./ScoreLeagueone";
// import AllCountry from "../../sidebar/AllCountry";
function Scorelist() {

    return (

        <>
            <div className="container-scorelist container-betting-tools">
                <div className="container-score">

                    <div className="column-score large">

                               <HomeBlog/>

                               {/* <HomeGame/> */}

                              <Scorematch/>

                              <ScoreLeagueone/>
                              <ScorematchC />
                              <ScorematchD />
 


                    </div>

                    <div className="column-score small">

                        <div className="container-slide">

                            <LatestBlog/>
                            {/* <FeatureMatch /> */}
                            <Topleagues />
                            <Add/>
                            <Alleagues/>

                            {/* <AllCountry/> */}

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Scorelist;