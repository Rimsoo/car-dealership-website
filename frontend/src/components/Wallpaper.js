import React, { useState, useEffect } from 'react';
import './Wallpaper.css';

export default function Wallpaper() {
    const [background, setBackground] = useState(1);
    let newBackground = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            newBackground++;
            newBackground === 6 && (newBackground = 1); // There is no sixth image so here the loop starts
            setBackground(newBackground);
        }, 4000);
        return () => clearInterval(interval);
    }, []);


    return (
        // <video src={require('../assets/cars-video.mp4')} autoPlay muted loop preload='true' playsInline />
        <img id='wallpaper' src={require(`../assets/wallpaper${background}.jpg`)} alt="Auta używane premium" />
    )
}