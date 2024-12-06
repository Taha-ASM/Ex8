import SectionImage from "../image/img/section.png";

export default function SectionHome() {
  return (
    <div className="bg-white py-40">
      <div className="container flex items-center justify-around gap-20">
        <div className="flex-1 flex flex-col text-black">
          <h1 className="text-5xl text-black font-semibold">A Propos</h1>
          <p className="mb-6 mt-10 text-lg">
            Quis dolor consectetur veniam veniam sint exercitation ut ea nostrud
            aliqua enim minim et sit. Quis dolor consectetur veniam veniam sint
            exercitation ut ea nostrud aliqua enim minim et sit. Quis dolor
            consectetur veniam veniam sint exercitation ut ea nostrud aliqua
            enim minim et sit.
          </p>
          <p className="text-lg">
            Quis dolor consectetur veniam veniam sint exercitation ut ea nostrud
            aliqua enim minim et sit.
          </p>
        </div>
        <div className="flex-1">
          <img src={SectionImage} alt="" />
        </div>
      </div>
    </div>
  );
}
