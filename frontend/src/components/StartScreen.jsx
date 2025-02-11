import React from "react";
import { useState } from "react";
import './StartScreen.css';
import { TypeAnimation } from 'react-type-animation';

export default function StartScreen({handleClick}) {

    const [visible, setVisible] = useState(false);
    const [sound, setSound] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        for(let input of e.target) {
            if(input.checked) {
                handleClick(input.value);
                break;
            }
        }
    }

    function handleOptionClick() {
        if(!sound) {
            const audio = document.querySelector("#sound-startup");
            audio.play();
            setSound(true);
        }
    }

    return(
        <>
            <div className="dbz-font wrapper">
                <TypeAnimation
                    sequence={[
                        "Choose a level:",
                        () => {setVisible(true)}
                    ]}
                    className="level-animation"
                    style={{fontSize: '1em'}}
                />
                {visible && (
                <form className="dbz-font levels" onSubmit={handleSubmit}>
                    <label className="level"><input onClick={handleOptionClick} name="level" type="radio" value="5" />Easy</label>
                    <label className="level"><input onClick={handleOptionClick} name="level" type="radio" value="10" />Medium</label>
                    <label className="level" style={{marginRight: "20px"}}><input onClick={handleOptionClick} name="level" type="radio" value="20" />Hard</label>
                    <br />
                    <button className="dbz-font" type="submit">Start Game</button>
                </form>)}
            </div>
        </>
    )
}