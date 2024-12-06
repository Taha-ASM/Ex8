import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SeactionHome from "../components/SectionHome";
import Choices from "../components/Choices";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <SeactionHome />
      <Choices />
      <Categories />
      <Cards />
      <Map />
      <Footer />
    </>
  );
}
