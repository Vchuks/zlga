import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/molecules/Navbar";
import Home from "./components/pages/Home";
import ScrolltoTop from "./components/molecules/ScrolltoTop";
import About from "./components/pages/About";
import School from "./components/pages/School";
import WasteDept from "./components/pages/WasteDept";
import BasicDept from "./components/pages/BasicDept";
import WaterDept from "./components/pages/WaterDept";
import CoastDept from "./components/pages/CoastDept";
import Contact from "./components/pages/Contact";
import Career from "./components/pages/Career";
import Faq from "./components/molecules/Faq";
import Environment from "./components/pages/Environment";
import Store from "./components/pages/Store";
import CarousellEvent from "./components/molecules/CarousellEvent";
import Medical from "./components/pages/Medical";
import AppointmentPage from "./components/pages/AppointmentPage";
import Gallery from "./components/pages/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <ScrolltoTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="school" element={<School />} />
          <Route path="basic" element={<BasicDept />} />
          <Route path="waste" element={<WasteDept />} />
          <Route path="water" element={<WaterDept />} />
          <Route path="coast" element={<CoastDept />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="career" element={<Career />} />
          <Route path="environment" element={<Environment />} />
          <Route path="store" element={<Store />} />
          <Route path="carousellevent" element={<CarousellEvent />} />
          <Route path="medical" element={<Medical />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
  </ScrolltoTop>
    </div>
  );
}

export default App;
