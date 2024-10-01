import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../index.css';

import Blog from "../../post/blog/Blog";
import Latest from "../../post/blog/Latest";
import About from "../../pages/about/About";
import Scorelist from "../../pages/home/Scorelist";
import Loader from "../../pages/loader/Loader";

function Home() {
  // State to control the display of the loader
  const [showLoader, setShowLoader] = useState(true);

  // Use useEffect to hide the loader after 3 seconds
  useEffect(() => {
    // Set a timer to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500); // 3000 milliseconds = 3 seconds

    // Cleanup the timer if the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page - Sports Betting News, Tips ,Odds and Streams | Betting Stream</title>
        <meta
          name="description"  content="Sports Betting News, Tips ,Odds and Streams | Betting Stream"
        />
      </Helmet>

      <div className="mvp-main-box-cont">
        {/* Conditionally render the loader or the main content */}
        {showLoader ? (
          <Loader />
        ) : (
          <>
            <Scorelist />
            <Latest />
            <About />
            <Blog />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
