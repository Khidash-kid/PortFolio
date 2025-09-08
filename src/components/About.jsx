import React from "react";
import '../styles/About.css'

export default function About() {
  return (
     <section className="hero">
      <div className="hero-div">
       <div className="hero-content">
        <h1 style={{fontFamily:"Playfair Display",color:"#7c1777ff"}}>Hi I'm Khidash Shah</h1>
        <p style={{fontFamily:"Open Sans",fontSize:"20px",marginTop:"5px"}}>
            I’m a passionate Web Developer / Software Engineer who loves turning ideas into reality through code and creativity.
        </p>
        <p style={{fontFamily:"Open Sans",fontSize:"20px"}}>With a strong foundation in React , JavaScript , Node . I specialize in building modern, user-friendly, and efficient digital experiences.</p>
        {/* <p style={{fontFamily:"Open Sans",fontSize:"20px"}}> My goal is to create solutions that not only look great but also perform seamlessly, making technology accessible and engaging for everyone.</p> */}
        
         <a href="/Resume.pdf" download={{name:"My-Resume.pdf"}}> <button className="button">Download Resume</button></a>
        {/* <a href="#projects" className="btn-primary">View Projects</a> */}
       </div>
       <div className="avatar">
        {/* <img src="../assets/WhatsApp Image 2025-08-23 at 13.51.42_91430021.jpg"></img> */}
       </div>
      </div>
    </section>
  );
}