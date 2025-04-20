export default function Footer() {
  return (
    <div
      id="Footer"
      className="flex flex-col absolute w-full leading-8 bottom-0 mt-8 bg-footer-gray text-white font-inter
        xs:flex-row xs:justify-between"
    >
      <span className="px-2">
        Copyright © {new Date().getFullYear()} GetTHEcar
      </span>
      <span className="px-2">Réalisation ARDEO Grzegorz Muszyński</span>
    </div>
  );
}
