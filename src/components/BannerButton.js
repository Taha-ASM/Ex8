import HeaderImage from "../image/img/header.png";

export default function BannerButton() {
  return (
    <div className="relative h-96">
      <img
        src={HeaderImage}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className=" absolute inset-0 bg-black bg-opacity-50">
        <div className="container flex items-center justify-center h-full">
          <button className="bg-gradient-to-b from-[#20B7FB] to-[#4266ED] text-white text-lg font-semibold w-1/2 py-4 mr-4 rounded-xl">
            Diagnostic offer de vos besoins en formation
          </button>
        </div>
      </div>
    </div>
  );
}
