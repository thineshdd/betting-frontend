import React from "react";
import { Helmet } from 'react-helmet';

import LatestBlog from "../../post/blog/LatestBlog";

function AboutUs() {


    return (

        <>

            <Helmet>
                <title>About us Page </title>
                <meta name="description" content="This is the home page of my React application, where you can find the latest updates and news." />
            </Helmet>

            <div className="mvp-main-box-cont" id="more-blog-section">
                <div className="container-betting-tools">

                <div className="container-score">

                    <div className="column-score large">

                        <div className="content-container">


                            <div className="container-schedeule">

                                <div className="main-schedule">
                                    <div className="main-schedule-title">
                                        <h1 className="blog-heading">About us</h1>
                                    </div>
                                    <div className="main-schedule-content">
                                        <p className="para-about">

                                        Betting Premier is a wagers den with an avant-garde approach to betting. We display the odds for latest games in each sport. In addition, get a quick analysis along with betting tips and predictions for major leagues like, EPL, Champions League, Bundesliga, NBA, NFL, Serie A, and La Liga.
                                          </p>
                                        <p className="para-about">
                                        Betting Premier is a wagers den with an avant-garde approach to betting. We display the odds for latest games in each sport. In addition, get a quick analysis along with betting tips and predictions for major leagues like, EPL, Champions League, Bundesliga, NBA, NFL, Serie A and La Liga.
                                        </p>
                                    </div>
                                </div>

                            
                            </div>
                        </div>

                    </div>

                    <div className="column-score small">

                        <div className="container-slide-main">
                            <div className="container-slide">


                                <LatestBlog />

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            </div>


        </>
    );
}

export default AboutUs;
