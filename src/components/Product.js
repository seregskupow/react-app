import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";

export default function Product({ item }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        
        return (
          <ProductWrapper className="product-wrapper col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
              
            <div className="card">
              <div className="img-container">
                <img
                  src={item.image}
                  className="card-img-top p-5"
                  alt="product"
                  style={{ height: "320px" }}
                />
                <div className="product-icons">
                  <Link
                    to={`/products/${item.id}`}
                    onClick={() => {
                      setSingleProduct(item.id);
                    }}
                  >
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(item.id)}
                  />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                  <p className="mb-0">{item.title}</p>
                  <p className="mb-0 text-main">${item.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const ProductWrapper = styled.div``;
