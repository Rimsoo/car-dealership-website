import React from 'react';
import './Wallpaper.css';
// import video from './assets/cars-video.mp4';

export default function Wallpaper() {

    return (
        <video src='./assets/cars-video.mp4' autoPlay loop muted />
    )
}