import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

export default function Hero({ img, title, max, children }) {
  console.log(img);
  return (
    <HeroWrapper max={max} img={img} className="hero">
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.div`
  min-height: ${props => (props.max ? "100vh" : "60vh")};
  background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${props => props.img}) no-repeat;
  background-size: cover;
  background-position: center center;
  
`;
Hero.defaultProps = {
  img: mainBcg
};
