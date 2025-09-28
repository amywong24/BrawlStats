import React from "react";
import { Link } from "react-router-dom";
import data from "../data/brawler.json";
import './Brawlers.css';

const Brawlers = () => {
    return (

        <div className="brawlers-container">
            <h1>Brawlers</h1>
            <div className="brawlers-grid">
                {data.items.map((brawler) => (
                    <div key={brawler.id} className="brawler-card">
                        <Link to={`/brawler/${brawler.id}`} className="brawler-link">
                            <img
                                src={`/brawler/${brawler.id}.png`}
                                alt={brawler.name}
                                className="brawler-image"
                            />
                            <h3>{brawler.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brawlers;