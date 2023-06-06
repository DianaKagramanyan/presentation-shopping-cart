import React from 'react';
import "../styles/Navbar.css"
import Input from "./Input";

const Navbar = ({setShow, size, searchInput, setSearchInput}) => {

  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>Shopping cart </span>
        <Input searchInput={searchInput}
               setSearchInput={setSearchInput}
        />
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fa fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
