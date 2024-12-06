import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offre from "./pages/Offre";
import Categorie from "./pages/Categorie";
import Formation from "./pages/Formation";
import Porfolio from "./pages/Porfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/offre" element={<Offre />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/porfolio" element={<Porfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
