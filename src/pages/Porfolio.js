import Navbar from "../components/Navbar";
import BannerPorfolio from "../components/BannerPorfolio";
import Profolioimage from "../image/img/card.png";
import Logoimage from "../image/img/Logo.png";
import BannerButton from "../components/BannerButton";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Porfolio() {
  const Cards = [
    {
      image: Profolioimage,
      title: "Engine",
      description:
        "Ea consequat labore esse aute qui proident ex officia.Ea consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officia",
      imagelogo: Logoimage,
    },
    {
      image: Profolioimage,
      title: "Climits du maroc - heidelberg",
      description:
        "Ea consequat labore esse aute qui proident ex officia.Ea consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officia",
      imagelogo: Logoimage,
    },
    {
      image: Profolioimage,
      title: "eslsca - grupo planeta",
      description:
        "Ea consequat labore esse aute qui proident ex officia.Ea consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officia",
      imagelogo: Logoimage,
    },
    {
      image: Profolioimage,
      title: "iresen - green energy park",
      description:
        "Ea consequat labore esse aute qui proident ex officia.Ea consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officiaEa consequat labore esse aute qui proident ex officia",
      imagelogo: Logoimage,
    },
  ];
  const ADN = [
    {
      image: Profolioimage,
      title: "Histoire",
      text: "Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing. Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing.",
    },
    {
      image: Profolioimage,
      title: "Vision",
      text: "Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing. Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing.",
    },
  ];
  return (
    <div>
      <Navbar />
      <BannerPorfolio />
      <div className="bg-white py-20">
        <div className="container">
          <h1 className="text-black text-center text-6xl font-semibold">
            Une Approche Client Basee sur L'integrite Et La Transpare
          </h1>
          <div className="flex flex-col gap-20 py-20">
            <h1 className="text-black text-2xl font-semibold">
              Quelques References
            </h1>
            {Cards.map((i) => (
              <div className="flex items-center gap-10">
                <img
                  src={i.image}
                  alt=""
                  className="rounded-2xl w-[30rem] h-96 object-cover"
                />
                <div className="flex flex-col gap-10">
                  <h1 className="text-black font-semibold text-3xl">
                    {i.title}
                  </h1>
                  <p className="text-black ">{i.description}</p>
                  <img src={i.imagelogo} alt="" className="w-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-white py-20">
          <div className="absolute top-0 left-0 w-[20rem] h-[30rem] bg-gradient-to-b from-[#20B7FB] to-[#4266ED]"></div>
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-b from-[#20B7FB] to-[#4266ED]"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="container flex flex-col gap-20">
              <h1 className="text-black text-center text-4xl font-bold">
                Notre ADN
              </h1>
              <div className="grid grid-cols-2 gap-10">
                {ADN.map((Cards) => (
                  <div key={Cards.title}>
                    <img
                      src={Cards.image}
                      alt=""
                      className="w-full h-auto object-cover rounded-t-2xl"
                    />
                    <div className="bg-white rounded-b-3xl p-5">
                      <h1 className="text-2xl font-bold text-[#2B9DC8]">
                        {Cards.title}
                      </h1>
                      <p className="text-black text-lg font-semibold">
                        {Cards.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerButton />
      <Map />
      <Footer />
    </div>
  );
}
