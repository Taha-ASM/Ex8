import Navbar from "../components/Navbar";
import BannerContact from "../components/BannerContact";
import CardImage from "../image/img/card.png";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <BannerContact />
      <div className="bg-white py-20">
        <div className="container flex items-center justify-evenly gap-5 px-40">
          <div className="flex-1">
            <img
              src={CardImage}
              alt=""
              className="h-[35rem] w-auto rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <div>
              <h1 className="text-black font-semibold">
                Chere Mada, Cher Monsieur
              </h1>
              <p className="text-[#2E2E2E]">
                Magna quis elit est aliqua mollit aliqua id nisi.Magna quis elit
                est aliqua mollit aliqua id nisi.Magna quis elit est aliqua
                mollit aliqua id nisi.Magna quis elit est aliqua mollit aliqua
                id nisi.Magna quis elit est aliqua mollit aliqua id nisi.Magna
                quis elit est aliqua mollit aliqua id nisi.Magna quis elit est
                aliqua mollit aliqua id nisi.
              </p>
            </div>
            <div className="h-96 flex items-center justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label className="text-black font-semibold">
                    Nome et prenom
                  </label>
                  <input
                    type="text"
                    className="bg-white text-black pr-20 pl-4 py-2 rounded-xl outline-none border border-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-semibold">Titre</label>
                  <input
                    type="text"
                    className="bg-white text-black pr-20 pl-4 py-2 rounded-xl outline-none border border-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-semibold">
                    Praticulier
                  </label>
                  <input
                    type="text"
                    className="bg-white text-black pr-20 pl-4 py-2 rounded-xl outline-none border border-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-semibold">Email</label>
                  <input
                    type="email"
                    className="bg-white text-black pr-20 pl-4 py-2 rounded-xl outline-none border border-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label className="text-black font-semibold">Telephone</label>
                  <input
                    type="email"
                    className="bg-white text-black pr-20 pl-4 py-2 rounded-xl outline-none border border-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-semibold">Messages</label>
                  <input
                    type="email"
                    className="bg-white text-black pr-20 pl-4 pb-[6.75rem] pt-3 rounded-xl outline-none border border-black"
                  />
                </div>
                <button className="bg-gradient-to-b from-[#20B7FB] to-[#4266ED] text-white text-lg font-semibold w-full py-2.5 mr-4 rounded-xl">
                  Contactez-Nous!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </>
  );
}
