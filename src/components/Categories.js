import HeaderImage from "../image/img/header.png";

export default function Categories() {
  const Categorie = [
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
    {
      image: HeaderImage,
      title: "Langues & Bureatique",
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="container flex flex-col items-center gap-20">
        <h1 className="text-black text-center text-5xl font-bold">Categorie</h1>
        <div className="grid grid-cols-4 gap-10">
          {Categorie.map((Categorie) => (
            <div className="relative w-80 h-80 ">
              <img
                src={Categorie.image}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 p-5 bg-gradient-to-t from-black via-transparent to-transparent text-white rounded-b-2xl">
                <h1 className="text-lg font-semibold">{Categorie.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
