import React, { useState } from 'react';
import './StatsContainer.css';

const StatsContainer = ({hp, mp, level}) => (

    <div className="main-stats-container">
        
        <div className="parent">
            <div className="level">{level}</div>
            <div className="stats-container">
                <div className="hp-container">
                    <div className="hp-bar" style={{ width: `${hp}%` }}></div>
                    <div className="line quartile-25"></div>
                    <div className="line quartile-50"></div>
                    <div className="line quartile-75"></div>
                </div>
                <div className="mp-container">
                    <div className="mp-bar" style={{ width: `${mp}%` }}></div>
                </div>
            </div>
        </div>
    </div>
);

export default StatsContainer;