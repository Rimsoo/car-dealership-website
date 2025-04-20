import wheel from "../assets/loader/tire.png";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-20 mx-auto my-7 block animate-spin-slow"
        src={wheel}
        alt="Voitures haut de gamme"
      />
      <p className="text-center font-bold text-lg">Chargement...</p>
    </div>
  );
}

