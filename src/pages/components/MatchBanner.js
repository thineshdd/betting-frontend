import React, { useEffect, useState } from "react";
import './Components.css';

import leaguebanner from '../../assets/imageapi/leaguebanner.png';
import { useParams } from 'react-router-dom';

function MatchBanner() {
    const { id } = useParams();
    const [gameMatch, setGameMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const AllLeagueUrl = `/api/game/${id}`;

    useEffect(() => {
        fetch(AllLeagueUrl, { method: 'POST' }) // Assuming it's a GET request
            .then(response => response.json())
            .then(json => {
                console.log('Fetched match data:', json);
                if (json && json.data) {
                    setGameMatch(json.data); // Store the entire game data
                } else {
                    setError('Game not found');
                }
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching game data');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!gameMatch) {
        return <div>No game data available.</div>;
    }

    // Check if gameName exists and fallback if necessary
    const game = gameMatch["0"];
    const gameName = game ? game.name : 'Unknown Game';

    // Ensure gameName exists before splitting
    const [homeTeam, awayTeam] = gameName ? gameName.split(" - ") : ["Home Team", "Away Team"];

    const timeDate = new Date(game.time * 1000);
    const formattedTime = timeDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }); // Convert UNIX timestamp to a readable date

    const fullStatus = JSON.parse(game.full_status);
    const statusLong = fullStatus.long;

    // Parse the result data
    let homeScore = 0;
    let awayScore = 0;

    if (game.result) {
        try {
            const resultData = JSON.parse(game.result);
            homeScore = resultData.fulltime.home || 0; // Default to 0 if not available
            awayScore = resultData.fulltime.away || 0; // Default to 0 if not available
        } catch (error) {
            console.error('Error parsing result data:', error);
        }
    }

    return (
        <div className="league-main-container bg-image-color">
            <div className="league-main-bg"></div>
            <div className="Next-match-container" key={game.id}>
                <div className="Next-match-section-one"></div>
                <div className="Next-match-section-two">
                    <div className="next-match-item">
                        <div className="next-match-title">
                            <div className="match-image">
                                <img src={leaguebanner} className="small-images" alt={`${homeTeam} logo`} />
                            </div>
                            <h3 className="match-title">{homeTeam}</h3>
                        </div>
                    </div>
                    <div className="next-match-item">
                        <p className="matchscore">{statusLong}</p>
                        <h2 className="livedata-score">{homeScore} <span className="livedata-score-arrow">-</span> {awayScore}</h2>
                        <p>{formattedTime}</p>
                    </div>
                    <div className="next-match-item">
                        <div className="next-match-title">
                            <div className="match-image">
                                <img src={leaguebanner} className="small-images" alt={`${awayTeam} logo`} />
                            </div>
                            <h3 className="match-title">{awayTeam}</h3>
                        </div>
                    </div>
                </div>
                <div className="Next-match-section-one"></div>
            </div>
        </div>
    );
}

export default MatchBanner;
