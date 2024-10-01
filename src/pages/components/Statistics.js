import React from "react";
import './Components.css';

function Statistics() {

    return (

        <>

            <div class="Statistics-container-main">

                <div class="Statistics-container">
                    <div class="Statistics-row">
                        <div class="Statistics-row-list left-row">
                            <span class="statistics-progess one-bg "> 30% </span>
                        </div>
                        <div class="Statistics-row-list">
                            <span>Ball possession </span>
                        </div>
                        <div class="Statistics-row-list right-row">
                            <span class="statistics-progess two-bg"> 70% </span>
                        </div>

                    </div>
                    <div class="Statistics-row">
                        <div class="Statistics-row-list">
                            <progress id="file-left" value="32" max="100">72%</progress>
                        </div>
                        <div class="Statistics-row-list">
                            <progress id="file-right" value="72" max="100">72%</progress>
                        </div>
                    </div>
                </div>

                <div class="Statistics-container">
                    <div class="Statistics-row">
                        <div class="Statistics-row-list left-row">
                            <span class="statistics-progess "> 30% </span>
                        </div>
                        <div class="Statistics-row-list">
                            <span> Big chances </span>
                        </div>
                        <div class="Statistics-row-list right-row">
                            <span class="statistics-progess "> 70% </span>
                        </div>

                    </div>
                    <div class="Statistics-row">
                        <div class="Statistics-row-list">
                            <progress id="file-left" value="52" max="100">72%</progress>
                        </div>
                        <div class="Statistics-row-list">
                            <progress id="file-right" value="12" max="100">72%</progress>
                        </div>
                    </div>
                </div>

                <div class="Statistics-container">
                    <div class="Statistics-row">
                        <div class="Statistics-row-list left-row">
                            <span class="statistics-progess "> 30% </span>
                        </div>
                        <div class="Statistics-row-list">
                            <span> Goalkeeper saves </span>
                        </div>
                        <div class="Statistics-row-list right-row">
                            <span class="statistics-progess "> 70% </span>
                        </div>

                    </div>
                    <div class="Statistics-row">
                        <div class="Statistics-row-list">
                            <progress id="file-left" value="12" max="100">72%</progress>
                        </div>
                        <div class="Statistics-row-list">
                            <progress id="file-right" value="9" max="100">72%</progress>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Statistics;