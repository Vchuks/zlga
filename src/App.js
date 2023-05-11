import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/Navbar';
import Home from './components/pages/Home';
import ScrolltoTop from './components/molecules/ScrolltoTop'
import About from './components/pages/About';
import School from './components/pages/School';
import WasteDept from './components/pages/WasteDept';
import BasicDept from './components/pages/BasicDept';
import WaterDept from './components/pages/WaterDept';
import CoastDept from './components/pages/CoastDept';

function App() {
  return (
    <div>
      <Navbar />
      <ScrolltoTop >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="school" element={<School/>}/>
        <Route path="basic" element={<BasicDept/>}/>
        <Route path="waste" element={<WasteDept/>}/>
        <Route path="water" element={<WaterDept/>}/>
        <Route path="coast" element={<CoastDept/>}/>
      </Routes>
      </ScrolltoTop >
    </div>
  );
}

export default App;
