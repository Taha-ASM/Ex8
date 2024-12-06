import HeaderImage from "../image/img/header.png";
import { ReactComponent as FacebookIcon } from "../image/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../image/icon/instagram.svg";
import { ReactComponent as InIcon } from "../image/icon/In.svg";

export default function Header() {
  return (
    <div className="relative h-screen">
      <img
        src={HeaderImage}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className=" absolute inset-0 bg-black bg-opacity-50">
        <div className="container flex items-center justify-center h-full">
          <div className="flex flex-col gap-5 px-4 text-white flex-1 max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-4">Disruptive Learning</h1>
            <p className="mb-6 text-lg">
              Quis dolor consectetur veniam veniam sint exercitation ut ea
              nostrud aliqua enim minim et sit. Quis dolor consectetur veniam
              veniam sint exercitation ut ea nostrud aliqua enim minim et sit.
              Quis dolor consectetur veniam veniam sint exercitation ut ea
              nostrud aliqua enim minim et sit.
            </p>
            <div className="mb-6">
              <button className="bg-gradient-to-b from-[#20B7FB] to-[#4266ED] text-white text-lg font-semibold px-4 py-2.5 mr-4 rounded-xl">
                Contactez-Nous!
              </button>
              <button className="border-2 text-white py-2 px-6 text-lg font-semibold rounded-xl">
                En savoir plus
              </button>
            </div>
            <div className="flex items-center gap-5">
              <hr className="w-16 border-white" />
              <div className="flex items-center gap-4">
                {/* Replace these with actual icons or imported components */}
                <FacebookIcon className="w-5 h-5 hover:fill-blue-500 fill-white transition-colors duration-300" />
                <InstagramIcon className="w-5 h-5 hover:fill-pink-500 fill-white transition-colors duration-300" />
                <InIcon className="w-5 h-5 hover:fill-blue-700 fill-white transition-colors duration-300" />
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}
