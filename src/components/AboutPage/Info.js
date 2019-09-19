import React from "react";
import Title from "../Title";
import aboutBG from "../../images/aboutBcg.jpeg";
import {Link} from 'react-router-dom'

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
             <img src={aboutBG} className="img-fluid img-thumbnail" alt="about company" style={{background:'#5f5e5e'}}/>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us"></Title>
            <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad vitae molestias facilis. Praesentium, ut natus officia laborum delectus voluptatum?</p>
            <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad vitae molestias facilis. Praesentium, ut natus officia laborum delectus voluptatum?</p>
              <button  className="main-link" style={{marginTop:'2rem'}}>more info</button>
          </div>
        </div>
      </div>
      
    </section>
  );
}
