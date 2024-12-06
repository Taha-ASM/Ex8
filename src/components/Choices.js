import { ReactComponent as MicIcon } from "../image/icon/mic.svg";
import { ReactComponent as PlayIcon } from "../image/icon/play.svg";
import { ReactComponent as MoreIcon } from "../image/icon/more.svg";

export default function Choices() {
  const choices = [
    {
      Icon: MicIcon,
      text: "conseil et accompagnement",
    },
    {
      Icon: PlayIcon,
      text: "conseil et accompagnement",
    },
    {
      Icon: MoreIcon,
      text: "conseil et accompagnement",
    },
    {
      Icon: MicIcon,
      text: "conseil et accompagnement",
    },
    {
      Icon: PlayIcon,
      text: "conseil et accompagnement",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#20B7FB] to-[#4266ED] py-20">
      <div className="container">
        <div className="text-center text-white flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">Offre Integree</h1>
          <p className="mb-6 text-lg px-40">
            Quis dolor consectetur veniam veniam sint exercitation ut ea nostrud
            aliqua enim minim et sit. Quis dolor consectetur veniam veniam sint
            exercitation ut ea nostrud aliqua enim minim et sit.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 pt-20">
          {choices.map((choice) => (
            <div className="flex flex-col gap-5 items-center bg-white text-black py-16 px-10 rounded-3xl">
              <choice.Icon className="w-12 h-12 mb-3" />
              <p className="w-40 text-center text-lg">{choice.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
