import { useState, useEffect } from 'react';
import '../components/Wallpaper.css';
import wallpaper1 from '../assets/backgrounds/wallpaper1.webp';
import wallpaper2 from '../assets/backgrounds/wallpaper2.webp';
import wallpaper3 from '../assets/backgrounds/wallpaper3.webp';
import wallpaper4 from '../assets/backgrounds/wallpaper4.webp';
import wallpaper5 from '../assets/backgrounds/wallpaper5.webp';

const backgrounds = [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5];

export default function Wallpaper() {
    const [background1, setBackground1] = useState(0);
    const [background2, setBackground2] = useState(1);
    const [shouldUpdateBackground1, setShouldUpdateBackground1] = useState(true);

    let styling1 = {
        backgroundImage: `url(${backgrounds[background1]})`
    }
    
    let styling2 = {
        backgroundImage: `url(${backgrounds[background2]})`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (shouldUpdateBackground1) {
                setBackground1(prevValue => {
                    if (prevValue <  3) {
                        return prevValue + 2;
                    } else {
                        return prevValue%3;
                    }
                });
            } else {
                setBackground2(prevValue => {
                    if (prevValue <  3) {
                        return prevValue + 2;
                    } else {
                        return prevValue%3;
                    }
                });
            }
            setShouldUpdateBackground1(prevValue => !prevValue);
        }, 5000);

        return () => clearInterval(interval);

    }, [shouldUpdateBackground1]);

    return (
        <div id='wallpaper'>
            {/* Background no. 1 */}
            <div
                // When background 1 is waiting for being updated - must be hidden then
                className={shouldUpdateBackground1 ? 'wallpaper__img wallpaper__img-hidden' : 'wallpaper__img wallpaper__img-shown'} 
                style={styling1}
            />
            {/* Background no. 2 */}
            <div
                // When background 1 is waiting for being updated - background 2 is shown
                className={shouldUpdateBackground1 ? 'wallpaper__img wallpaper__img-shown' : 'wallpaper__img wallpaper__img-hidden'}
                style={styling2}
            />
        </div>
    )
}