import React from "react";
import { useEffect, useState } from "react";
import './CardGallery.css'

export default function CardGallery({level, onclick}) {

    const[selected, setSelected] = useState([]);

    const deck = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"];

    const [cards, setCards] = useState(deck);

    const shuffleCards = () => {
        const shuffled = [...cards].sort(() => Math.random() - 0.5); // Random shuffle
        setCards(shuffled); // Update state
      };

    function handleOnclick(e) {
        const audio = document.querySelector("#sound-select");
        audio.play();
        
        if(!selected.includes(e.target.src)) {
            onclick.handler(onclick.score+1);
            setSelected([...selected, e.target.src]);
        } else {
            onclick.handler("Gameover!");
        }
        shuffleCards();
    }

    return(
        <div className="container">
            {cards.map((card, index) => {
                return (
                    <div
                    key={index}
                    className="card" 
                    style={{maxWidth: "9%"}} 
                    onClick={handleOnclick}
                    >
                    {card}
                </div>
            );})}
        </div>
    )
}