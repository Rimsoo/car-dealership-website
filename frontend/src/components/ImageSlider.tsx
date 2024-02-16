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
        lineHeight: '48px',
        marginTop: "-7.5px"
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
        <div className="relative h-72 max-w-[620px] mx-auto cursor-pointer 
        xs:h-96
        lg:inline-block">
                {/* ---Smaller slider without modal--- */}
            {/* Slide */}
            <div 
                className='ImageSlide w-full h-full rounded-md bg-center object-cover bg-cover z-10' 
                style={ImageSlideStyle}
                onClick={() => setIsGalleryDisplayed(true)}
            ></div>
            
            {/*  Left arrow */}
            <div className='container-slider__left-arrow container-slider__arrow' onClick={goToPrevImg}>
                <img className="container-slider__arrow__img" src={chevron} alt='Samochody premium Miechów'></img>
            </div>

            {/*  Right arrow */}
            <div className='container-slider__right-arrow container-slider__arrow right-0' onClick={goToNextImg}>
                <img className="container-slider__arrow__img rotate-180" src={chevron} alt='Samochody premium Kraków'></img>
            </div>

            {/* Dots */}
            <div className="flex justify-center flex-wrap px-5 max-w-full mb-5">
                {props.slides.map((slide: string, index: number) => (
                    <div className='mx-0.5 my-px h-5 text-4xl text-red-600 leading-none cursor-pointer'
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={currentIndex === index ? dotsStyle : {}}
                    >
                        &#8226;
                    </div>
                ))} 
            </div>

                {/* --- Bigger slider with modal --- */}
            {/* Background for the modal */}
            <div className="fixed top-0 left-0 w-screen h-screen z-30 bg-black bg-opacity-90"
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

            {/* Slide */}
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