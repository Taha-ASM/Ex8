import Logoimage from "../image/img/Logo.png";
import { ReactComponent as FacebookIcon } from "../image/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../image/icon/instagram.svg";
import { ReactComponent as InIcon } from "../image/icon/In.svg";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="container">
        <div className=" flex items-center justify-around gap-40">
          <div className="flex flex-col items-center gap-10 flex-2">
            <img src={Logoimage} alt="" className="w-40 h-auto" />
            <div className="flex items-center gap-5">
              <div className="border-b-2 border-[#2B9DC8] w-20"></div>
              <div className="flex items-center gap-4">
                <FacebookIcon className="w-5 h-5 fill-[#2B9DC8]" />
                <InstagramIcon className="w-5 h-5 fill-[#2B9DC8]" />
                <InIcon className="w-5 h-5 fill-[#2B9DC8]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-1">
            <div className="flex flex-col gap-5">
              <h1 className="text-black font-bold text-3xl">Acces rapide</h1>
              <ul className="text-black flex flex-col gap-2 font-semibold">
                <a href="" className="active text-[#2B9DC8]">
                  <li>Accueil</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Offre integree</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>A propps</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Categorie</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Formation</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Portfolio</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Contact</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Mentions legales</li>
                </a>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-black font-bold text-3xl">Formation</h1>
              <ul className="text-black flex flex-col gap-2 font-semibold">
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Accueil</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Offre integree</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>A propps</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Categorie</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Formation</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Portfolio</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Contact</li>
                </a>
                <a
                  href=""
                  className="hover:text-[#2B9DC8] ease-in duration-200"
                >
                  <li>Mentions legales</li>
                </a>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-black font-semibold text-3xl">Formation</h1>
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-[#2B9DC8] font-bold text-xl">E-MAIL</h1>
                  <p className="text-black text-lg">tahabrec@gmail.com</p>
                </div>
                <div>
                  <h1 className="text-[#2B9DC8] font-bold text-xl">
                    Telephone
                  </h1>
                  <p className="text-black text-lg">+212 6280989872</p>
                </div>
                <div>
                  <h1 className="text-[#2B9DC8] font-bold text-xl">Address</h1>
                  <p className="text-black text-lg">
                    Cleverue Council Institual SARL
                  </p>
                  <p className="text-black text-lg">
                    133 rue Med Smiha, Jawhart Med Smiha
                  </p>
                  <p className="text-black text-lg">ETG 6 appt 35</p>
                  <p className="text-black text-lg">Agadir, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center py-10 text-[#A5A5A5]">
          CopyRight 2022, Clever Council All rights reserved.
        </p>
      </div>
    </div>
  );
}
