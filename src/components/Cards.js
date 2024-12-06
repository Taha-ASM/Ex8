import CardImage from "../image/img/card.png";

export default function Cards() {
  const cards = [
    {
      image: CardImage,
      title: "Histoire",
      text: "Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing. Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing.",
    },
    {
      image: CardImage,
      title: "Vision",
      text: "Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing. Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing.",
    },
    {
      image: CardImage,
      title: "Valeurs",
      text: "Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing. Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing.",
    },

    {
      image: CardImage,
      title: "Enseignants",
      text: "Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing. Cupidatat veniam duis ut est ut culpa enim nulla tempor cupidatat ut quis laborum adipisicing.",
    },
  ];
  return (
    <div className="relative bg-white py-20">
      <div className="absolute top-0 left-0 w-[30rem] h-[60rem] bg-gradient-to-b from-[#20B7FB] to-[#4266ED]"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[50rem] bg-gradient-to-b from-[#20B7FB] to-[#4266ED]"></div>
      <div className="relative z-10 flex items-center justify-between">
        <div className="container flex flex-col gap-20">
          <h1 className="text-black text-center text-4xl font-bold">
            Notre ADN
          </h1>
          <div className="grid grid-cols-2 gap-10">
            {cards.map((Cards) => (
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
  );
}
