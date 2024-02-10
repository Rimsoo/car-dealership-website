import { useState, useEffect } from 'react';
import '../components/ImageSlider.css';
import chevron from '../assets/imageSlider/chevron-left-red.png';
import chevronBig from '../assets/imageSlider/chevron-left-grey.png';

export default function ImageSlider(props: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGalleryDisplayed, setIsGalleryDisplayed] = useState(false);

    const ImageSlideStyle = {
        backgroundImage: `url(${props.slides[currentIndex]})`
    }

    const goToPrevImg = () => {
        const newIndex = (currentIndex === 0) ? props.slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNextImg = () => {
        const newIndex = (currentIndex === props.slides.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const dotsStyle = {
        fontSize: '60px',
        lineHeight: '47px',
        marginTop: "-12px"
    }

    // Auto sliding
    useEffect(() => {
        const interval = setInterval(() => {
            goToNextImg();
        }, 7000);
      
        return () => {
          clearInterval(interval);
        };
    }, [currentIndex]); // goToNextImg changes currentIndex invoking this effect which invokes goToNextImg making loop.
    
    return (
        <div className="container-slider">
            {/* Smaller slider without modal */}
            <div 
                className='ImageSlide' 
                style={ImageSlideStyle}
                onClick={() => setIsGalleryDisplayed(true)}
            ></div>
            
            {/*  Left arrow */}
            <div 
                className='container-slider__left-arrow' 
                onClick={goToPrevImg}
            >
                <img src={chevron} alt='Samochody premium Miechów'></img>
            </div>

            {/*  Right arrow */}
            <div 
                className='container-slider__right-arrow' 
                onClick={goToNextImg}
            >
                <img src={chevron} alt='Samochody premium Kraków'></img>
            </div>

            {/* Dots */}
            <div
                className="container-slider__dots-area"
            >
                {props.slides.map((slide: string, index: number) => (
                    <div 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={currentIndex === index ? dotsStyle : {}}
                    >
                        &#8226;
                    </div>
                ))} 
            </div>

            {/* Background for the modal */}
            <div id='gallery-modal-overlay' 
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                onClick={() => setIsGalleryDisplayed(false)}
            ></div>

            {/* Left arrow */}
            <img 
                className='gallery-modal__left-arrow gallery-modal__arrow' 
                src={chevronBig}
                alt='Wyselekcjonowane auta premium'
                onClick={goToPrevImg} 
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
                />

            {/* --- Bigger slider with modal --- */}
            <div id='bigSlide' style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} >
                {/* Slide */}
                <img src={props.slides[currentIndex]} alt='Dobre auta używane, zaufany dealer' />
                {/*  Closing button */}
                <div 
                    id='close-gallery'
                    style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                    onClick={() => setIsGalleryDisplayed(false)}
                >+</div>/
            </div>

            {/* Right arrow */}
            <img 
                className='gallery-modal__right-arrow gallery-modal__arrow'
                src={chevronBig}
                alt='Wyselekcjonowane auta topowych marek'
                onClick={goToNextImg}
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
            />
            
        </div>
    )
}