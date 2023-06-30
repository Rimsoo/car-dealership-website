import React from 'react';
import './Wallpaper.css';
// import video from './assets/cars-video.mp4';

export default function Wallpaper() {

    return (
        <video src={require('../assets/cars-video.mp4')} autoPlay muted loop preload='true' playsInline />
    )
}