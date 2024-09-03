import React, { useContext, useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png'

import { FiShoppingCart } from "react-icons/fi";
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {
  const [menu, setMenu] = useState("shop"); 
const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo"> {/* Changed 'class' to 'className' */}
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li> {/* Changed <></> to null */}
        <li onClick={() => setMenu("keyboard")}><Link  style={{textDecoration:'none'}} to='/keyboard'>Keyboard</Link>{menu === "keyboard" ? <hr /> : null}</li>
        <li onClick={() => setMenu("earphone")}><Link  style={{textDecoration:'none'}} to='/earphone'>Earphone</Link> {menu === "earphone" ? <hr /> : null}</li>
        <li onClick={() => setMenu("mouse")}><Link style={{textDecoration:'none'}} to='/mouse'>Mouse</Link> {menu === "mouse" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><FiShoppingCart className="cart-icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}