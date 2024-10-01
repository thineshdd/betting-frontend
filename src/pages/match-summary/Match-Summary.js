import React from "react";
import { Helmet } from 'react-helmet';


// import FeatureMatch from "../../sidebar/FeaturedMatch";
import Topleagues from "../../sidebar/Topleagues";
import Alleagues from "../../sidebar/Alleagues";
import Add from "../../sidebar/Add";
import RecentBlog from "../../sidebar/RecentBlog";


import MatchBanner from "../../pages/components/MatchBanner";
// import Matchstandings from "../../pages/components/Matchstandings";
// import MatchInfo from "../../pages/components/MatchInfo";
// import Wintask from "../../pages/components/Wintask";
// import OddShow from "../../pages/components/OddShow";


function MatchSummary() {


    return (

        <>

            <Helmet>
                <title>Match summary Page - My React App</title>
                <meta name="description" content="This is the home page of my React application, where you can find the latest updates and news." />
            </Helmet>

            <div className="mvp-main-box-cont" id="more-blog-section">
                <div className="main-box-container">
                    <div className="container-score">

                        <div className="column-score large">
                            <MatchBanner />
                            {/* <Matchstandings /> */}
                            {/* <Wintask />
                            <OddShow />
                            <MatchInfo /> */}

                        </div>

                        <div className="column-score small">

                            <div className="container-slide">
                                {/* <FeatureMatch /> */}
                                <Topleagues />
                                <Add />
                                <Alleagues />
                                <RecentBlog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default MatchSummary;