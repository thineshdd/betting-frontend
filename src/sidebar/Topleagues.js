import React, { useState, useEffect } from "react";
import '../index.css';



function Topleagues() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://bettingpremier.ewallhost.com/api/sports/football/country/us/league')
    //         .then(response => response.json())
    //         .then(json => {

    //             const sortedData = json.sort((a, b) => new Date(b.date) - new Date(a.date)); 
    //             setData(sortedData);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        <>
            <div className="match">
                <div className="match-header match-header-bg">
                    <div className="match-tournament">Top leagues</div>
                </div>
                <div className="match-content">
                    <div className="Top-leagues-list">
                        <ul>
                        <li className="list-leagues-item">
                                    {/* <img src="" width="24" height="24" className="sidebar-img" alt="league-logo" /> */}
                                    <span className="list-leagues"> CAF Champions League, Qualification </span>
                               
                                </li>

                            {/* {data.map((item) => (
                                <li className="list-leagues-item" key={item.id}>
                                    <img src={item.image} width="24" height="24" className="sidebar-img" alt="league-logo" />
                                    <span className="list-leagues"> {item.display_name} </span>
                               
                                </li>
                            ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topleagues;