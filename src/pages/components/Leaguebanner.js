import React, { useState, useEffect } from 'react';
import './Components.css';
import { useParams } from 'react-router-dom';

import leaguebanner from '../../assets/imageapi/leaguebanner.png';
import leagueicon from '../../assets/imageapi/league-icon.png';
import leaguebannerbal from '../../assets/imageapi/leaguebannerbal.png';

function Leaguebanner({ setSelectedSeason, selectedSeason }) {
    const { display_name, id } = useParams();
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [season, setSeason] = useState([]);
    const [errormsg, setErrormsg] = useState(null);
    const [allcountries, setAllCountries] = useState({}); // Initialize as an object


    // const defaultSeasonId = 13;
    // const [selectedSeason, setSelectedSeason] = useState(null);

    //   const defaultYear = 2024; // Default year set to 2024

    const defaultYear = new Date().getFullYear();

    const AllcountryUrl = "/api/country";

    const AllLeagueUrl = `/api/league/${id}`;
    const AllSeason = `/api/league/${id}/season`;

    useEffect(() => {
        fetch(AllcountryUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                console.log('Fetched all countries:', json);
                setAllCountries(json.data); // Set full country data (as object)
            })
            .catch(error => console.error('Error fetching all countries:', error));
    }, []);

    // Fetch league data
    useEffect(() => {
        fetch(AllLeagueUrl, { method: 'POST' })
            .then((response) => response.json())
            .then((json) => {
                if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
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
    }, [id]);

    // Fetch season data based on league ID
    useEffect(() => {
        setError(null);
        fetch(AllSeason, { method: 'POST' })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                if (json && json.data && json.data.length > 0) {
                    // Sort the seasons in descending order by their `id` or another field
                    const sortedSeasons = json.data.sort((a, b) => b.id - a.id);
                    setSeason(sortedSeasons);
                    const defaultSeason = sortedSeasons.find(s => s.id === defaultYear) || sortedSeasons[0]; // Default to season ID 13 or the first season

                    console.log('defaultSeason countries:', defaultSeason);
                    setSelectedSeason(defaultSeason);
                    setLoading(false);
                } else {
                    setErrormsg('No season data found');
                }
            })
            .catch(() => {
                setErrormsg('Error fetching season data');
                setLoading(false);
            });
    }, [id]);

    // Handle dropdown selection
    // const handleSeasonChange = (event) => {
    //     const selectedId = event.target.value;
    //     const selectedSeasonObj = season.find((item) => item.id === Number(selectedId));
    //     setSelectedSeason(selectedSeasonObj);
    //     console.log('Selected Season:', selectedSeasonObj);
    // };

    const handleSeasonChange = (e) => {
        const selectedId = e.target.value;

        if (selectedId === "") {
            // If default year is selected, handle it here
            setSelectedSeason(null); // Reset selection or handle it accordingly
        } else {
            const selectedSeason = season.find(s => s.id === parseInt(selectedId));
            setSelectedSeason(selectedSeason);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!league) {
        return <div>No league data available.</div>;
    }

    if (errormsg) {
        return <div>{errormsg}</div>;
    }

    const allCountryData = allcountries ? Object.values(allcountries) : [];

    const matchingCountry = allCountryData.find(item => item.code === league.country_code);

    return (
        <>
            <div className="league-main-container  bg-image-color" data-color="blue">
                <div className="league-main-bg" style={{ backgroundImage: `url(${league.icon})` }}></div>
                <div className="league-main-row">
                    <div className="league-main-images">
                        <div className="league-main-imageslist">
                            <img
                                src={league.icon ? league.icon : leaguebannerbal}
                                alt={league.display_name || 'Default league banner'}
                                className="league-images-nav"
                                onError={(e) => { e.target.src = leaguebannerbal; }}
                            />
                        </div>
                        <div className="league-content-list">
                            <h4 className="league-heading">{league.display_name}   {selectedSeason ? ` ${selectedSeason.name}` : ''}</h4>
                            <div className="country-image mtb">
                                <div className="country-image-span">
                                    <span>
                                        {league && (
                                            <img
                                                src={`/bet-assets/site/image/country/${league.country_code}.svg`}
                                                alt={league.country_code}
                                                width="26"
                                                height="26"
                                                className="league-images-sub"
                                            />
                                        )}
                                        {matchingCountry ? matchingCountry.display_name : league.country_code}   
                                    </span>
                                </div>

                                <div className="select-dropdown">


                                    <select onChange={handleSeasonChange} value={selectedSeason ? selectedSeason.id : ''}>

                                        {season.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leaguebanner;
