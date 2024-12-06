import Logoimage from "../image/img/Logo.png";
import { ReactComponent as SearchICon } from "../image/icon/search.svg";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  return (
    <div className="bg-white py-5">
      <div className="container flex items-center justify-between px-5">
        <div>
          <a href="#" className="flex items-center gap-3">
            <img src={Logoimage} alt="" />
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-10 text-black font-semibold">
            <a
              href="/home"
              className={`${
                location.pathname === "/home"
                  ? "text-[#2B9DC8]"
                  : "hover:text-[#2B9DC8] ease-in duration-200"
              }`}
            >
              <li>Accueil</li>
            </a>
            <a
              href="/offre"
              className={`${
                location.pathname === "/offre"
                  ? "text-[#2B9DC8]"
                  : "hover:text-[#2B9DC8] ease-in duration-200"
              }`}
            >
              <li>Offre integree</li>
            </a>
            <a
              href="/categorie"
              className={`${
                location.pathname === "/categorie"
                  ? "text-[#2B9DC8]"
                  : "hover:text-[#2B9DC8] ease-in duration-200"
              }`}
            >
              <li> Categorie</li>
            </a>
            <a
              href="/formation"
              className={`${
                location.pathname === "/formation"
                  ? "text-[#2B9DC8]"
                  : "hover:text-[#2B9DC8] ease-in duration-200"
              }`}
            >
              <li>Formation</li>
            </a>
            <a
              href="/porfolio"
              className={`${
                location.pathname === "/porfolio"
                  ? "text-[#2B9DC8]"
                  : "hover:text-[#2B9DC8] ease-in duration-200"
              }`}
            >
              <li>Profolio</li>
            </a>
            <a
              href="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-[#2B9DC8]"
                  : "hover:text-[#2B9DC8] ease-in duration-200"
              }`}
            >
              <li>Contact</li>
            </a>
            <button className="hover:fill-[#2B9DC8] ease-in duration-200">
              <SearchICon className="w-5 h-5" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
