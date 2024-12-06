import LogoImage from "../image/img/Logo.png";
import { ReactComponent as ClockIcon } from "../image/icon/clock.svg";

export default function Formations() {
  return (
    <div className="bg-white py-20">
      <div className="container flex justify-between">
        <div className="flex-1 flex flex-col gap-6 text-black font-semibold">
          <h1 className="text-black font-semibold text-3xl w-[34rem]">
            preparation do lundi togoafa9 trainning programation - Part 2
            (Certification)
          </h1>
          <div>
            <h1 className="text-[#2B9DC8] text-2xl font-semibold">
              methode de developpement d'architecture (ADM)
            </h1>
            <p>Perimetre</p>
            <p>Phases</p>
            <p>Principales activites</p>
          </div>
          <div>
            <h1 className="text-[#2B9DC8] text-2xl font-semibold">
              Techniquest et livrables cles du cycle ADM
            </h1>
            <p>Perimetre</p>
            <p>Phases</p>
            <p>Principales activites</p>
            <p>Modele d'organisation</p>
            <p>referentiels</p>
            <p>outils</p>
            <p>chantiers d'architeure</p>
            <p>gestion des acteurs concernes</p>
            <p>Patterns</p>
            <p>scenarios metiers</p>
            <p>vues et points de vue</p>
            <p>ecarts</p>
            <p>Plantification</p>
            <p>Conformite</p>
          </div>
          <div>
            <h1 className="text-[#2B9DC8] text-2xl font-semibold">
              Recommandations pour L'adapation de L'adm
            </h1>
            <p>Iteration</p>
            <p>niveaux de l'entreprise</p>
            <p>architecture de securite</p>
            <p>SOA</p>
          </div>
          <div>
            <h1 className="text-[#2B9DC8] text-2xl font-semibold">
              Cadre de contenu d'architecture
            </h1>
            <p>meta-modele du contenu</p>
            <p>elements d'architecture</p>
            <p>livrables</p>
            <p>building blocks</p>
          </div>
          <div>
            <h1 className="text-[#2B9DC8] text-2xl font-semibold">
              Continuum d'entreprise
            </h1>
            <p>Reutilisation</p>
            <p>partitionnement</p>
            <p>Referentiel d'archicture</p>
          </div>
          <div>
            <h1 className="text-black text-2xl font-semibold">
              Modeles de reference togaf9
            </h1>
            <p>Socle d'archicture</p>
            <p>modele de reference technique (TRM)</p>
            <p>
              modele de reference d'infrastructure d'information integrees
              (III-RM) (TRM)
            </p>
            <p></p>
          </div>
          <div>
            <h1 className="text-[#2B9DC8] text-2xl font-semibold">
              Cadre de capacite d'architectur
            </h1>
            <p>Socle d'archicture</p>
            <p>modele de reference technique (TRM)</p>
            <p>
              modele de reference d'infrastructure d'information integrees
              (III-RM) (TRM)
            </p>
            <p>
              modele de reference d'infrastructure d'information integrees
              (III-RM) (TRM)
            </p>
          </div>
        </div>
        <div className="flex-2 flex flex-col items-center gap-5">
          <img src={LogoImage} alt="" />
          <div className="flex flex-col gap-5">
            <h1 className="text-black font-semibold text-lg w-72">
              Preparation a la certification togaf9 trainning program - Part 2
              (certification)
            </h1>
            <div className="flex flex-col gap-2 w-full">
              <p className="h-7 flex items-center justify-center rounded-full text-black text-xs font-bold bg-[#B2E9FA]">
                togoafa9 trainning program Part 2
              </p>
              <p className="h-7 flex items-center justify-center rounded-full text-black text-xs font-bold bg-[#B2E9FA]">
                la certification togaf9 Part 2
              </p>
              <p className="h-7 flex items-center justify-center rounded-full text-black text-xs font-bold bg-[#B2E9FA]">
                togaf9 trainning program
              </p>
            </div>
            <button className="bg-gradient-to-b from-[#20B7FB] to-[#4266ED] text-white text-lg font-semibold w-full py-2.5 mr-4 rounded-xl">
              Contactez-Nous!
            </button>
            <div className="flex items-center gap-1 text-xs">
              <ClockIcon className="w-3 fill-[#A5A5A5]" />
              <p className="text-[#A5A5A5]">Duree de la formation : 3Jours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
