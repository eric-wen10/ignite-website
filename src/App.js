import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Programs from './Pages/Programs.js'
import OurTeam from './Pages/OurTeam.js'
import ContactUs from './Pages/ContactUs.js'
import AboutUs from './Pages/AboutUs.js'
import Navbar from "./Components/Navbar.js"
import Footer from "./Components/Footer.js"


function App() {
  return (
      <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/projects" element ={<Projects />} />
          <Route path = "/programs" element = {<Programs />} />
          <Route path = "/ourteam" element ={<OurTeam />} />
          <Route path = "/contactus" element = {<ContactUs />} />
          <Route path = "/aboutus" element = {<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
