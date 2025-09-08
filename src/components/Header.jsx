import React from "react";
import '../styles/Header.css';


export default function Header(){
    return(
        <div className="navbar">
            <div className="nav-panel">
                <div className="nav-panel-diff">
                    <div className="Heading">
                        PortFolio
                        
                    </div>
                </div>

                <div className="nav-panel-diff-2">
                  <div className="list-items">
                    <ul>
                        {/* <li className="A"><a>About</a></li> */}
                        <li className="S"><a href="#skills">Skills</a></li>
                        <li className="E"><a href="#experience">Experience</a></li>
                        <li className="P"><a href="#project">Projects</a></li>
                        <li className="C"><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                  <div className="dropdown-container">
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle link-light fa-regular fa-square-caret-down" href="#" role="button" data-bs-toggle="dropdown" >
                              {/* <i class="fa-regular fa-square-caret-down "></i> */}
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end">
                            {/* <li><a class="dropdown-item" href="#">About</a></li> */}
                            <li><a class="dropdown-item" href="#skills">Skills</a></li>
                            <li><a class="dropdown-item" href="#experience">Experiernce</a></li>
                            <li><a class="dropdown-item" href="#project">Project</a></li>
                            <li><a class="dropdown-item" href="#contact">Contact</a></li>
                            {/* <li><a class="dropdown-item" href="#">Resume</a></li> */}
                            {/* <li><a class="dropdown-item" href="#">Feedback</a></li> */}
                            </ul>
                          </li>
                  </div>
                </div>
            </div>
        </div>
    )
}