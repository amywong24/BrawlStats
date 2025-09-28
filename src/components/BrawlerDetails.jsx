import React from "react";
import "./BrawlerDetails.css";
import data from "../data/brawler.json";
import { useParams } from "react-router-dom";

const BrawlerDetails = () => {
    const { id } = useParams();
    const brawler = data.items.find(b => b.id.toString() === id);

    return (
        <div className="brawler-details">
            <h1>{brawler.name}</h1>
            <img src={`/brawler/${brawler.id}.png`} alt={brawler.name} />
            <div className="star-powers">
                <h2>Star Powers</h2>
                {brawler.starPowers.map(starPower => (
                    <div key={starPower.id} className="ability">
                        <h3>{starPower.name}</h3>
                    </div>
                ))}
            </div>

            <div className="gadgets">
                <h2>Gadgets</h2>
                {brawler.gadgets.map(gadget => (
                    <div key={gadget.id} className="ability">
                        <h3>{gadget.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrawlerDetails;