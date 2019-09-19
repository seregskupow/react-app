import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import {Link} from 'react-router-dom'


export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
          const{cartOpen,cart,cartTotal,handleCart} = value;

        return (
          <SidecartWrap show ={cartOpen} className="side-cart">
            <ul>
              {cart.map(item=>{
                return(
                  <li key={item.id} className="cart-item mb-4">
                    <img width="35" src={item.image} alt="item img"/>
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitilize">amount : {item.count}</h6>
                    </div>
                  </li>
                )
              })}

            </ul>
            <h4 className="text-capitalize text-main">cart total: {cartTotal}</h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link" onClick={handleCart}>cart page</Link>
            </div>
          </SidecartWrap>
        );
      }}
    </ProductConsumer>
  );
}
const SidecartWrap = styled.div`
transform:${props =>props.show?'translateX(0)':'translateX(100%)'}
`;