import React from "react";
import './Fotter.css';

import { Link } from 'react-router-dom';
import footerBg from '../../assets/footer-bg.png';
import bettinglogo from '../../assets/logo.svg';
import fotterbrand from '../../assets/fotterbrand.png';

function Fotter() {

    return (

        <>
            <footer id="mvp-foot-wrap" className="footer-container" style={{
                backgroundImage: `linear-gradient(#edf1f6, #f4f4f4db), url(${footerBg})`
            }}>

                <div className="mvp-main-box-cont footer-row">
                    <div id="mvp-foot-logo" className="left relative">
                        <a href=""><img src={bettinglogo} alt="Sports Betting News | Betting Stream" /></a>
                    </div>

                </div>
                <div id="mvp-foot-menu-wrap" className="foot-left">
                    <div className="mvp-main-box-cont">
                        <div id="mvp-foot-menu" className="footerleft">


                            <ul id="menu-menu-footer1" className="menu">
                                <li className="menu-item menu-item-type-custom ">  <Link to="/">Latest </Link></li>
                                <li className="menu-item">  <Link to="/"> Stream Schedule  </Link></li>
                                <li className="menu-item">  <Link to="/">Football </Link></li>
                                <li className="menu-item">  <Link to="/"> Basketball </Link></li>
                                <li className="menu-item">  <Link to="/">Ice Hockey </Link></li>
                                <li className="menu-item ">  <Link to="/">AM- Football  </Link></li>

                            </ul>

                        </div>
                    </div>
                </div>

                <div id="mvp-foot-copy-wrap" className="left-last">
                    <div className="mvp-main-box-cont">


                        <div className="bet-footer">
                            <div className="s-bet-footer">
                                <span className="bet-footer__left bet-footer__copyrights">Copyright © 2024 BettingPremier.</span>

                            </div>
                            <div className="bet-footer__right">
                                <span className="bet-footer__right-line">18+ Only. Please gamble responsibly!
                                    <img className="footer-brand-logo" src={fotterbrand} />
                                    <img className="footer-brand-logo" src={fotterbrand} />
                                </span>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>



        </>
    );
}

export default Fotter;