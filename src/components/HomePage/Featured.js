import React from "react";
import Product from "../Product";
import Title from "../Title";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

export default function Featured() {
  return (
    <section className="py-3">
      <div className="container">
        <Title title="featured products" center />
        <div className="row my-5">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;

              return (
                <>
                  {featuredProducts.map(item => (
                    <Product key={item.id} item={item} />
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
        <div className="row m-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
               all products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
