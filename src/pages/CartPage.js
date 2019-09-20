import React from 'react';
import CartSection from '../components/CartPage'
import CartImg from '../images/storeBcg.jpeg'
import Hero from '../components/Hero'

export default function CartPage(props) {
  return (
    <>
    <Hero img={CartImg}/>
    <CartSection history={props.history}></CartSection>
</>
  );
}
