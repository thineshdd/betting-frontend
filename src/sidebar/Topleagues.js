import React, { useState, useEffect } from "react";
import '../index.css';
import { useParams, Link } from 'react-router-dom';


function Topleagues() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://bettingpremier.ewallhost.com/api/sports/football/country/us/league')
    //         .then(response => response.json())
    //         .then(json => {

    //             const sortedData = json.sort((a, b) => new Date(b.date) - new Date(a.date)); 
    //             setData(sortedData);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        <>
            <div className="match">
                <div className="match-header match-header-bg">
                    <div className="match-tournament">Top leagues</div>
                </div>
                <div className="match-content">
                    <div className="Top-leagues-list">
                        <ul>
                              <li className="list-leagues-item">
                                    <img src="/bet-assets/site/image/football/league/ligue-1-6700df567780c767.png" alt="France" className="leagues-icon"/>
                                    <Link to="/football/leaguelist/17">    <span className="list-leagues"> Ligue 1 </span> </Link>
                               
                                </li>
                                <li className="list-leagues-item">
                                    <img src="/bet-assets/site/image/football/league/serie-a-6700e7c2ec98a866.png" alt="France" className="leagues-icon"/>
                                    <Link to="/football/leaguelist/75">    <span className="list-leagues"> Serie A </span> </Link>
                               
                                </li>
                                <li className="list-leagues-item">
                                    <img src="/bet-assets/site/image/football/league/bundesliga-6700e838dcbfe410.png" alt="France" className="leagues-icon"/>
                                    <Link to="/football/leaguelist/41">    <span className="list-leagues"> Bundesliga </span> </Link>
                               
                                </li>
                                <li className="list-leagues-item">
                                    <img src="/bet-assets/site/image/football/league/la-liga-6700ea36273d0519.png" alt="France" className="leagues-icon"/>
                                    <Link to="/football/leaguelist/104">    <span className="list-leagues"> La Liga </span> </Link>
                               
                                </li>

                            {/* {data.map((item) => (
                                <li className="list-leagues-item" key={item.id}>
                                    <img src={item.image} width="24" height="24" className="sidebar-img" alt="league-logo" />
                                    <span className="list-leagues"> {item.display_name} </span>
                               
                                </li>
                            ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topleagues;