import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h1 style={{color:"#7c1777ff"}} className="h1" data-aos="zoom-out-left">Skills</h1>
      <div class="container text-center  my-custom-box" data-aos="slide-up">
         <div class="row mt-5" >
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"> <i className="f3d3 fa-brands fa-node-js fa-flip fa-2xl" style={{color: "#2f7c13"}}></i>NodeJs</div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"> <i className="fa-brands fa-react fa-spin fa-2xl" style={{color: "#154599"}}></i>React</div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"> <i className="fa-brands fa-java fa-beat-fade fa-2xl" style={{color: "#9d3801"}}></i>Java</div>
         </div>
         <div class="row mt-5 col-md-mb-3 col-sm-mb-3 col-4-mb-3">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"> <i className="fa-brands fa-square-js fa-shake fa-2xl" style={{color: "black"}}></i>JavaScript</div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"> <i className="fa-brands fa-docker fa-fade fa-2xl" style={{color: "#1649a2"}}></i>Docker</div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"> <i className="fa-brands fa-github fa-spin fa-spin-reverse fa-2xl"></i>GitHub</div>
         </div>
      </div>
      
    </div>
  );
}