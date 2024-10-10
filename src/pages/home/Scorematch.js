import React, { useState, useEffect } from "react";
import '../../index.css';
import { useParams, Link } from 'react-router-dom';
import leaguelogo from '../../assets/imageapi/1.png';
import matchlogo from '../../assets/imageapi/2.png';
import leftarrow from '../../assets/imageapi/leftarrow.png';
import leaguelogo1 from '../../assets/imageapi/3.png';
import leaguelogo2 from '../../assets/imageapi/4.png';



function Scorematch() {

    const ids = 17;
    const defaultSeasonId = 93;

    const [allcountries, setAllCountries] = useState({});
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [season, setSeason] = useState(null); // Initialize as null

    const [matches, setMatches] = useState([]);

    const [gameMatch, setGameMatch] = useState(null);

    const AllcountryUrl = "/api/country";

    // console.log('AllLeagueUrl:', AllLeagueUrl);
    // console.log('AllSeason', AllSeason);
    // console.log('LeagueGame', LeagueGame);
    // Fetch country data
    useEffect(() => {
        fetch(AllcountryUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                console.log('Fetched all countries:', json);
                setAllCountries(json.data); // Set full country data (as object)
            })
            .catch(error => console.error('Error fetching all countries:', error));
    }, []);


    const AllLeagueUrl = `/api/league/${ids}`;
    // Fetch league data
    useEffect(() => {
        fetch(AllLeagueUrl, { method: 'POST' })
            .then((response) => response.json())
            .then((json) => {
                if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
                    console.log('Fetched all AllLeague:', json);
                    setLeague(json.data[0]);
                } else {
                    setError('League not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching league data');
                setLoading(false);
            });
    }, []);



    const AllSeason = `/api/league/${ids}/season`;

    // Fetch season data and set default season
    useEffect(() => {
        fetch(AllSeason, { method: 'POST' })
            .then((response) => response.json())
            .then((json) => {
                if (json && json.data && json.data.length > 0) {


                    const defaultSeason = json.data.find(s => s.id === defaultSeasonId);

                    console.log('Fetched all AllLeague:', defaultSeason);
                    setSeason(defaultSeason);
                } else {
                    setError('Season not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching season data');
                setLoading(false);
            });
    }, []);


    useEffect(() => {
        const AllseasonUrl = `/api/season/${defaultSeasonId}/game`;
        console.log('Current AllseasonUrl:', AllseasonUrl);

        fetch(AllseasonUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                // Check if the response is valid and contains data
                if (json.status === "true" && json.data) {
                    const today = new Date();
                    const todayString = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

                    // Filter matches for today
                    const todayMatches = json.data.filter(match => match.date.startsWith(todayString));

                    let selectedMatches;

                    // Check if there are today's matches; if not, select the default matches (e.g., most recent or all)
                    if (todayMatches.length > 0) {
                        //console.log("Today's matches found:", todayMatches);
                        selectedMatches = todayMatches;
                    } else {
                        console.log("No matches for today, showing default matches");
                        // Sort matches by date in descending order (most recent matches first)
                        const sortedMatches = json.data.sort((a, b) => new Date(b.date) - new Date(a.date));

                        // Select the most recent matches (fallback to default)
                        selectedMatches = sortedMatches.slice(0, 5); // Show first 3 recent matches
                    }

                    // Log the selected matches for debugging
                    //console.log('Selected matches:', selectedMatches);

                    // Set the selected matches to state
                    setMatches(selectedMatches);
                } else {
                    console.error('No match data found');
                }
            })
            .catch(error => console.error('Error fetching match data:', error));
    }, []);

    useEffect(() => {
        if (matches.length > 0) {
            matches.forEach(match => fetchGameDetails(match.id));
        }
    }, [matches]);


    const fetchGameDetails = (matchId) => {
        const LeagueGame = `/api/game/${matchId}`;

        console.log("LeagueGameURL", LeagueGame);

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

    console.log('matchingCountrysss:', matchingCountry);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {/* Your Scorematch component implementation */}

            <div className="league-section-main">
                <div className="league-section-row">
                    <div className="header-bg-slide">
                        <div className="header-flex">
                            <div className="country-images">


                                {matchingCountry && (
                                    <img
                                        src={`/bet-assets/site/image/country/${matchingCountry.code}.svg`}
                                        alt={matchingCountry.display_name}
                                        width="26"
                                        height="26"
                                        className="country-icon"
                                    />
                                )}
                            </div>

                            <div>
                                <span className="country-name">
                                    {matchingCountry ? matchingCountry.display_name : (league ? league.country_code : '')}
                                </span>
                                <h3 className="text-slide">
                                    <Link to={`/football/${league.display_name.replace(/\s+/g, '-')}/${league.id}`}>
                                        {league.display_name}
                                    </Link>

                                </h3>
                            </div>
                        </div>
                    </div>

                    {matches.length > 0 ? (

                        <div className="league-container">

                            {matches.map(match => {

                                // console.log('Match ID:', match.id);
                                // console.log('Game Match Data:', gameMatch);

                                const matchingGame = gameMatch && Object.values(gameMatch).find(game => game.game_id === match.id);

                                console.log('matchingGame:', matchingGame);

                                let homeScore = 0;
                                let awayScore = 0;

                                // Parse and set scores if result exists in matchingGame
                                if (matchingGame && matchingGame.result) {
                                    try {
                                        const resultData = JSON.parse(matchingGame.result);
                                        homeScore = resultData.fulltime?.home || 0; // Default to 0 if not available
                                        awayScore = resultData.fulltime?.away || 0; // Default to 0 if not available
                                    } catch (error) {
                                        console.error('Error parsing result data:', error);
                                    }
                                }


                                const formattedName = match.name.replace(/\s+/g, '-').replace(/-+/g, '-'); 

                                console.log(formattedName);

                                const [team1, team2] = match.name.split(" - ");

                                const utcDateString = match.date.replace(' ', 'T') + 'Z'; // Convert to a valid ISO date format
                                const theDate = new Date(Date.parse(utcDateString)); // Parse the date

                                // Options for formatting the date and time
                                const yearOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                                const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

                                // Format the date and time
                                const formatTime = theDate.toLocaleTimeString(undefined, timeOptions);
                                const formatDate = theDate.toLocaleDateString(undefined, yearOptions);


                                return (

                                    <div className="league-rows" key={match.id}>
                                        <div className="league-rows-iteam-match1">
                                            <div className="league-rows-iteam-time">
                                                <div className="match-date">      <span className="live-date"> {formatDate} </span> - <span className="live-time"> {formatTime} </span> </div>
                                                <div className="match-status"> {match.status}</div>
                                            </div>
                                        </div>
                                        <div className="league-rows-iteam-match2">
                                            <div className="league-match-data">
                                                <div className="league-match-img">
                                                    <img src={matchlogo} style={{ width: '20px', height: 'auto' }} alt="match" />
                                                    <Link to={`/football/match-summary/${formattedName}/${match.id}`}> <span>   {team1} </span> </Link>

                                                </div>
                                                <div className="league-match-score"> {homeScore} </div>
                                            </div>

                                            <div className="league-match-data">
                                                <div className="league-match-img">
                                                    <img src={matchlogo} style={{ width: '20px', height: 'auto' }} alt="match" />
                                                    <Link to={`/football/match-summary/${formattedName}/${match.id}`}>    <span>   {team2} </span>  </Link>
                                                </div>
                                                <div className="league-match-score"> {awayScore} </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    ) : (
                        <div>No matches available</div>
                    )}
                </div>
            </div>
        </>
    );
}




function ScorematchC() {

    const ids = 41;
    const defaultSeasonId = 308;

    const [allcountries, setAllCountries] = useState({});
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [season, setSeason] = useState(null); // Initialize as null

    const [matches, setMatches] = useState([]);

    const [gameMatch, setGameMatch] = useState(null);

    const AllcountryUrl = "/api/country";

    // console.log('AllLeagueUrl:', AllLeagueUrl);
    // console.log('AllSeason', AllSeason);
    // console.log('LeagueGame', LeagueGame);
    // Fetch country data
    useEffect(() => {
        fetch(AllcountryUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                console.log('Fetched all countries:', json);
                setAllCountries(json.data); // Set full country data (as object)
            })
            .catch(error => console.error('Error fetching all countries:', error));
    }, []);


    const AllLeagueUrl = `/api/league/${ids}`;
    // Fetch league data
    useEffect(() => {
        fetch(AllLeagueUrl, { method: 'POST' })
            .then((response) => response.json())
            .then((json) => {
                if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
                    console.log('Fetched all AllLeague:', json);
                    setLeague(json.data[0]);
                } else {
                    setError('League not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching league data');
                setLoading(false);
            });
    }, []);



    const AllSeason = `/api/league/${ids}/season`;

    // Fetch season data and set default season
    useEffect(() => {
        fetch(AllSeason, { method: 'POST' })
            .then((response) => response.json())
            .then((json) => {
                if (json && json.data && json.data.length > 0) {


                    const defaultSeason = json.data.find(s => s.id === defaultSeasonId);

                    console.log('Fetched all AllLeague:', defaultSeason);
                    setSeason(defaultSeason);
                } else {
                    setError('Season not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching season data');
                setLoading(false);
            });
    }, []);


    useEffect(() => {
        const AllseasonUrl = `/api/season/${defaultSeasonId}/game`;
        console.log('Current AllseasonUrl:', AllseasonUrl);

        fetch(AllseasonUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                // Check if the response is valid and contains data
                if (json.status === "true" && json.data) {
                    const today = new Date();
                    const todayString = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

                    // Filter matches for today
                    const todayMatches = json.data.filter(match => match.date.startsWith(todayString));

                    let selectedMatches;

                    // Check if there are today's matches; if not, select the default matches (e.g., most recent or all)
                    if (todayMatches.length > 0) {
                        //console.log("Today's matches found:", todayMatches);
                        selectedMatches = todayMatches;
                    } else {
                        console.log("No matches for today, showing default matches");
                        // Sort matches by date in descending order (most recent matches first)
                        const sortedMatches = json.data.sort((a, b) => new Date(b.date) - new Date(a.date));

                        // Select the most recent matches (fallback to default)
                        selectedMatches = sortedMatches.slice(0, 5); // Show first 3 recent matches
                    }

                    // Log the selected matches for debugging
                    //console.log('Selected matches:', selectedMatches);

                    // Set the selected matches to state
                    setMatches(selectedMatches);
                } else {
                    console.error('No match data found');
                }
            })
            .catch(error => console.error('Error fetching match data:', error));
    }, []);

    useEffect(() => {
        if (matches.length > 0) {
            matches.forEach(match => fetchGameDetails(match.id));
        }
    }, [matches]);


    const fetchGameDetails = (matchId) => {
        const LeagueGame = `/api/game/${matchId}`;

        console.log("LeagueGameURL", LeagueGame);

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

    console.log('matchingCountrysss:', matchingCountry);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {/* Your Scorematch component implementation */}

            <div className="league-section-main">
                <div className="league-section-row">
                    <div className="header-bg-slide">
                        <div className="header-flex">
                            <div className="country-images">


                                {matchingCountry && (
                                    <img
                                        src={`/bet-assets/site/image/country/${matchingCountry.code}.svg`}
                                        alt={matchingCountry.display_name}
                                        width="26"
                                        height="26"
                                        className="country-icon"
                                    />
                                )}
                            </div>

                            <div>
                                <span className="country-name">
                                    {matchingCountry ? matchingCountry.display_name : (league ? league.country_code : '')}
                                </span>
                                <h3 className="text-slide">
                                    <Link to={`/football/${league.display_name.replace(/\s+/g, '-')}/${league.id}`}>
                                        {league.display_name}
                                    </Link>

                                </h3>
                            </div>
                        </div>
                    </div>

                    {matches.length > 0 ? (

                        <div className="league-container">

                            {matches.map(match => {

                                // console.log('Match ID:', match.id);
                                // console.log('Game Match Data:', gameMatch);

                                const matchingGame = gameMatch && Object.values(gameMatch).find(game => game.game_id === match.id);

                                console.log('matchingGame:', matchingGame);



                                let homeScore = 0;
                                let awayScore = 0;

                                // Parse and set scores if result exists in matchingGame
                                if (matchingGame && matchingGame.result) {
                                    try {
                                        const resultData = JSON.parse(matchingGame.result);
                                        homeScore = resultData.fulltime?.home || 0; // Default to 0 if not available
                                        awayScore = resultData.fulltime?.away || 0; // Default to 0 if not available
                                    } catch (error) {
                                        console.error('Error parsing result data:', error);
                                    }
                                }

                                const formattedName = match.name.replace(/\s+/g, '-').replace(/-+/g, '-'); 

                                console.log(formattedName);

                                const [team1, team2] = match.name.split(" - ");

                                const utcDateString = match.date.replace(' ', 'T') + 'Z'; // Convert to a valid ISO date format
                                const theDate = new Date(Date.parse(utcDateString)); // Parse the date

                                // Options for formatting the date and time
                                const yearOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                                const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

                                // Format the date and time
                                const formatTime = theDate.toLocaleTimeString(undefined, timeOptions);
                                const formatDate = theDate.toLocaleDateString(undefined, yearOptions);


                                return (

                                    <div className="league-rows" key={match.id}>
                                        <div className="league-rows-iteam-match1">
                                            <div className="league-rows-iteam-time">
                                                <div className="match-date">      <span className="live-date"> {formatDate} </span> - <span className="live-time"> {formatTime} </span> </div>
                                                <div className="match-status"> {match.status}</div>
                                            </div>
                                        </div>
                                        <div className="league-rows-iteam-match2">
                                            <div className="league-match-data">
                                                <div className="league-match-img">
                                                    <img src={matchlogo} style={{ width: '20px', height: 'auto' }} alt="match" />
                                                    <Link to={`/football/match-summary/${formattedName}/${match.id}`}>   <span>   {team1} </span> </Link>

                                                </div>
                                                <div className="league-match-score"> {homeScore} </div>
                                            </div>

                                            <div className="league-match-data">
                                                <div className="league-match-img">
                                                    <img src={matchlogo} style={{ width: '20px', height: 'auto' }} alt="match" />
                                                    <Link to={`/football/match-summary/${formattedName}/${match.id}`}>  <span>   {team2} </span>  </Link>
                                                </div>
                                                <div className="league-match-score"> {awayScore} </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    ) : (
                        <div>No matches available</div>
                    )}
                </div>
            </div>
        </>
    );
}


function ScorematchD() {

    const ids = 104;
    const defaultSeasonId = 670;

    const [allcountries, setAllCountries] = useState({});
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [season, setSeason] = useState(null); // Initialize as null

    const [matches, setMatches] = useState([]);

    const [gameMatch, setGameMatch] = useState(null);

    const AllcountryUrl = "/api/country";

    // console.log('AllLeagueUrl:', AllLeagueUrl);
    // console.log('AllSeason', AllSeason);
    // console.log('LeagueGame', LeagueGame);
    // Fetch country data
    useEffect(() => {
        fetch(AllcountryUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                console.log('Fetched all countries:', json);
                setAllCountries(json.data); // Set full country data (as object)
            })
            .catch(error => console.error('Error fetching all countries:', error));
    }, []);


    const AllLeagueUrl = `/api/league/${ids}`;
    // Fetch league data
    useEffect(() => {
        fetch(AllLeagueUrl, { method: 'POST' })
            .then((response) => response.json())
            .then((json) => {
                if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
                    console.log('Fetched all AllLeague:', json);
                    setLeague(json.data[0]);
                } else {
                    setError('League not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching league data');
                setLoading(false);
            });
    }, []);



    const AllSeason = `/api/league/${ids}/season`;

    // Fetch season data and set default season
    useEffect(() => {
        fetch(AllSeason, { method: 'POST' })
            .then((response) => response.json())
            .then((json) => {
                if (json && json.data && json.data.length > 0) {


                    const defaultSeason = json.data.find(s => s.id === defaultSeasonId);

                    console.log('Fetched all AllLeague:', defaultSeason);
                    setSeason(defaultSeason);
                } else {
                    setError('Season not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching season data');
                setLoading(false);
            });
    }, []);


    useEffect(() => {
        const AllseasonUrl = `/api/season/${defaultSeasonId}/game`;
        console.log('Current AllseasonUrl:', AllseasonUrl);

        fetch(AllseasonUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                // Check if the response is valid and contains data
                if (json.status === "true" && json.data) {
                    const today = new Date();
                    const todayString = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

                    // Filter matches for today
                    const todayMatches = json.data.filter(match => match.date.startsWith(todayString));

                    let selectedMatches;

                    // Check if there are today's matches; if not, select the default matches (e.g., most recent or all)
                    if (todayMatches.length > 0) {
                        //console.log("Today's matches found:", todayMatches);
                        selectedMatches = todayMatches;
                    } else {
                        console.log("No matches for today, showing default matches");
                        // Sort matches by date in descending order (most recent matches first)
                        const sortedMatches = json.data.sort((a, b) => new Date(b.date) - new Date(a.date));

                        // Select the most recent matches (fallback to default)
                        selectedMatches = sortedMatches.slice(0, 5); // Show first 3 recent matches
                    }

                    // Log the selected matches for debugging
                    //console.log('Selected matches:', selectedMatches);

                    // Set the selected matches to state
                    setMatches(selectedMatches);
                } else {
                    console.error('No match data found');
                }
            })
            .catch(error => console.error('Error fetching match data:', error));
    }, []);

    useEffect(() => {
        if (matches.length > 0) {
            matches.forEach(match => fetchGameDetails(match.id));
        }
    }, [matches]);


    const fetchGameDetails = (matchId) => {
        const LeagueGame = `/api/game/${matchId}`;

        console.log("LeagueGameURL", LeagueGame);

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

    console.log('matchingCountrysss:', matchingCountry);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {/* Your Scorematch component implementation */}

            <div className="league-section-main">
                <div className="league-section-row">
                    <div className="header-bg-slide">
                        <div className="header-flex">
                            <div className="country-images">


                                {matchingCountry && (
                                    <img
                                        src={`/bet-assets/site/image/country/${matchingCountry.code}.svg`}
                                        alt={matchingCountry.display_name}
                                        width="26"
                                        height="26"
                                        className="country-icon"
                                    />
                                )}
                            </div>

                            <div>
                                <span className="country-name">
                                    {matchingCountry ? matchingCountry.display_name : (league ? league.country_code : '')}
                                </span>
                                <h3 className="text-slide">
                                    <Link to={`/football/${league.display_name.replace(/\s+/g, '-')}/${league.id}`}>
                                        {league.display_name}
                                    </Link>

                                </h3>
                            </div>
                        </div>
                    </div>

                    {matches.length > 0 ? (

                        <div className="league-container">

                            {matches.map(match => {

                                // console.log('Match ID:', match.id);
                                // console.log('Game Match Data:', gameMatch);

                                const matchingGame = gameMatch && Object.values(gameMatch).find(game => game.game_id === match.id);

                                console.log('matchingGame:', matchingGame);

                                let homeScore = 0;
                                let awayScore = 0;

                                // Parse and set scores if result exists in matchingGame
                                if (matchingGame && matchingGame.result) {
                                    try {
                                        const resultData = JSON.parse(matchingGame.result);
                                        homeScore = resultData.fulltime?.home || 0; // Default to 0 if not available
                                        awayScore = resultData.fulltime?.away || 0; // Default to 0 if not available
                                    } catch (error) {
                                        console.error('Error parsing result data:', error);
                                    }
                                }

                                const formattedName = match.name.replace(/\s+/g, '-').replace(/-+/g, '-'); 

                                console.log(formattedName);

                                const [team1, team2] = match.name.split(" - ");

                                const utcDateString = match.date.replace(' ', 'T') + 'Z'; // Convert to a valid ISO date format
                                const theDate = new Date(Date.parse(utcDateString)); // Parse the date

                                // Options for formatting the date and time
                                const yearOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                                const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

                                // Format the date and time
                                const formatTime = theDate.toLocaleTimeString(undefined, timeOptions);
                                const formatDate = theDate.toLocaleDateString(undefined, yearOptions);


                                return (

                                    <div className="league-rows" key={match.id}>
                                        <div className="league-rows-iteam-match1">
                                            <div className="league-rows-iteam-time">
                                                <div className="match-date">      <span className="live-date"> {formatDate} </span> - <span className="live-time"> {formatTime} </span> </div>
                                                <div className="match-status"> {match.status}</div>
                                            </div>
                                        </div>
                                        <div className="league-rows-iteam-match2">
                                            <div className="league-match-data">
                                                <div className="league-match-img">
                                                    <img src={matchlogo} style={{ width: '20px', height: 'auto' }} alt="match" />
                                                    <Link to={`/football/match-summary/${formattedName}/${match.id}`}> <span>   {team1} </span> </Link>

                                                </div>
                                                <div className="league-match-score"> {homeScore} </div>
                                            </div>

                                            <div className="league-match-data">
                                                <div className="league-match-img">
                                                    <img src={matchlogo} style={{ width: '20px', height: 'auto' }} alt="match" />
                                                    <Link to={`/football/match-summary/${formattedName}/${match.id}`}>    <span>   {team2} </span>  </Link>
                                                </div>
                                                <div className="league-match-score"> {awayScore} </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    ) : (
                        <div>No matches available</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Scorematch;
export { ScorematchC, ScorematchD };
