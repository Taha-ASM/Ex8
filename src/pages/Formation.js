import Navbar from "../components/Navbar";
import BannerFormation from "../components/BannerFormation";
import Formations from "../components/Formations";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Formation() {
  return (
    <div>
      <Navbar />
      <BannerFormation />
      <Formations />
      <Map />
      <Footer />
    </div>
  );
}
