import Navbar from "../components/Navbar";
import BannerCategorie from "../components/BannerCategorie";
import Overflow from "../components/Overflow";
import CategorieCards from "../components/CategorieCards";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Categorie() {
  return (
    <div>
      <Navbar />
      <BannerCategorie />
      <Overflow />
      <CategorieCards />
      <Map />
      <Footer />
    </div>
  );
}
