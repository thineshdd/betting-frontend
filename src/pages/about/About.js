import React from "react";
import './About.css';

import { Link } from 'react-router-dom';
import sport from '../../assets/Sports.png';
import bettingconverter from '../../assets/bettingconverter.jpg';
import streamschedule from '../../assets/stream-schedule.jpg';

function About() {


    return (

        <>

            <div className="flex-container-about">
                <div className="flex-about-item">
                    <div className="flex-about-list image-center">
                        <img src={sport} />
                    </div>
                    <div className="flex-about-list">
                        <span className="span-date">About Us</span>
                        <h2 className="about-heading">
                            Why choose you BettingPremier
                        </h2>
                        <p className="para-about">
                            Betting Premier is a wagers den with an avant-garde approach to betting. We display the odds for latest games in each sport. In addition, get a quick analysis along with betting tips and predictions for major leagues like, EPL, Champions League, Bundesliga, NBA, NFL, Serie A, and La Liga.
                        </p>
                        <p className="para-about">
                            Betting Premier is a wagers den with an avant-garde approach to betting. We display the odds for latest games in each sport. In addition, get a quick analysis along with betting tips and predictions for major leagues like, EPL, Champions League, Bundesliga, NBA, NFL, Serie A and La Liga.
                        </p>

                        <Link to='/about-us'> 
                        <button className="betnowbhn">
                            More About <span className="svgspan"> </span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>





            <div className="container-betting-tools">
                <div className="header-bg-slide">
                    <h3 className="text-slide">Our Betting Tools</h3>
                </div>

                <div className="flex-container-card">
                    <div className="flex-about-card">
                        <div className="card-design-offers">
                            <img src={bettingconverter} />
                            <div className="card-design-content">
                                <h5 className="card-title"> Bet365 Schedule </h5>
                                <p className="card-design-para">
                                    A simple Odds Converter tool to convert between Decimal, Fractional, and American odds.
                                </p>
                                <div className="blog-btn"><a className="linkbutton">READ MORE</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-about-card">
                        <div className="card-design-offers">
                            <img src={bettingconverter} />
                            <div className="card-design-content">
                                <h5 className="card-title"> Odds Converter </h5>
                                <p className="card-design-para">
                                    A simple Odds Converter tool to convert between Decimal, Fractional, and American odds.
                                </p>
                                <div className="blog-btn"><a className="linkbutton">READ MORE</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-about-card">
                        <div className="card-design-offers">
                            <img src={streamschedule} />
                            <div className="card-design-content">
                                <h5 className="card-title"> Live Stream Schedule </h5>
                                <p className="card-design-para">
                                    A simple Odds Converter tool to convert between Decimal, Fractional, and American odds.
                                </p>
                                <div className="blog-btn"><a className="linkbutton">READ MORE</a></div>
                            </div>

                        </div>
                    </div>
                    <div className="flex-about-card">
                        <div className="card-design-offers">
                            <img src={bettingconverter} />
                            <div className="card-design-content">
                                <h5 className="card-title"> Odds Converter </h5>
                                <p className="card-design-para">
                                    A simple Odds Converter tool to convert between Decimal, Fractional, and American odds.
                                </p>
                                <div className="blog-btn"><a className="linkbutton">READ MORE</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;