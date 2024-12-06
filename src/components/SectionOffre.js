import SectionImage from "../image/img/card.png";
import { ReactComponent as More } from "../image/icon/more.svg";

export default function SectionOffre() {
  return (
    <div className="bg-white py-20">
      <div className="container flex flex-col gap-20">
        <h1 className="text-center text-black text-xl font-semibold px-48">
          Voluptate dolore cupidatat cupidatat esse Lorem laboris adipisicing
          veniam.Voluptate dolore cupidatat cupidatat esse Lorem laboris
          adipisicing veniam.
        </h1>
        <div className="flex flex-col gap-7">
          <img
            src={SectionImage}
            alt=""
            className="w-full h-96 object-cover rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <More className="w-10 h-10 hover:fill-blue-500" />
              <h1 className="text-black text-xl font-bold">
                Voluptate dolore cupidatat cupidatat esse.
              </h1>
            </div>
            <div className="flex flex-col items-start gap-5">
              <p className="text-[#2E2E2E] font-semibold text-lg">
                Voluptate dolore cupidatat cupidatat esse Lorem laboris
                adipisicing veniam.Voluptate dolore cupidatat cupidatat esse
                Lorem laboris adipisicing veniam.Voluptate dolore cupidatat
                cupidatat esse Lorem laboris adipisicing veniam.Voluptate dolore
                cupidatat cupidatat esse Lorem laboris adipisicing
                veniam.Voluptate dolore cupidatat cupidatat esse Lorem laboris
                adipisicing veniam.
              </p>
              <button className="bg-gradient-to-b from-[#20B7FB] to-[#4266ED] text-white text-lg font-semibold px-4 py-2.5 mr-4 rounded-xl">
                Contactez-Nous!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
