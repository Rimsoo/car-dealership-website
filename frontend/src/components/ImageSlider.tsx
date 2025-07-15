import { useState, useEffect } from "react";
import chevron from "../assets/imageSlider/chevron-left-red.png";
import chevronBig from "../assets/imageSlider/chevron-left-grey.png";

export default function ImageSlider(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryDisplayed, setIsGalleryDisplayed] = useState(false);

  const ImageSlideStyle = {
    backgroundImage: `url(${props.slides[currentIndex]})`,
  };

  const goToPrevImg = () => {
    const newIndex =
      currentIndex === 0 ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextImg = () => {
    const newIndex =
      currentIndex === props.slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotsStyle: React.CSSProperties = {
    fontSize: "60px",
    position: "relative",
    bottom: "3.5px",
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImg();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div
      className="relative h-72 max-w-[620px] mx-auto mb-8
        xs:h-96
        lg:inline-block lg:min-w-[620px] slider--custom-margin"
    >
      {/* Slider principal */}
      <div
        className="container-slider__slider w-full h-full rounded-md bg-center object-cover bg-cover z-10 cursor-pointer"
        style={ImageSlideStyle}
        onClick={() => setIsGalleryDisplayed(true)}
      ></div>

      {/* Flèche gauche */}
      <div
        className="container-slider__arrow container-slider__left-arrow"
        onClick={goToPrevImg}
      >
        <img
          className="container-slider__arrow__img"
          src={chevron}
          alt="Véhicules premium Miechów"
        ></img>
      </div>

      {/* Flèche droite */}
      <div
        className="container-slider__arrow container-slider__right-arrow right-0"
        onClick={goToNextImg}
      >
        <img
          className="container-slider__arrow__img rotate-180"
          src={chevron}
          alt="Véhicules premium Cracovie"
        ></img>
      </div>

      {/* Points indicateurs */}
      <div
        className="hidden justify-center flex-wrap px-5
            sm:flex"
      >
        {props.slides.map((slide: string, index: number) => (
          <div
            className="px-0.5 text-3xl leading-6 text-yellow-600 cursor-pointer"
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={currentIndex === index ? dotsStyle : {}}
          >
            &#8226;
          </div>
        ))}
      </div>

      {/* Modal plein écran */}
      <div
        className="fixed top-0 left-0 w-screen h-screen z-30 bg-black bg-opacity-90"
        style={isGalleryDisplayed ? { display: "block" } : { display: "none" }}
        onClick={() => setIsGalleryDisplayed(false)}
      ></div>

      {/* Bouton de fermeture */}
      <div
        className="fixed -top-4 right-0 rotate-45 text-8xl font-light text-white text-opacity-90 cursor-pointer z-50"
        style={isGalleryDisplayed ? { display: "block" } : { display: "none" }}
        onClick={() => setIsGalleryDisplayed(false)}
      >
        +
      </div>

      {/* Slider modal */}
      <div
        className="flex fixed w-full h-4/5 z-40 top-10p left-0 items-center justify-between
            sm:justify-evenly"
        style={isGalleryDisplayed ? {} : { display: "none" }}
      >
        {/* Flèche gauche */}
        <img
          className="image-slider__big-arrows"
          src={chevronBig}
          alt="Véhicules premium sélectionnés"
          onClick={goToPrevImg}
          style={
            isGalleryDisplayed ? { display: "block" } : { display: "none" }
          }
        />

        {/* Image */}
        <img
          className="absolute w-full h-auto max-h-80vh object-contain
                sm:static sm:w-80vw"
          src={props.slides[currentIndex]}
          alt="Véhicules d\'occasion de qualité, concessionnaire de confiance"
        />

        {/* Flèche droite */}
        <img
          className="image-slider__big-arrows rotate-180"
          src={chevronBig}
          alt="Véhicules haut de gamme sélectionnés"
          onClick={goToNextImg}
          style={
            isGalleryDisplayed ? { display: "block" } : { display: "none" }
          }
        />
      </div>
    </div>
  );
}
