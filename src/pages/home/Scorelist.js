import React from "react";

// import FeatureMatch from "../../sidebar/FeaturedMatch";
import Topleagues from "../../sidebar/Topleagues";
import Alleagues from "../../sidebar/Alleagues";
import Add from "../../sidebar/Add";

import Scorematch from "../../pages/home/Scorematch";

// import AllCountry from "../../sidebar/AllCountry";
function Scorelist() {

    return (

        <>
            <div className="container-scorelist container-betting-tools">
                <div className="container-score">

                    <div className="column-score large">

                              <Scorematch/>




                    </div>

                    <div className="column-score small">

                        <div className="container-slide">
                            {/* <FeatureMatch /> */}
                            <Topleagues />
                            <Add/>
                            <Alleagues/>

                            {/* <AllCountry/> */}

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Scorelist;