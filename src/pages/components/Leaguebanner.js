import React, { useState, useEffect } from 'react';
import './Components.css';
import { useParams } from 'react-router-dom';



import leaguebanner from '../../assets/imageapi/leaguebanner.png';
import leagueicon from '../../assets/imageapi/league-icon.png';


function Leaguebanner() {

    const { id } = useParams();
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const AllLeagueUrl = `/api/league/${id}`;

    useEffect(() => {
        fetch(AllLeagueUrl, { method: 'POST' })
            .then(response => response.json())
            .then(json => {
                console.log('Fetched 1league data:', json);
                if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
                   // console.log('League1 data:', json.data);
                    setLeague(json.data[0]); // Assuming the league details are in json.data
                } else {
                    setError('League not found');
                }
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching league data');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!league) {
        return <div>No league data available.</div>;
    }

    return (

        <>

            <div className="league-main-container  bg-image-color" data-color="blue">
                <div className="league-main-bg"> </div>
                <div className="league-main-row">

                    <div className="league-main-images">
                        <div className="league-main-imageslist"> <img src={leaguebanner}  alt={league.display_name} className="league-images-nav" /> </div>
                        <div className="league-content-list">
                            <h4 className="league-heading"> {league.display_name} </h4>
                            <div className="country-image mtb"> <span><img src={leagueicon} alt="England" width="36" height="36" className="league-images-sub" /> {league.country_code}</span> </div>
                            <div className="mtb">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );

}

export default Leaguebanner;