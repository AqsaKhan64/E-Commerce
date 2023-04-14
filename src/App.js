// import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';
import './index.css';
import ReactDOM from "react-dom/client";
import Login from './pages/Login';
import Card from './pages/Card';
import Card2 from './pages/Card2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catagories from './pages/Catagories';


function App() {
  
  return (
    <>
   
   <BrowserRouter>
      <Routes>
      <Route path='home' element={<Home/>} />
      <Route path="product" element={<Product/>} />
      <Route path="about" element={<About />} />
      <Route path="Login" element={<Login/>} />
      <Route path="Card" element={<Card/>} />
      <Route path="Catagories" element={<Catagories/>} />
      <Route path="Card2" element={<Card2/>} />
      <Route path="productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
   
    
    </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
