import { useState, useEffect } from 'react';
import '../components/Wallpaper.css';

export default function Wallpaper() {
    const [background1, setBackground1] = useState(1);
    const [background2, setBackground2] = useState(2);
    const [shouldUpdateBackground1, setShouldUpdateBackground1] = useState(true);

    let styling1 = {
        backgroundImage: `url(${require('../assets/backgrounds/wallpaper' + background1 + '.webp')})`
    }

    let styling2 = {
        backgroundImage: `url(${require('../assets/backgrounds/wallpaper' + background2 + '.webp')})`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (shouldUpdateBackground1) {
                setBackground1(prevValue => {
                    if (prevValue <  4) {
                        return prevValue + 2;
                    } else {
                        return prevValue%3;
                    }
                });
            } else {
                setBackground2(prevValue => {
                    if (prevValue <  4) {
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
                alt="Auta używane premium" 
                style={styling1}
            />
            {/* Background no. 2 */}
            <div
                // When background 1 is waiting for being updated - background 2 is shown
                className={shouldUpdateBackground1 ? 'wallpaper__img wallpaper__img-shown' : 'wallpaper__img wallpaper__img-hidden'}
                alt="Auta używane premium" 
                style={styling2}
            />
        </div>
    )
}