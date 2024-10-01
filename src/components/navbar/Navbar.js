import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing if necessary
import './Navbar.css'; // Make sure to link to your CSS file

import bettinglogo from '../../assets/logo.svg';
import AMFootball from '../../assets/nav/AM-Football.svg';
import Basketball from '../../assets/nav/Basket-ball.svg';
import Boxing from '../../assets/nav/Boxing.svg';
import Football from '../../assets/nav/Football.svg';
import Icehockey from '../../assets/nav/Ice-hockey.svg';
import Latest from '../../assets/nav/Latest.svg';
import MMAa from '../../assets/nav/MMA.svg';
import Stremschedle from '../../assets/nav/Strem-schedle.svg';
import Tennis from '../../assets/nav/Tennis.svg';



function Navbar() {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);


    // Function to toggle the sidenav's visibility
    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //navbar dymaic
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Fetch menu data from WordPress REST API
        fetch('https://bettingpremier.ewallhost.com/blog/wp-json/wp/v2/top-nav')
            .then(response => response.json())
            .then(data => {
                // console.log('Fetched menu data:', data); // Log the data in the console
                setMenuItems(data);
            })
            .catch(error => console.error('Error fetching menu:', error));
    }, []);

    return (

        <>
            {/* 
<Link to="/">
             
             </Link> */}


            <header className={`headerscroll ${isScrolled ? 'scroll-up' : ''}`}>
                <div id="mvp-bot-nav-wrap" className="lft headerscroll">
                    <div className="mvp-main-box-cont">
                        <div className="head_container">
                            <div className="logo">
                                <Link to="/">
                                    <img src={bettinglogo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="menu" id="myTopnav">
                                <ul className="header-ul">


                                    <li className="icon" onClick={toggleSidenav}>
                                        &#9776;
                                    </li>

                                  
                                    {menuItems[1] && (
                                        <li className="header-li" key={menuItems[1].id}>
                                            <a href="https://bettingpremier.ewallhost.com/blog/">
                                                <img className="menu-item-icon" src={menuItems[1].src} alt={menuItems[1].name} />
                                                <span>{menuItems[1].name}</span>
                                            </a>
                                        </li>
                                    )}

                                    {menuItems[2] && (
                                        <li className="header-li" key={menuItems[2].id}>
                                            <Link to="/schedule">
                                                <img className="menu-item-icon" src={menuItems[2].src} alt={menuItems[2].name} />
                                                <span>{menuItems[2].name}</span>
                                            </Link>
                                        </li>
                                    )}

                                    {menuItems[3] && (
                                        <li className="header-li" key={menuItems[3].id}>
                                            <Link to="/football">
                                                <img className="menu-item-icon" src={menuItems[3].src} alt={menuItems[3].name} />
                                                <span>{menuItems[3].name}</span>
                                            </Link>
                                        </li>
                                    )}
                                    {menuItems[4] && (
                                        <li className="header-li" key={menuItems[4].id}>
                                            <Link to="/basketball">
                                                <img className="menu-item-icon" src={menuItems[4].src} alt={menuItems[4].name} />
                                                <span>{menuItems[4].name}</span>
                                            </Link>
                                        </li>
                                    )}

                                    {menuItems[5] && (
                                        <li className="header-li" key={menuItems[5].id}>
                                            <Link to="/iceHockey">
                                                <img className="menu-item-icon" src={menuItems[5].src} alt={menuItems[5].name} />
                                                <span>{menuItems[5].name}</span>
                                            </Link>
                                        </li>
                                    )}

                                    {menuItems[6] && (
                                        <li className="header-li" key={menuItems[6].id}>
                                            <Link to="/amFootball">
                                                <img className="menu-item-icon" src={menuItems[6].src} alt={menuItems[6].name} />
                                                <span>{menuItems[6].name}</span>
                                            </Link>
                                        </li>
                                    )}



                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="mySidenav"
                    className={`sidenav ${isSidenavOpen ? 'open' : ''}`}
                    style={{ width: isSidenavOpen ? '100%' : '0' }}
                >

                    <div className="mobile-navbar">
                        <div className="mobile-logo">
                            <Link to="/">
                                <img src={bettinglogo} alt="Logo" />
                            </Link>
                            <button className="closebtn" onClick={toggleSidenav}>
                                &times;
                            </button>

                        </div>

                        <div className="mobile-nav-list">

                            <ul className="nav-list-ul">
                                <li className="nav-list-li">
                                    <a href="/">
                                        <img className="menu-item-icon-m" src={Latest} alt="Latest" /> <span className="navbar-text">Latest</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a href="/schedule">
                                        <img className="menu-item-icon-m" src={Stremschedle} alt="Latest" /> <span className="navbar-text">Stream Schedule</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a href="/football">
                                        <img className="menu-item-icon-m" src={Football} alt="Latest" /> <span className="navbar-text">Football</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a to="/">
                                        <img className="menu-item-icon-m" src={Basketball} alt="Latest" /> <span className="navbar-text">Basketball</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a to="/">
                                        <img className="menu-item-icon-m" src={Tennis} alt="Latest" /> <span className="navbar-text">Tennis</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a to="/">
                                        <img className="menu-item-icon-m" src={Icehockey} alt="Latest" /> <span className="navbar-text">Ice Hockey</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a to="/">
                                        <img className="menu-item-icon-m" src={AMFootball} alt="Latest" /> <span className="navbar-text">AM- Football</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a to="/">
                                        <img className="menu-item-icon-m" src={MMAa} alt="Latest" /> <span className="navbar-text">MMA</span>
                                    </a>
                                </li>
                                <li className="nav-list-li">
                                    <a to="/">
                                        <img className="menu-item-icon-m" src={Boxing} alt="Latest" /> <span className="navbar-text">Boxing</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </header>


        </>
    )

}


export default Navbar