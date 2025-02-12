import React, { useEffect, useState, useRef } from "react";
import CardGallery from './CardGallery'
import './GameScreen.css'
import Stopwatch from "./Stopwatch";

export default function GameScreen({ level }) {

    const [score, setScore] = useState(0);
    let time = useRef; 

    function setFinalTime(seconds) {
        time.current = seconds;
    }

    return (
        <>
            {score != "Gameover!" && score != level && (
                <div className="game-content">
                    <p className="time dbz-font"><b>Time: <Stopwatch callback={setFinalTime}/></b></p>
                    <h2 className="dbz-font score">Score: {score}/{level}</h2>
                    <CardGallery level={level} onclick={setScore} />
                </div>)}
            
            {score == level && (
            <div className="controls">
                <h2 className="dbz-font score">Score: {level / time.current}</h2>
                <form action="/"><button type="submit">Return to Home Screen</button></form>
            </div>)}
            {score == "Gameover!" && (
            <div className="controls">
                <h2>Gameover! Refresh the page to play again!</h2>
                <form action="/"><button type="submit">Return to Home Screen</button></form>
            </div>)}
        </>
    )
}