import './App.css';
import Navbars from './Components/Navbars';
import { Button,Navbar,Stack } from 'react-bootstrap';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Cart from './Components/Pages/Cart';
// import About from './Components/Pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Home />}  />
     <Route path='/products' element={<Navigate replace to="/services" />} />
     {/* <Route path='/about' element={<About />} /> */}
     <Route path='/shop' element={<Services />} />
     <Route path='/cart' element={<Cart />} />
     </Routes>
     </BrowserRouter>
    </div>
  
  );
}

export default App;
