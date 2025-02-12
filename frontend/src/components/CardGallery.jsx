import React from "react";
import { useEffect, useState } from "react";
import './CardGallery.css'

export default function CardGallery({level, onclick}) {

    const deck = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"];
    const [cards, setCards] = useState(deck);
    const [currentIndex, setCurrentIndex] = useState(0);

    const shuffleCards = () => {
        const shuffled = [...cards].sort(() => Math.random() - 0.5); // Random shuffle
        setCards(shuffled); // Update state
      };

    // Shuffle cards once at the start
    useEffect(() => {
        shuffleCards();
    }, [level]);


    function handleOnClick(card) {
        const audio = document.querySelector("#sound-select");
        audio.play();

        // Check if the clicked card is the correct one
        if (card === deck[currentIndex]) {
            onclick(currentIndex + 1); // Update score
            setCurrentIndex(currentIndex + 1); // Move to the next card
            shuffleCards();
        } else {
            onclick("Gameover!"); // Game over
        }
    }

    return(
        <div className="container">
            {cards.map((card, index) => {
                return (
                    <div
                    key={index}
                    className="card" 
                    style={{maxWidth: "9%"}} 
                    onClick={handleOnClick(card)}
                    >
                    {card}
                </div>
            );})}
        </div>
    )
}