import React from "react";
import "./BrawlerDetails.css";
import data from "../data/brawler.json";
import { useParams } from "react-router-dom";
import { starPowerDescriptions, gadgetDescriptions } from "../data/abilitiesInfo";

const BrawlerDetails = () => {
    const { id } = useParams();
    const brawler = data.items.find(b => b.id.toString() === id);

    if (!brawler) {
        return <div>Brawler not found!</div>;
    }

    return (
        <div className="brawler-details">
            <div className="brawler-header">
                <img src={`/brawler/${brawler.id}.png`} alt={brawler.name} />
                <h1>{brawler.name}</h1>
            </div>
            <div className="star-powers">
                <h2>Star Powers</h2>
                {brawler.starPowers.map(starPower => (
                    <div key={starPower.id} className="ability">
                        <h3>{starPower.name}</h3>
                        <p>{starPowerDescriptions[starPower.id]}</p>
                    </div>
                ))}
            </div>

            <div className="gadgets">
                <h2>Gadgets</h2>
                {brawler.gadgets.map(gadget => (
                    <div key={gadget.id} className="ability">
                        <h3>{gadget.name}</h3>
                        <p>{gadgetDescriptions[gadget.id]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrawlerDetails;