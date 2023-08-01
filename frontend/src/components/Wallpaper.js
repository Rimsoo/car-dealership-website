import React, { useState, useEffect } from 'react';

export default function Wallpaper() {
    const [background, setBackground] = useState(1);
    let newBackground = 0;
    let styling = {
        height: 350,
        width: "100%",
        display: "block",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundImage: `url(${require('../assets/backgrounds/wallpaper' + background + '.jpg')})`,
        transition: "all 1000ms linear 0.02s",
        // transition: "background-image 1000ms linear 0.02s",
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