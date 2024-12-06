import SectionCategorie from "../image/img/card.png";
import { ReactComponent as ClockIcon } from "../image/icon/clock.svg";

export default function CategorieCards() {
  const Card = [
    {
      image: SectionCategorie,
      text: "Preparation a la certification togaf training program - part 1 (foundation)",
      time: "Duree de la formation : 2 jours",
      icon: ClockIcon,
    },
    {
      image: SectionCategorie,
      text: "Preparation a la certification togaf training program - part 2 (Certification)",
      time: "Duree de la formation : 3 jours",
      icon: ClockIcon,
    },
    {
      image: SectionCategorie,
      text: "Preparation a la certification togaf",
      time: "Duree de la formation : 2 jours",
      icon: ClockIcon,
    },
    {
      image: SectionCategorie,
      text: "foramtion tests logicial et automatic",
      time: "Duree de la formation : 4 jours",
      icon: ClockIcon,
    },
    {
      image: SectionCategorie,
      text: "preparation a la certification ISTQB avance test analyse",
      time: "Duree de la formation : 3 jours",
      icon: ClockIcon,
    },
    {
      image: SectionCategorie,
      text: "preparation a la certification technologique testing `A4Q selenume`",
      time: "Duree de la formation : 5 jours",
      icon: ClockIcon,
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="container flex flex-col gap-20">
        <h1 className="text-black text-center text-6xl font-bold">
          Spectere D'interodction
        </h1>
        <div className="grid grid-cols-3 gap-7">
          {Card.map((card) => (
            <div
              key={card.id}
              className="bg-white p-4 drop-shadow-2xl shadow-md rounded-lg"
            >
              <img
                src={card.image}
                alt=""
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-4 flex flex-col gap-2">
                <h1 className="text-xl text-black font-semibold">
                  {card.text}
                </h1>
                <div className="flex items-center gap-1">
                  <card.icon className="w-3 fill-[#A5A5A5]" />
                  <p className="text-[#A5A5A5]">{card.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
