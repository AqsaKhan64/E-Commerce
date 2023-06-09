
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';
import Login from './pages/Login'
import Blog from './pages/Blog'
import BlogDeatails from './pages/BlogDetails'
import ProductDetailPage from './pages/ProductDetailPage'
import Elements from './pages/Elements'
import Contact from './pages/Contact'
import Card from './pages/Card'
import Card2 from './pages/Card2'
import Catagories from './pages/Catagories'
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import { CartProvider } from './pages/cart';

// import userData from './components/userData.json'

function App() {
  
  return (
    <>
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogDetails" element={<BlogDeatails />} />
      <Route path="/elements" element={<Elements />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/card" element={<Card />} />
      <Route path="/catagories" element={<Catagories />} />
      <Route path="/card2" element={<Card2 />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
      <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
