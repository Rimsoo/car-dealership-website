import React, { useState, useEffect } from 'react';
import '../components/Wallpaper.css';

export default function Wallpaper() {
    const [background, setBackground] = useState(1);
    let newBackground = 0;
    // let styling = {
    //     display: 'block',
    //     backgroundImage: `url(${require('../assets/backgrounds/wallpaper' + background + '.webp')})`
    // }
    let styling = {
        backgroundImage: `url(${require('../assets/backgrounds/wallpaper' + background + '.webp')})`
    }

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
        <div
            id='wallpaper' 
            alt="Auta używane premium" 
            style={styling}
        />
    )
}