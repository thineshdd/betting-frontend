import React, { useState, useEffect } from 'react';
import '../index.css';

import { Link } from 'react-router-dom';

const LeagueData = () => {
    const [allcountries, setAllCountries] = useState({}); // Initialize as an object
    const [countries, setCountries] = useState([]); // List of country codes
    const [leagues, setLeagues] = useState([]); // List of leagues for selected country
    const [selectedCountry, setSelectedCountry] = useState(null); // Currently selected country

    const AllcountryUrl = "/api/country";
    const countryUrl = "/api/sports/football/country"; // API to fetch country codes

    // Fetch all country data (with detailed information)
    useEffect(() => {
        fetch(AllcountryUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                //console.log('Fetched all countries:', json);
                setAllCountries(json.data); // Set full country data (as object)
            })
            .catch(error => console.error('Error fetching all countries:', error));
    }, []);

    // Fetch country codes on initial render
    useEffect(() => {
        fetch(countryUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                //console.log('Fetched countries:', json);
                setCountries(json.data); // Assuming 'json.data' contains the list of country codes
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    // Handle country click and fetch leagues
    const handleCountryClick = (countryCode) => {
        // If the clicked country is already selected, collapse it
        if (selectedCountry === countryCode) {
            setSelectedCountry(null); // Collapse if clicked again
        } else {
            setSelectedCountry(countryCode); // Expand this country
            const leagueUrl = `/api/sports/football/country/${countryCode}/league`; // Dynamic URL for leagues

            // Fetch league data for the selected country
            fetch(leagueUrl, { method: 'POST' })
                .then(response => response.json())
                .then(json => {
                    //console.log(`Fetched leagues for ${countryCode}:`, json);
                    setLeagues(json.data); // Assuming 'json.data' contains the list of leagues
                })
                .catch(error => console.error('Error fetching leagues:', error));
        }
    };

    // Convert the allcountries object to an array of country data
    const allCountryData = allcountries ? Object.values(allcountries) : [];

    return (
        <div className="match">
            <div className="match-header match-header-bg">
                <div className="match-tournament">All leagues</div>
            </div>

            <div className="match-content-league">
                {countries.map((country, index) => {
                    // Find the matching country in the allCountryData
                    const matchingCountry = allCountryData.find(item => item.code === country);

                    // If there's a matching country, display the display_name
                    return matchingCountry ? (
                        <div clasclassNames="accordion-leguelist" key={index}>
                            <div
                                onClick={() => handleCountryClick(country)}
                                style={{ cursor: 'pointer' }}  class="accordion-leguelist-heading"
                            >
                                <div className="match-title-league">
                                <span className="country-images">

                                {matchingCountry && (
                                            <img
                                                src={`/bet-assets/site/image/country/${matchingCountry.code}.svg`}
                                                alt={matchingCountry.display_name}
                                                width="26"
                                                height="26"
                                                className="country-icon"
                                            />
                                        )}
                                </span>
                                    {matchingCountry.display_name}
                                </div>
                                {/* Change the symbol based on whether the country is selected */}
                                <div className="match-arrow">
                                    {selectedCountry === country ? "−" : "+"}
                                </div>
                            </div>

                            {/* Accordion: Show leagues only if the country is selected */}
                            {selectedCountry === country && (
                                <div className="match-list-show">
                                  
                                    <ul>
                                        {leagues.map((league, index) => (
                                            <li key={index} className="list-leagues">
                                                <Link to={`/football/leaguelist/${league.id}`}>
                                                    {league.display_name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export default LeagueData;
