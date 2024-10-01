// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional: Add your own styling

const NotFound = () => {
  return (

    <div className="mvp-main-box-cont">
    <div className="not-found">
       <div className="pageerror">

       <h1>404</h1>
       </div>
       <div className="paratext">
       <p>Sorry, the page you are looking for does not exist.</p>
       </div>
      <Link to="/" className="go-home">Go to Home</Link>
    </div>
    </div>
  );
};

export default NotFound;
