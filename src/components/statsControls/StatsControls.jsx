import React from "react";
import "./StatsControls.css";

const StatsControls = ({ username, level, hp, maxHP, mp, handleLevelChange, handleHpChange, handleMpChange, handleUsernameChange }) => {
    const currentHP = Math.round((hp / 100) * maxHP);
    return (
        <div className="controls">
            <div className="control-item">
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    maxLength={10}
                />
            </div>
            <div className="control-item">
                <label htmlFor="level">Level:</label>
                <input
                    id="level"
                    type="number"
                    value={level}
                    onChange={handleLevelChange}
                    min="0"
                    max="20"
                />
            </div>
            <div className="control-item">
                <label htmlFor="hp">HP:</label>
                <input
                    id="hp"
                    type="range"
                    value={hp}
                    onChange={handleHpChange}
                    min="0"
                    max="100"
                />
                <span className="hp-display">{`${currentHP} / ${maxHP}`}</span>
            </div>
            <div className="control-item">
                <label htmlFor="mp">MP:</label>
                <input
                    id="mp"
                    type="range"
                    value={mp}
                    onChange={handleMpChange}
                    min="0"
                    max="100"
                />
                <label className="percentage-display">{mp}%</label>

            </div>
        </div>
    );
};

export default StatsControls;
