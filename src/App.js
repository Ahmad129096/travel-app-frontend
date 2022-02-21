import logo from './logo.svg';
// import './App.css';
import NavbarComponent from './Components/Navebar/NavbarComponent';
import Contact from './Pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import CreateTravel from './Pages/Travel/Travel';
function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    <Routes>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Routes>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Routes>
    <Route path='/create' element={<CreateTravel/>}/>
    </Routes>
    
    </Router>
   
  );
}

export default App;
