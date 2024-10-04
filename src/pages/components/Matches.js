import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import './Components.css';

import m1 from '../../assets/imageapi/m1.png';

function Matches({ selectedSeason }) {


    const { id } = useParams(); // Get the league ID from the URL parameters
    const [matches, setMatches] = useState([]);

    // const AllseasonUrl = `/api/season/${id}/game`; // Construct the API URL with the league ID

    useEffect(() => {

        if (!selectedSeason) return;

        const AllseasonUrl = `/api/season/${selectedSeason.id}/game`;
        console.log('Current AllseasonUrl:', AllseasonUrl);

        fetch(AllseasonUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                // Check if the response is valid and contains data
                if (json.status === "true" && json.data) {
                    const today = new Date();
                    const todayString = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
                    const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
                    const lastMonthString = lastMonth.toISOString().split('T')[0]; // Get last month's date in YYYY-MM-DD format

                    // Filter matches for today
                    const todayMatches = json.data.filter(match => match.date.startsWith(todayString));

                    let selectedMatches;

                    // Check if there are today's matches; if not, select matches from last month
                    if (todayMatches.length > 0) {
                        selectedMatches = todayMatches;
                    } else {
                        // Filter matches from the last month
                        const lastMonthMatches = json.data.filter(match => match.date.startsWith(lastMonthString));
                        if (lastMonthMatches.length > 0) {
                            selectedMatches = lastMonthMatches; // Use last month matches if available
                        } else {
                            selectedMatches = json.data; // Use all matches if no today's or last month's matches are found
                        }
                    }

                    console.log('Selected matches:', selectedMatches); // Log the filtered data
                    setMatches(selectedMatches.slice(0, 10)); // Set only the first 10 matches
                } else {
                    console.error('No match data found');
                }
            })
            .catch(error => console.error('Error fetching match data:', error));
    }, [selectedSeason]); // Add AllseasonUrl to the dependency array

    return (
        <div className="league-main-container">
            <div className="league-main-row">
                <div className="league-center-title">
                    <div className="imageflex">
                        <img src={m1} alt="League" width="36" height="36" className="league-imageflex" />
                        <h4 className="league-heading-sub">Matches</h4>
                    </div>
                </div>
                <div className="league-match-data-single">
                    {matches.map(match => (
                        <div className="accordion-flex" key={match.id}>
                            <div className="accordion-flex-iteam accordion-flex-grow">
                                <div className="accordion-favriote-row">
                                    <div className="accordion-sub-inner1">
                                        <div className="match-date">    {match.date.split(' ')[0]} </div>
                                        <div className="match-status"> {match.status}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-flex-iteam accordion-flex-grow-big">
                                <div className="accordion-sub-iteam">
                                    <div className="accordion-sub-inner">
                                        <div className="span-image-live">
                                            {match.name}
                                        </div>
                                        <div className="span-live-count"></div>
                                    </div>
                                    <div className="accordion-sub-inner">
                                        <div className="span-image-live"></div>
                                        <div className="span-live-count"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-flex-iteam-third accordion-flex-grow">
                                <Link to={`/football/match-summary/${match.id}`}> View </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="more-match">

                    <button className="more-match-btn">   <Link to={`/football/leaguelist/matches/${id}`}> More Button </Link> </button>
                </div> */}

                <div className="more-match">
                    <Link to={`/football/leaguelist/matches/${selectedSeason.id}`}>
                        <button className="more-match-btn"> More Button </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Matches;
