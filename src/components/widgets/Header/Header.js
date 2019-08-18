import React from 'react'
import { Link } from 'react-router-dom'
  
const Header = () => {
    return(
        <header>
        <h1>Skyline Ivy</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              {/* <div className="carttotal" v-if="cartCount > 0">{{ cartCount }}</div> */}
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;