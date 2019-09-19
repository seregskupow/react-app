import React from 'react';
import CartSection from '../components/CartPage'
import CartImg from '../images/storeBcg.jpeg'
import Hero from '../components/Hero'

export default function CartPage() {
  return (
    <>
    <Hero img={CartImg}/>
    <CartSection></CartSection>
</>
  );
}
