import React, { useEffect } from "react";
import { useState } from "react";
import "./Header.css";
import MuteButton from "./MuteButton";

export default function Header() {

    return(
        <div className="header">
            <MuteButton />
            <h1 className="logo-container">
                <span className="logo dbz-font">Number Shuffle</span>
            </h1>
            <div className="right-container"></div>
        </div>
    );
}