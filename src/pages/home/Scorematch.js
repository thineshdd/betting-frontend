import React from "react";
import '../../index.css';
import { Link } from 'react-router-dom'; // Import Link for routing if necessary
import leaguelogo from '../../assets/imageapi/1.png';
import matchlogo from '../../assets/imageapi/2.png';
import leftarrow from '../../assets/imageapi/leftarrow.png';
import leaguelogo1 from '../../assets/imageapi/3.png';
import leaguelogo2 from '../../assets/imageapi/4.png';
function Scorematch() {

    return (

        <>
            <div className="league-section-main">

                <div className="league-section-row">

                    <div className="header-bg-slide">
                        <div className="header-flex">
                            <div className="league-img">
                                <img src={leaguelogo1} className="rounded-image" />
                            </div>

                            <div>
                                <span className="country-name"> Africa </span>
                                <h3 className="text-slide">
                                    <Link to='/football/leaguelist'> CAF Champions League, Qualification</Link>
                                </h3>
                            </div>

                        </div>
                    </div>



                    <div className="league-container">

                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    <Link to='/football/match-summary'>Atl. Madrid  </Link>   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  <Link to='/football/match-summary'>Atl. Madrid  </Link>  </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            {/* <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div> */}
                        </div>



                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            {/* <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div> */}
                        </div>




                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            {/* <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div> */}
                        </div>


                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>



                    </div>


                </div>

                {/* seecond row */}


                <div className="league-section-row">

                    <div className="header-bg-slide">
                        <div className="header-flex">
                            <div className="league-img">
                                <img src={leaguelogo2} className="rounded-image" />
                            </div>

                            <div>
                                <span className="country-name"> Portugal </span>
                                <h3 className="text-slide">
                                    Liga Portugal Betclic
                                </h3>
                            </div>

                        </div>
                    </div>



                    <div className="league-container">

                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>



                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>




                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>


                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>



                    </div>


                </div>

                {/* third row */}

                <div className="league-section-row">

                    <div className="header-bg-slide">
                        <div className="header-flex">
                            <div className="league-img">
                                <img src={leaguelogo1} className="rounded-image" />
                            </div>

                            <div>
                                <span className="country-name"> Brazil </span>
                                <h3 className="text-slide">
                                    Brasileirão Série A
                                </h3>
                            </div>

                        </div>
                    </div>



                    <div className="league-container">

                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    9:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>



                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>




                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>


                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>



                    </div>


                </div>


                {/* forth roe */}


                <div className="league-section-row">

                    <div className="header-bg-slide">
                        <div className="header-flex">
                            <div className="league-img">
                                <img src={leaguelogo} className="rounded-image" />
                            </div>

                            <div>
                                <span className="country-name"> Africa </span>
                                <h3 className="text-slide">
                                    CAF Champions League, Qualification
                                </h3>
                            </div>

                        </div>
                    </div>



                    <div className="league-container">

                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>



                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>




                        <div className="league-rows">
                            <div className="league-rows-iteam-match1">
                                <div className="league-rows-iteam-time">
                                    19:00
                                </div>
                            </div>
                            <div className="league-rows-iteam-match">
                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>    Atl. Madrid   </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                                <div className="league-match-data">
                                    <div className="league-match-img">

                                        <img src={matchlogo} style={{ width: '20px', height: 'auto' }} />
                                        <span>  Odisha FC </span>
                                    </div>

                                    <div className="league-match-score">
                                        1
                                    </div>
                                </div>

                            </div>
                            <div className="league-rows-iteam-bet">
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                                <span className="button-span">2.18 <img className="bet-arrow" src={leftarrow} style={{ width: '10px', height: 'auto' }} /> </span>
                            </div>
                        </div>






                    </div>


                </div>

            </div>

        </>

    );

}

export default Scorematch;