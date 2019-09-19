import React from 'react'
import {ProductConsumer} from '../context'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'
import Services from '../components/HomePage/Services'
import Featured from '../components/HomePage/Featured'
export default function Home() {
    
    
    return (
        <>
        {/* <ProductConsumer>
            {value => {
                const{closeCart} = value;
                console.log(value);
                return <h1 onClick={closeCart}>hello from home page</h1>
            }}
        </ProductConsumer> */}
        <Hero title="awesome gadgets" max="true" img ={mainBcg}>
            <Link to="/products" className="main-link" style={{margin:'2rem'}}>our products</Link>
        </Hero>
        <Services/>
        <Featured/>
    </>
    )
}
