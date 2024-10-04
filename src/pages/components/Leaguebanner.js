import React, { useState, useEffect } from 'react';
import './Components.css';
import { useParams } from 'react-router-dom';

import leaguebanner from '../../assets/imageapi/leaguebanner.png';
import leagueicon from '../../assets/imageapi/league-icon.png';

function Leaguebanner({ setSelectedSeason, selectedSeason }) {
    const { id } = useParams();
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [season, setSeason] = useState([]);
    const [errormsg, setErrormsg] = useState(null);


    const defaultSeasonId = 13;
    // const [selectedSeason, setSelectedSeason] = useState(null);

    //   const defaultYear = 2024; // Default year set to 2024

    const defaultYear = new Date().getFullYear();

    const AllLeagueUrl = `/api/league/${id}`;
    const AllSeason = `/api/league/${id}/season`;



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
                    const defaultSeason = sortedSeasons.find(s => s.id === defaultSeasonId) || sortedSeasons[0]; // Default to season ID 13 or the first season
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

    return (
        <>
            <div className="league-main-container  bg-image-color" data-color="blue">
                <div className="league-main-bg"></div>
                <div className="league-main-row">
                    <div className="league-main-images">
                        <div className="league-main-imageslist">
                            <img src={leaguebanner} alt={league.display_name} className="league-images-nav" />
                        </div>
                        <div className="league-content-list">
                            <h4 className="league-heading">{league.display_name}</h4>
                            <div className="country-image mtb">
                                <div className="country-image-span">
                                    <span>
                                        <img src={leagueicon} alt={league.country_code} width="36" height="36" className="league-images-sub" />
                                        {league.country_code}
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
