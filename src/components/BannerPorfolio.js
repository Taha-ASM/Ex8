import HeaderImage from "../image/img/header.png";

export default function BannerPorfolio() {
  return (
    <div className="relative h-96">
      <img
        src={HeaderImage}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className=" absolute inset-0 bg-black bg-opacity-50">
        <div className="container flex items-center h-full">
          <h1 className="text-6xl font-bold mb-4 text-white">Porfolio</h1>
        </div>
      </div>
    </div>
  )
}
