import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch,} from "react-icons/fa";
import {  FiShoppingCart,  } from "react-icons/fi"
import {  TiHeartOutline } from "react-icons/ti"
import { useSelector } from 'react-redux';
import './Header.scss'

function Header() {

  const { items: favoriteItems } = useSelector((state) => state.favorite); // избранные
  const { items: cartItems } = useSelector((state) => state.delete);       // корзина

  return (
    <header className="header">
      <div className="top-header">
        <div className="header-select">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <select>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Exclusive</h2>

          <ul className="navlinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>

          <div className="nav-right">
            <div className="search-box">
              <input type="text" placeholder="What are you looking for?" />
            </div>

            <div className="icons">
              <FaSearch className="icon" />
              <Link to="/wishlist">
                <TiHeartOutline className="icon" />
                <p>{favoriteItems.length}</p>
              </Link>
              <Link to="/cart">
                <FiShoppingCart className="icon" />
                <p>{cartItems.length}</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Header
