import React from "react";
import { Helmet } from 'react-helmet';


import FeatureMatch from "../../sidebar/FeaturedMatch";
import Topleagues from "../../sidebar/Topleagues";
import Alleagues from "../../sidebar/Alleagues";
import Add from "../../sidebar/Add";
import RecentBlog from "../../sidebar/RecentBlog";

import Scorematch from "../../pages/home/Scorematch";


function BasketBall() {


    return (

        <>

            <Helmet>
                <title>BasketBall </title>
                <meta name="description" content="This is the home page of my React application, where you can find the latest updates and news." />
            </Helmet>

            <div className="mvp-main-box-cont" id="more-blog-section">

            <div className="main-box-container">
                <div className="container-score">

                    <div className="column-score large">
                      
                       <Scorematch/>
                    </div>

                    <div className="column-score small">

                        <div className="container-slide">
                            <FeatureMatch />
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

export default BasketBall;