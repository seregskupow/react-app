import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <nav>
            <div className="nav-center">
            <FaBars className="nav-icon" onClick={handleSidebar} />
            <img src={logo} alt="logo" />
            <div className="nav-cart">
              <FaCartPlus className="nav-icon" onClick={handleCart} />
              <div className="cart-items">{cartItems}</div>
            </div>
            </div>
          </nav>
        );
      }}
    </ProductConsumer>
  );
}

// const NavWrapper = styled.nav`
// position:-webkit-sticky;
// position:sticky;
// top:0;
// width:100%;
// padding:1rem 1.5rem;
// background:$mainGrey;
// border-bottom:3px solid $primaryColor;
// `;
