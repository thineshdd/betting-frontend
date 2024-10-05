import React, { useState, useEffect } from 'react';
import './Components.css';
import standingsimage from '../../assets/imageapi/standing.svg';

function LeagueStanded({ selectedSeason }) {
    const [standings, setStandings] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(''); // Default group is empty
    const [groupNames, setGroupNames] = useState([]); // To store unique group names
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

    useEffect(() => {
        if (!selectedSeason) return;

        const Allstandard = `/api/season/${selectedSeason.id}/statics/standings`;
        console.log('Current Allstandard:', Allstandard);

        // Fetch standings data from the API
        fetch(Allstandard, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                console.log('API Response:', json);
                const apiData = json.data;
                const parsedData = JSON.parse(apiData.data);
                console.log('Parsed Standings Data:', parsedData);

                const standings = parsedData[0].league.standings;

                let allStandings = [];

                if (standings.length === 1) {
                    allStandings = standings[0]; // Use the first array
                    setStandings(allStandings);
                    setGroupNames([]); // Clear group names
                    setSelectedGroup(''); // No selected group
                } else {
                    allStandings = standings.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);
                    const uniqueGroups = [...new Set(allStandings.map(team => team.group))];
                    setGroupNames(uniqueGroups);
                    setSelectedGroup(uniqueGroups[0]);
                }

                setStandings(allStandings);
            })
            .catch(error => console.error('Error fetching standings:', error));
    }, [selectedSeason]);

    // Filter standings by selected group if group names exist
    const filteredStandings = groupNames.length > 0
        ? standings.filter(team => team.group === selectedGroup)
        : standings; // If no groups, just show all standings

    const handleGroupSelect = (group) => {
        setSelectedGroup(group);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <>
            <div className="league-main-container">
                <div className="league-main-row">
                    <div className="league-center-title">
                        <div className="imageflex">
                            <img src={standingsimage} alt="Standings" width="36" height="36" className="league-imageflex" />
                            <h4 className="league-heading-sub">Standings</h4>
                        </div>
                    </div>

                    <div className="league-main-tabel">
                        <div className="tabsection-container">
                            <div>
                                {groupNames.length > 0 && ( // Only show dropdown if there are multiple groups
                                    <div className="custom-dropdown">
                                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="dropdown-toggle">
                                            {selectedGroup || 'Select Group'} 
                                            {/* Show arrow based on dropdown state */}
                                            {isDropdownOpen ? '  ▲' : ' ▼'}
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="dropdown-menu">
                                                {groupNames.map((group, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => handleGroupSelect(group)}
                                                        className="dropdown-item"
                                                    >
                                                        {group}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

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
                                                            {team.form ? (
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
                                                            ) : (
                                                                <span></span> // Render an empty span if form is null
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="key-tabel">
                                        <div className="key-tabel-title">
                                            Key
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
