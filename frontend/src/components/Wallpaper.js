import React, { useState, useEffect } from 'react';
import './Wallpaper.css';

export default function Wallpaper() {
    const [background, setBackground] = useState(1);
    let newBackground = 0;
    let stylingTo = {
        height: 350,
        width: "100%",
        objectFit: "cover",
        display: "block",
        margin: "0 auto",
        opacity: 1,
        transition: "opacity 1s"
    }
    // let stylingFrom = {
    //     height: 350px,
    //     width: 100%,
    //     object-fit: cover,
    //     display: block,
    //     margin: 0 auto,
    //     opacity: 1,
    //     transition: opacity 1s
    // }

    useEffect(() => {
        const interval = setInterval(() => {
            newBackground++;
            newBackground === 6 && (newBackground = 1); // There is no sixth image so here the loop does another turn
            setBackground(newBackground);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        // <video src={require('../assets/cars-video.mp4')} autoPlay muted loop preload='true' playsInline />
        <img 
            id='wallpaper' 
            src={require(`../assets/wallpaper${background}.jpg`)} 
            alt="Auta używane premium" 
            style={stylingTo}
        />
    )
}