import React, { useState, useEffect } from 'react';
import './Components.css';


// import leaguebanner from '../../assets/imageapi/leaguebanner.png';
// import leagueicon from '../../assets/imageapi/league-icon.png';
// import friendship from '../../assets/imageapi/friendship.png';
import standingsimage from '../../assets/imageapi/standing.svg';

// import SummaryTAb from "./SummaryTab";
// import ApiStandars from "./ApiStandars";
// import RealAPI from "./RealAPI";
function LeagueStanded({ selectedSeason }) {

    const [standings, setStandings] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('Eastern Conference'); // Default group

    useEffect(() => {

        if (!selectedSeason) return;


        const Allstandard = `/api/season/${selectedSeason.id}/statics/standings`;
        console.log('Current Allstandard:', Allstandard);
        // Fetch standings data from the API
        fetch(Allstandard, { method: 'POST' })
            .then(response => response.json())
            .then(json => {

                console.log('API Response:', json);
                // Assuming the response structure is similar to your static data
                const apiData = json.data;
                const parsedData = JSON.parse(apiData.data);
                console.log('Parsed Standings Data:', parsedData);
                const allStandings = parsedData[0].league.standings[0].concat(parsedData[0].league.standings[1]); // Combine the standings
                console.log('All Standings:', allStandings);
                setStandings(allStandings);
            })
            .catch(error => console.error('Error fetching standings:', error));
    }, [selectedSeason]);


    const filteredStandings = standings.filter(team => team.group === selectedGroup);


    return (

        <>

            <div className="league-main-container">
                <div className="league-main-row">
                    <div className="league-center-title">
                        <div className="imageflex">
                            <img src={standingsimage} alt="England" width="36" height="36" className="league-imageflex" />
                            <h4 className="league-heading-sub">Standings </h4>
                        </div>


                    </div>

                    <div className="league-main-tabel">

                        <div className="tabsection-container">
                            {/* <SummaryTAb /> */}
                            {/* <ApiStandars/> */}
                            {/* <RealAPI/> */}

                            <div>

                                <div className="standing-btn">

                                    <button onClick={() => setSelectedGroup('Eastern Conference')} className={`standing-button ${selectedGroup === 'Eastern Conference' ? 'active' : ''}`}
                                    >
                                        Eastern Conference
                                    </button>
                                    <button onClick={() => setSelectedGroup('Western Conference')} className={`standing-button ${selectedGroup === 'Western Conference' ? 'active' : ''}`}>
                                        Western Conference
                                    </button>
                                </div>
                                <div className="all-table-data">
                                    <div className="ptable">
                                        <table id="tablefull">
                                            <thead>
                                                <tr className="col">
                                                    <th style={{ width: '2%' }}>#</th>
                                                    <th style={{ width: '58%' }}>Team</th>
                                                    <th>Played</th>
                                                    <th>Win</th>
                                                    <th>Draw</th>
                                                    <th>Lose</th>
                                                    <th>GF</th>
                                                    <th>Points</th>
                                                    <th>Form</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredStandings.map((team, index) => (
                                                    <tr key={index} className="wpos">
                                                        <td>{team.rank}</td>
                                                        <td className="imagtile">
                                                            <img
                                                                className="participant__image"
                                                                loading="lazy"
                                                                alt={team.team.name}
                                                                src={team.team.logo}
                                                                width="15"
                                                            />{' '}
                                                            {team.team.name}
                                                        </td>
                                                        <td>{team.all.played}</td>
                                                        <td>{team.all.win}</td>
                                                        <td>{team.all.draw}</td>
                                                        <td>{team.all.lose}</td>
                                                        <td>{team.goalsDiff}</td>
                                                        <td>{team.points}</td>
                                                        <td>
                                                            <div className="winsection">
                                                                {team.form.split('').map((result, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className={
                                                                            result === 'W' ? 'win' :
                                                                                result === 'L' ? 'lost' :
                                                                                    result === 'D' ? 'draw' : ''
                                                                        }
                                                                    >
                                                                        {result}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="key-tabel">
                                        <div className="key-tabel-title">
                                            key
                                        </div>
                                        <div className="key-tabel-list">
                                            <ol className="tabel-ul">
                                                <li className="tabel-li">Win</li>
                                                <li className="tabel-li">Loss</li>
                                                <li className="tabel-li">Draw</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>




                </div>

            </div>


        </>


    );

}

export default LeagueStanded;