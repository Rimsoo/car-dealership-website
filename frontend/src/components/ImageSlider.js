import { useState } from 'react';
import '../components/ImageSlider.css';

export default function ImageSlider(props) {
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
        marginTop: "-12px"
    }

    return (
        <div className="container-slider">
            <div 
                className='ImageSlide' 
                style={ImageSlideStyle}
                onClick={() => setIsGalleryDisplayed(true)}
            ></div>

            <span 
                className='container-slider__left-arrow' 
                onClick={goToPrevImg}
            >
                &#8250;
            </span>

            <span 
                className='container-slider__right-arrow' 
                onClick={goToNextImg}
            >
                &#8250;
            </span>

            <div
                className="container-slider__dots-area"
            >
                {props.slides.map((slide, index) => (
                    <div 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        // style={dotsStyle}
                        style={currentIndex === index ? dotsStyle : {}}
                    >
                        &#8226;
                    </div>
                ))} 
            </div>

            {/* Bigger slider with modal */}
            <div id='gallery-modal-overlay' 
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                onClick={() => setIsGalleryDisplayed(false)}
            ></div>

            {/* <div id='gallery-modal' style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} > */}
            <div 
                id='close-gallery'
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                onClick={() => setIsGalleryDisplayed(false)}
                >+
            </div>
            <div 
                className='gallery-modal__left-arrow' 
                onClick={goToPrevImg} 
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
            >&#8250;</div>

            <img 
                id='bigSlide'
                src={props.slides[currentIndex]} 
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
            />

            <div 
                className='gallery-modal__right-arrow'
                onClick={goToNextImg}
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
            >&#8249;</div>
            {/* </div> */}
        </div>
    )
}