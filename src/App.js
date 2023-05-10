import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/Navbar';
import Home from './components/pages/Home';
import ScrolltoTop from './components/molecules/ScrolltoTop'
import About from './components/pages/About';

function App() {
  return (
    <div>
      <Navbar />
      <ScrolltoTop >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      </ScrolltoTop >
    </div>
  );
}

export default App;
