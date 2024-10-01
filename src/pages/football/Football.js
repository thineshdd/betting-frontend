import React from "react";
import '../../index.css';

// import FeatureMatch from "../../sidebar/FeaturedMatch";
import Topleagues from "../../sidebar/Topleagues";
import Alleagues from "../../sidebar/Alleagues";
import Add from "../../sidebar/Add";
import Scorematch from "../../pages/home/Scorematch";


function Football() {

    return (

        <>

            <div className="mvp-main-box-cont">
                <div className="container-scorelist container-betting-tools">
                    <div className="container-score">

                        <div className="column-score large">


                            <Scorematch />


                        </div>

                        <div className="column-score small">

                            <div className="container-slide">

                            {/* <FeatureMatch /> */}
                            <Topleagues />
                            <Add/>
                            <Alleagues/>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Football;