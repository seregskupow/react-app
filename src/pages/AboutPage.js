import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import heroBcg from "../images/aboutBcg.jpeg";
import Info from '../components/AboutPage/Info'

export default function AboutPage() {
  return (
    <>
      <Hero img={heroBcg}></Hero>
      <Info></Info>
    </>
  );
}
