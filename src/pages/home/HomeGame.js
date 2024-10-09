import React, { useState, useEffect } from "react";

function HomeGame({ league }) {
    const defaultSeasonId = 13;
    const [allcountries, setAllCountries] = useState({});
    const [matches, setMatches] = useState([]);
    const [gameMatch, setGameMatch] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const AllcountryUrl = '/api/countries'; 

    useEffect(() => {
        fetch(AllcountryUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => setAllCountries(json.data))
            .catch(error => console.error('Error fetching all countries:', error));
    }, []);

    useEffect(() => {
        const AllseasonUrl = `/api/season/${defaultSeasonId}/game`;
        setLoading(true); // Start loading

        fetch(AllseasonUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                if (json.status === "true" && json.data) {
                    const today = new Date().toISOString().split('T')[0];
                    const todayMatches = json.data.filter(match => match.date.startsWith(today));

                    const selectedMatches = todayMatches.length > 0 
                        ? todayMatches 
                        : json.data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

                    setMatches(selectedMatches);
                } else {
                    setError('No match data found');
                }
                setLoading(false); // End loading
            })
            .catch(error => {
                setError('Error fetching match data');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (matches.length > 0) {
            matches.forEach(match => fetchGameDetails(match.id));
        }
    }, [matches]);

    const fetchGameDetails = (matchId) => {
        const LeagueGame = `/api/game/${matchId}`;

        console.log("LeagueGameURL",LeagueGame);

        fetch(LeagueGame, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                if (json && json.data) {
                    setGameMatch(prevState => ({
                        ...prevState,
                        [matchId]: json.data,
                    }));
                } else {
                    setError(`Game data not found for match ${matchId}`);
                }
            })
            .catch(() => setError(`Error fetching game data for match ${matchId}`));
    };

    const allCountryData = allcountries ? Object.values(allcountries) : [];
    const matchingCountry = allCountryData.find(item => item.code === (league ? league.country_code : ''));

    return (
        <div>
            <div>
                <span className="country-name">
                    {matchingCountry ? matchingCountry.display_name : (league ? league.country_code : '')}
                </span>
                <h3 className="text-slide">
                    {league && league.display_name}
                </h3>
            </div>

            {loading ? <p>Loading matches...</p> : null}

            {matches.map(match => {
                const matchingGame = gameMatch && Object.values(gameMatch).find(game => game.game_id === match.id);

             
                console.log("matchingGame URL",matchingGame);

                let homeScore = 0;
                let awayScore = 0;

                if (matchingGame && matchingGame.result) {
                    try {
                        const resultData = JSON.parse(matchingGame.result);
                        homeScore = resultData.fulltime?.home || 0;
                        awayScore = resultData.fulltime?.away || 0;
                    } catch (error) {
                        console.error('Error parsing result data:', error);
                    }
                }

                return (
                    <div className="league-rows" key={match.id}>
                        <div className="match-status">{match.status}</div>

                        {matchingGame ? (
                            <div>
                                <h4>Game Details for Match {match.id}</h4>
                                <span>{homeScore} - {awayScore}</span>
                            </div>
                        ) : error && <p>{error}</p>}
                    </div>
                );
            })}
        </div>
    );
}

export default HomeGame;
