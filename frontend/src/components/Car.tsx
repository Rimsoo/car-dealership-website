import { useState } from "react";
import { NavLink } from "react-router-dom";
import calendar from "../assets/card/calendar.png";
import engineering from "../assets/card/engineering.png";
import gasoline from "../assets/card/gasoline.png";
import mileage from "../assets/card/mileage.png";
import gif from "../assets/card/loading.gif";

export default function Car(props: any) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className="Car
            inline-block relative border-2 border-white rounded-[20px] w-[270px] h-[370px] my-3 mx-3 font-inter "
    >
      {/* Container for a ribbon */}
      <NavLink to={`/CarPage/${props.id}`}>
        <span
          className={
            props.state === "soon" || props.state === "reserve"
              ? "car__container-ribbon--yellow"
              : props.state === "vendu"
                ? "car__container-ribbon--red"
                : "car__container-ribbon--green"
          }
        >
          {/* The ribbon */}
          <span
            className={
              props.state === "soon" || props.state === "reserve"
                ? "bg-gray-400"
                : props.state === "vendu"
                  ? "bg-black"
                  : "bg-yellow-600"
            }
          >
            {props.state === "soon"
              ? "À venir"
              : props.state === "vendu"
                ? "Vendu"
                : props.state === "reserve"
                  ? "Réservé"
                  : props.price + " EUR"}
          </span>
          {/* The shadow of the container as a pseudoelement ::after here */}
        </span>

        {/* Main photo */}

        <img
          className="w-full h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
          src={props.imageSource}
          alt="Solidne auta używane"
          style={isImageLoaded ? { display: "block" } : { display: "none" }}
          // loading="lazy"
          onLoad={handleImageLoad}
        />
        <img
          className="block h-[200px] p-[70px] mx-auto border-b-2 border-black"
          src={gif}
          alt="banderole"
          style={isImageLoaded ? { display: "none" } : { display: "block" }}
        />
      </NavLink>

      {/* Car's name */}
      <p className="flex items-center justify-center py-px px-2 h-[56px] text-center">
        <span className="inline-block leading-car-title text-xl align-middle">
          {props.title}
        </span>
      </p>

      {/* Infobox */}
      <div className="relative bottom-1 w-52 h-16 mx-auto">
        <div className="Car__description__container--odd">
          <img
            className="Car__description__container__img"
            src={calendar}
            alt="calendar"
          />
          {props.year}
        </div>
        <div className="Car__description__container--even">
          <img
            className="Car__description__container__img"
            src={mileage}
            alt="mileage"
          />
          {props.mileage}
          {" km"}
        </div>
        <div className="Car__description__container--odd">
          <img
            className="Car__description__container__img"
            src={engineering}
            alt="power"
          />
          {props.power}
          {" CV"}
        </div>
        <div className="Car__description__container--even">
          <img
            className="Car__description__container__img"
            src={gasoline}
            alt="carburant"
          />
          {props.fuel}
        </div>
      </div>

      <NavLink to={`/CarPage/${props.id}`}>
        <p
          className="w-[97px] h-[34px] leading-[34px] text-center tracking-[0.03em] text-[20px] border-2 border-black rounded-md block mx-auto bg-white text-black transition-colors duration-1000 no-underline cursor-pointer
                hover:bg-black hover:text-white"
        >
          DÉTAILS
        </p>
      </NavLink>
    </div>
  );
}
