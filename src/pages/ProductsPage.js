import React from "react";
import Hero from "../components/Hero";
import ProductBG from "../images/productsBcg.jpeg";
import Products from '../components/productsPage/Products'

export default function ProductsPage() {
  return (
    <>
      <Hero img={ProductBG} />
    
      <Products />
    </>
  );
}
