import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import m1 from '../../assets/imageapi/m1.png'; // Placeholder image for the league

const MatchPage = () => {
    const { id } = useParams(); // Grabs the URL parameter (id)
    const AllSeason = `/api/season/${id}/game`;

    const [matches, setMatches] = useState([]); // State for all match data
    const [filteredMatches, setFilteredMatches] = useState([]); // State for paginated matches
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Current month
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const [error, setError] = useState(null); // State for handling errors

    const matchesPerPage = 15;

    // Fetch the season data based on league id
    useEffect(() => {
        const fetchSeasons = async () => {
            setError(null); // Reset error state before fetching new data
            try {
                const response = await fetch(AllSeason, { method: 'POST' });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                if (json && json.data && json.data.length > 0) {
                    setMatches(json.data); // Store all matches
                    filterMatchesForMonth(json.data, currentMonth); // Filter matches for the current month initially
                } else {
                    setError('No league data found');
                }
            } catch (err) {
                setError('Error fetching league data');
                console.error('Fetch error:', err);
            }
        };

        fetchSeasons();
    }, [id]);

    // Filter matches for a specific month
    const filterMatchesForMonth = (allMatches, month) => {
        const monthMatches = allMatches.filter(match => {
            const matchMonth = new Date(match.date).getMonth() + 1; // Get match month (1-12)
            return matchMonth === month;
        });
        setFilteredMatches(monthMatches);
        setCurrentPage(1); // Reset pagination to first page
    };

    // Get current matches for pagination
    const indexOfLastMatch = currentPage * matchesPerPage;
    const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
    const currentMatches = filteredMatches.slice(indexOfFirstMatch, indexOfLastMatch);

    // Handle pagination (Next)
    const handleNext = () => {
        if (currentPage * matchesPerPage >= filteredMatches.length) {
            // (currentPage * matchesPerPage >= filteredMatches.length) {
            if (currentMonth !== 12) { // Prevent going past December
                goToNextMonth();
            }


        } else {
            setCurrentPage(prevPage => prevPage + 1); // Go to the next page of the current month
        }
    };

    // Handle pagination (Previous)
    const handlePrevious = () => {
        if (currentPage === 1) {
            // If on the first page of the current month, move to the previous month
            if (currentMonth !== 1) { // Prevent going past January
                goToPreviousMonth();
            }
            // if (currentMonth > 1) {
            //     goToPreviousMonth();
            // }
        } else {
            setCurrentPage(prevPage => prevPage - 1); // Go to the previous page of the current month
        }
    };

    // Go to the next month (stop at December)
    const goToNextMonth = () => {
        if (currentMonth < 12) {
            const newMonth = currentMonth + 1;
            setCurrentMonth(newMonth);
            filterMatchesForMonth(matches, newMonth); // Filter the matches for the new month
        }
    };

    // Go to the previous month (stop at January)
    const goToPreviousMonth = () => {
        if (currentMonth > 1) {
            const newMonth = currentMonth - 1;
            setCurrentMonth(newMonth);
            filterMatchesForMonth(matches, newMonth); // Filter the matches for the new month
        }
    };

    // Check if there are matches for the current month
    const hasMatchesForCurrentMonth = filteredMatches.length > 0;

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
                            <h4 className="league-heading-sub">All Matches </h4>
                        </div>
                    </div>

                    {/* Check if there are any matches for {currentMonth} */}
                    {currentMatches.length > 0 ? (
                        <div className="league-match-data-single">
                            {currentMatches.map(match => {

                                const utcDateString = match.date.replace(' ', 'T') + 'Z'; // Convert to a valid ISO date format
                                const theDate = new Date(Date.parse(utcDateString)); // Parse the date

                                // Options for formatting the date and time
                                const yearOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                                const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

                                // Format the date and time
                                const formatTime = theDate.toLocaleTimeString(undefined, timeOptions);
                                const formatDate = theDate.toLocaleDateString(undefined, yearOptions);


                                return (
                                    <div className="accordion-flex" key={match.id}>
                                        <div className="accordion-flex-iteam accordion-flex-grow">
                                            <div className="accordion-favriote-row">
                                                <div className="accordion-sub-inner1">
                                                    <div className="match-date">      <span className="live-date"> {formatDate} </span> - <span className="live-time"> {formatTime} </span> </div>
                                                    <div className="match-status"> {match.status}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-flex-iteam accordion-flex-grow-big">
                                            <div className="accordion-sub-iteam">
                                                <div className="accordion-sub-inner">
                                                    <div className="span-image-live">
                                                        {match.name || "Match name not available"}
                                                    </div>
                                                    <div className="span-live-count"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-flex-iteam-third accordion-flex-grow">
                                            <Link to={`/football/match-summary/${match.id}`}> View </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="no-matches">No matches found for the selected month.</div>
                    )}

                    {/* Pagination */}
                    <div className="pagination-btn">
                        <button className="pagination-button" onClick={handlePrevious} disabled={currentMonth === 1} >
                            Previous
                        </button>
                        <button className="pagination-button" onClick={handleNext} disabled={currentMonth === 12} >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MatchPage;
