import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'; 
import keyboard_banner from './Components/Assets/Frontend_Assets/keyboardBanner.png'
import earphone_banner from './Components/Assets/Frontend_Assets/earphoneBanner.png'
import mouse_banner from './Components/Assets/Frontend_Assets/mouseBanner.png'
import Chatbot from './Components/ChatBot/ChatBot';
import Search from './Pages/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/keyboard' element={<ShopCategory banner={keyboard_banner} category="keyboard" />} />
          <Route path='/earphone' element={<ShopCategory banner ={earphone_banner}category="earphone" />} />
          <Route path='/mouse' element={<ShopCategory banner ={mouse_banner} category="mouse" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Chatbot/>
        <Footer/>
      </BrowserRouter>

    </div >
  );
}

export default App;

