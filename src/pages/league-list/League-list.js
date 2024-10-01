import React from "react";
import { Helmet } from 'react-helmet';


// import FeatureMatch from "../../sidebar/FeaturedMatch";
import Topleagues from "../../sidebar/Topleagues";
import Alleagues from "../../sidebar/Alleagues";
import Add from "../../sidebar/Add";
import RecentBlog from "../../sidebar/RecentBlog";


import Leaguebanner from "../../pages/components/Leaguebanner";
import Matches from "../../pages/components/Matches";
// import Leagueinfo from "../../pages/components/Leagueinfo";
import LeagueStanded from "../../pages/components/LeagueStanded";

function Leaguelist() {


    return (

        <>

            <Helmet>
                <title>Leaguelist Page</title>
                <meta name="description" content="This is the home page of my React application, where you can find the latest updates and news." />
            </Helmet>

            <div className="mvp-main-box-cont" id="more-blog-section">

            <div className="main-box-container">
                <div className="container-score">

                    <div className="column-score large">
                       <Leaguebanner/>
                       <LeagueStanded/>
                       <Matches/>
                       {/* <Leagueinfo/> */}
                       
                    </div>

                    <div className="column-score small">

                        <div className="container-slide">
                            {/* <FeatureMatch /> */}
                            <Topleagues />
                            <Add/>
                            <Alleagues/>
                            <RecentBlog/>
                        </div>
                    </div>
                </div>
                </div>

            </div>



        </>
    );
}

export default Leaguelist;