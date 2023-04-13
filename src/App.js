
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';
import Blog from './pages/Blog'
import BlogDeatails from './pages/BlogDetails'
import Elements from './pages/Elements'
import Contact from './pages/Contact'
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <>
    
  <BrowserRouter>
      <Routes>
      <Route path='home' element={<Home/>} />
      <Route path="product" element={<Product/>} />
      <Route path="about" element={<About />} />
      <Route path="productdetails" element={<ProductDetails />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blogDetails" element={<BlogDeatails />} />
      <Route path="elements" element={<Elements />} />
      <Route path="contact" element={<Contact />} />
      <Route path="ProductDetailPage" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
