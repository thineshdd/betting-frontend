import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import m1 from '../../assets/imageapi/m1.png'; // Placeholder image for the league

const MatchPage = () => {
    const { id } = useParams(); // Grabs the URL parameter (id)

    const AllSeason = `/api/league/${id}/season`; 
    
    const [season, setSeason] = useState([]); // State for the season data
    const [error, setError] = useState(null); // State for handling errors
    const [matches, setMatches] = useState([]); // State for match data
    const [filteredMatches, setFilteredMatches] = useState([]); // State for filtered match data
    const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(5, 7)); // Default to current month

    const months = [
        { value: "01", label: "January" },
        { value: "02", label: "February" },
        { value: "03", label: "March" },
        { value: "04", label: "April" },
        { value: "05", label: "May" },
        { value: "06", label: "June" },
        { value: "07", label: "July" },
        { value: "08", label: "August" },
        { value: "09", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" }
    ];

    // Fetch the season data based on league id
    useEffect(() => {
        setError(null); // Reset error state before fetching new data
        fetch(AllSeason, { method: 'POST' }) 
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(json => {
                console.log('Season data:', json);
                if (json && json.data && json.data.length > 0) {
                    setSeason(json.data); // Set the season data from the API response
                } else {
                    setError('No league data found');
                }
            })
            .catch(err => {
                setError('Error fetching league data');
                console.error('Fetch error:', err);
            });
    }, [id]);

    // Fetch match data based on the first season (after season data is fetched)
    useEffect(() => {
        const fetchMatches = async () => {
            if (season.length > 0) {
                // Create an array of promises to fetch matches for each season
                const fetchPromises = season.map(async (seasonItem) => {
                    const AllLeagueUrl = `/api/season/${seasonItem.id}/game`; // Use the current season ID for fetching matches
                    
                    console.log('Fetching matches for season ID:', seasonItem.id);
                    console.log('AllLeagueUrl ID:', AllLeagueUrl);
        
                    try {
                        const response = await fetch(AllLeagueUrl, { method: 'POST' });
                        const json = await response.json();
        
                        if (json.status === "true" && json.data) {
                            console.log('Selected matches for season ID:', seasonItem.id, json.data); 
                            return json.data; // Return the data for this season
                        } else {
                            console.error(`No match data found for season ID: ${seasonItem.id}`);
                            return []; // Return an empty array if no data found
                        }
                    } catch (error) {
                        console.error(`Error fetching match data for season ID: ${seasonItem.id}`, error);
                        return []; // Return an empty array on error
                    }
                });
        
                // Wait for all promises to resolve
                const results = await Promise.all(fetchPromises);
        
                // Flatten the results array (if needed)
                const allMatches = results.flat(); // Combine all match data into a single array
        
                // Update state with all fetched matches
                setMatches(allMatches); 
                setFilteredMatches(allMatches); // Initially, display all matches
            }
        };
        

        fetchMatches(); // Call the function to fetch matches
    }, [season]);

    // Filter matches based on the selected month
    useEffect(() => {
        if (selectedMonth && matches.length > 0) {
            const filtered = matches.filter(match => {
                const matchMonth = match.date.split("-")[1]; // Extract month from match date (format: YYYY-MM-DD)
                return matchMonth === selectedMonth;
            });
            setFilteredMatches(filtered);
        } else {
            setFilteredMatches([]); // Clear the filtered matches if no data for the selected month
        }
    }, [selectedMonth, matches]);

    if (error) {
        return <div>{error}</div>; // Display any error messages
    }

    return (
        <>
            <div className="league-main-container">
                <div className="league-main-row">
                    <div className="league-center-title">
                        <div className="imageflex">
                            {/* Placeholder image for the league */}
                            <img src={m1} alt="League" width="36" height="36" className="league-imageflex" />
                            <h4 className="league-heading-sub">Matches</h4>
                        </div>
                    </div>

                    <div className="month-dropdown">
                        <label htmlFor="month-select">Filter by Month:</label>
                        <select
                            id="month-select"
                            value={selectedMonth}
                            onChange={e => setSelectedMonth(e.target.value)}
                        >
                            <option value="">All Months</option>
                            {months.map(month => (
                                <option key={month.value} value={month.value}>
                                    {month.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Check if there are any filtered matches */}
                    {filteredMatches.length > 0 ? (
                        <div className="league-match-data-single">
                            {filteredMatches.map(match => (
                                <div className="accordion-flex" key={match.id}>
                                    <div className="accordion-flex-iteam accordion-flex-grow">
                                        <div className="accordion-favriote-row">
                                            <div className="accordion-sub-inner1">
                                                {match.date.split(' ')[0]} {/* Displaying the date part */}
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
                    ) : (
                        // Display message if no matches found
                        <div className="no-matches">No matches found for the selected month.</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MatchPage;
