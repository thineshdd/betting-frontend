import React from "react";
import { Helmet } from 'react-helmet';

import LatestBlog from "../../post/blog/LatestBlog";

function Schedule() {


    return (

        <>

            <Helmet>
                <title>Schedule Page </title>
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
                                        <h1 className="blog-heading">Bet365 Live Stream Schedule</h1>
                                    </div>
                                    <div className="main-schedule-content">
                                        <p className="para-about">
                                            Nowadays most online bookmakers have the in-play betting option for major sports events. This provides a unique opportunity for bettors to watch the game and make betting decisions based on how the game moves.
                                        </p>
                                        <p className="para-about">
                                            Apart from live streaming football events, Bet365 also live streams Tennis, Basketball, Ice Hockey, Snooker, and events from other popular sports. In this page, you will find the complete list of Bet365 live streaming schedule.
                                        </p>
                                    </div>
                                </div>

                                <div className="main-schedule">
                                    <div className="main-schedule-title">
                                        <h2 className="blog-heading-two">How to Watch Live Streaming at Bet365?</h2>
                                    </div>
                                    <div className="main-schedule-content">
                                        <p className="para-about">
                                            You need a Bet365 account to watch live broadcasts of sports events. And, if you don’t have one, then the process of creating an account is very easy. Here is the step by step guide:                                </p>
                                        <div className="para-about-contnent">
                                            <ul>
                                                <li className="para-about"> 1.Log in to your Bet365 account. If you don’t have one you can register it. </li>
                                                <li className="para-about">Load some money into your account. You can also transfer money available in the bingo, casino or poker accounts. </li>
                                                <li className="para-about"> On the desktop website, click the live streaming option in the menu to go to the streaming page.</li>
                                                <li className="para-about"> In the streaming page, you will find the list of ongoing live broadcasts. Click on the game you want to watch to get the live stream.</li>
                                            </ul>
                                        </div>
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

export default Schedule;
