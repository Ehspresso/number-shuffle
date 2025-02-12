import React from "react";
import { useEffect, useState } from "react";
import './CardGallery.css'

export default function CardGallery({level, onclick}) {

    const easyDeck = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"];
    const mediumDeck = ["Ekam", "Dve", "Trīṇi", "Catvāri", "Pañca", "Ṣaṭ", "Sapta", "Aṣṭa", "Nava", "Daśa"];
    const hardDeck = ["एकम्", "द्वे", "त्रीणि", "चत्वारि", "पञ्च", "षट्", "सप्त", "अष्ट", "नव", "दश"]
    const [cards, setCards] = useState(level == "5" ? easyDeck : level == "10" ? mediumDeck : hardDeck);
    const deck = level == "5" ? easyDeck : level == "10" ? mediumDeck : hardDeck
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

        console.log(card)
        console.log(currentIndex)
        console.log(deck)
        console.log(deck[currentIndex])

        // Check if the clicked card is the correct one
        if (card === deck[currentIndex]) {
            onclick((prevScore) => prevScore + 1); // Update score

            setCurrentIndex((prevCurrentIndex) => currentIndex + 1); // Move to the next card
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
                    onClick={() => handleOnClick(card)}
                    >
                    {card}
                </div>
            );})}
        </div>
    )
}