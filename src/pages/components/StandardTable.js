

import React, { useState, useEffect } from 'react';
import './Components.css';

import { StandingAPI } from './apidata/ComponentApi';



function StandardTableOne() {


    const [standings, setStandings] = useState([]);

    useEffect(() => {
      // Process the StandingAPI data
    //   console.log('Full StandingAPI Data:', StandingAPI);
      const standingsData = StandingAPI.flatMap((standingData) => 
        standingData.standings.flatMap((standingsGroup) => 
          standingsGroup.map((teamStanding) => ({
            rank: teamStanding.rank,
            teamName: teamStanding.team.name,
            teamLogo: teamStanding.team.logo,
            played: teamStanding.all.played,   // Correctly accessing 'played' from 'all'
            win: teamStanding.all.win,         // Correctly accessing 'win' from 'all'
            draw: teamStanding.all.draw,       // Correctly accessing 'draw' from 'all'
            lose: teamStanding.all.lose,       // Correctly accessing 'lose' from 'all'
            goalsDiff: teamStanding.goalsDiff,
            points: teamStanding.points,
            form: teamStanding.form,
          }))
        )
      );

    //   console.log('Standings Data:', standingsData);
   
      
      // Set the extracted data into state
      setStandings(standingsData);
    }, []);

    return (
        <div className="all-table-data">
            <div className="ptable">
            <table id="tablefull">
      <thead>
        <tr className="col">
          <th style={{ width: '2%' }}>#</th>
          <th style={{ width: '58%' }}>Team</th>
          <th>GP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>PTS</th>
          <th>Form</th>
        </tr>
      </thead>
      <tbody>
        
        {
        standings.map((team, index) => (
            
          <tr key={index} className="wpos">
            <td>{team.rank}</td>
            <td className="imagtile">
              <img
                className="participant__image"
                loading="lazy"
                alt={team.teamName}
                src={team.teamLogo}
                width="15"
              />{' '}
              {team.teamName}
            </td>
            <td>{team.played}</td>
            <td>{team.win}</td>
            <td>{team.draw}</td>
            <td>{team.lose}</td>
            <td>{team.goalsDiff}</td>
            <td>{team.points}</td>
            <td>

            <div className="winsection">
              {team.form.split('').map((result, i) => (
                <span
                  key={i}
                  className={
                    result === 'W' ? 'win' : result === 'L' ? 'lost' : result === 'D' ? 'draw' : ''
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
    );
};

function StandardTableTwo() {


    return (
        <div className="all-table-data">
            <div className="ptable">
                <table id="tablefull">
                    <tr className="col">
                        <th style={{ width: '2%' }}>#</th>
                        <th style={{ width: '58%' }}>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>PTS</th>
                        <th>form</th>
                    </tr>
                    <tr className="wpos">
                        <td>1</td>
                        <td className="imagtile"> <img className="participant__image" loading="lazy" alt="Manchester Utd" src="https://static.flashscore.com/res/image/data/GhGV3qjT-UPrTWfIe.png" />Warriors FC</td>
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                            <div className="winsection">
                                <span className="win">W</span> <span className="lost">L</span> <span className="draw">D</span>
                            </div>
                        </td>
                    </tr>
                  
                </table>

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
    );
};

function StandardTableThree() {


    return (
        <div className="all-table-data">
            <div className="ptable">
                <table id="tablefull">
                    <tr className="col">
                        <th style={{ width: '2%' }}>#</th>
                        <th style={{ width: '58%' }}>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>PTS</th>
                        <th>form</th>
                    </tr>
                    <tr className="wpos">
                        <td>1</td>
                        <td className="imagtile"> <img className="participant__image" loading="lazy" alt="Manchester Utd" src="https://static.flashscore.com/res/image/data/GhGV3qjT-UPrTWfIe.png" />Warriors FC</td>
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                            <div className="winsection">
                                <span className="win">W</span>
                            </div>
                        </td>
                    </tr>
                    <tr className="wpos">
                        <td>1</td>
                        <td className="imagtile"> <img className="participant__image" loading="lazy" alt="Manchester Utd" src="https://static.flashscore.com/res/image/data/GhGV3qjT-UPrTWfIe.png" />Warriors FC</td>
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                            <div className="winsection">
                                <span className="win">W</span> <span className="lost">L</span> <span className="draw">D</span>
                            </div>
                        </td>
                    </tr>
                    <tr className="wpos">
                        <td>1</td>
                        <td className="imagtile"> <img className="participant__image" loading="lazy" alt="Manchester Utd" src="https://static.flashscore.com/res/image/data/GhGV3qjT-UPrTWfIe.png" />Warriors FC</td>
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                            <div className="winsection">
                                <span className="win">W</span> <span className="draw">D</span>
                            </div>
                        </td>
                    </tr>
                    <tr className="wpos">
                        <td>1</td>
                        <td className="imagtile"> <img className="participant__image" loading="lazy" alt="Manchester Utd" src="https://static.flashscore.com/res/image/data/GhGV3qjT-UPrTWfIe.png" />Warriors FC</td>
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                            <div className="winsection">
                                <span className="win">W</span> <span className="lost">L</span> <span className="draw">D</span>
                            </div>
                        </td>
                    </tr>
                    <tr className="wpos">
                        <td>1</td>
                        <td className="imagtile"> <img className="participant__image" loading="lazy" alt="Manchester Utd" src="https://static.flashscore.com/res/image/data/GhGV3qjT-UPrTWfIe.png" />Warriors FC</td>
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                            <div className="winsection">
                                <span className="win">W</span> <span className="draw">D</span>
                            </div>
                        </td>
                    </tr>
                </table>

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
    );
};
export { StandardTableOne, StandardTableTwo, StandardTableThree };


