import React from "react";
import '../styles/Projects.css'

export default function Projects() {
    return(
        <div className="projects-container my-custom-proj" id="project" >
          <h1 style={{color:"#7c1777ff"}} className="h1" data-aos="flip-up">Projects</h1>
          <div class="container  my-custom">
            <div class="row text-center ">

                <div class="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 custom-margin" data-aos="fade-left" >
                    <div className="project-card-1 card">
                        <div class="card-img">

                        </div>
                        <div className="card-details my-custom-p">
                            <p>VideoCallApp <a href="#"><i class="fa-regular fa-eye" style={{color: "#58c4c6"}}></i></a></p>
                            <p>Skills: Nodejs,Webrtc,Express,React</p>
                        </div>
                    </div>
                </div>
    
                <div class="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 custom-margin" data-aos="zoom-in-up">
                    <div className="project-card-2 card">
                        
                        <div class="card-img">
                            
                        </div>
                        
                        <div className="card-details my-custom-p">
                            <p>Travel-Tracker <a href="#"><i class="fa-regular fa-eye" style={{color: "#58c4c6"}}></i></a></p>
                            <p>Skills: Nodejs,PostGres,Express,React</p>
                        </div>
                    </div>
                </div>
                <div class="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 custom-margin" data-aos="fade-right">
                    <div className="project-card-3 card">
                        <div class="card-img">
                            
                        </div>
                        <div className="card-details my-custom-p">
                            <p>Blog App<a href="#"><i class="fa-regular fa-eye" style={{color: "#58c4c6"}}></i></a></p>
                            <p>Skills: Nodejs,Express,RestApi</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}