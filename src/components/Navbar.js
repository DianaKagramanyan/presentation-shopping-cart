import React from 'react';
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">Shopping cart </span>
        <div className="cart">
          <span>
            <i className="fa fa-cart-plus"></i>
          </span>
          <span>1</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
