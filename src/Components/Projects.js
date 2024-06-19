import React from 'react';
import MyPhoto from '../Image/Arun.jpg';
import project1 from '../Image/pj1.JPG';
import project2 from '../Image/pj2.JPG';
import project3 from '../Image/Pj3.png';
import project4 from '../Image/PJ4.png';
import project5 from '../Image/pj5.png';
import project6 from '../Image/pj6.png';
import project7 from '../Image/pj7.png';
import project8 from '../Image/pj8.png';
import project9 from '../Image/pj9.png';
import project10 from '../Image/pj10.png';
import project11 from '../Image/pj11.png';
import project12 from '../Image/pj12.png';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Projects() {
  return (
    <div>

        <div className='d-flex justify-content-center pt-5'>
            <h6 style={{color:'gray'}}>Browse My Recent</h6>
        </div>
        <div className='d-flex justify-content-center '>
            <h1 className='fw-bold' style={{fontSize:'50px'}}>Projects</h1>
        </div>

        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">

            <div className="carousel-item active" style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg   ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth "  style={{ height:'30%'}} >
                                    <img src={project11} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">ReactJS Website Development POC</h5>
                                            <p class="card-text">This website provides detailed of all web series and shows  broadcasted along with the channels they are showing up on.  Website provide schedule, channel list, country wise shows.</p>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>            
                                </div>

                            </div>     
                        </div>
                    </div>

                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg   ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth "  style={{ height:'30%'}} >
                                    <img src={project12} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Generative AI Advantages with ReactJS Development</h5>
                                            <p class="card-text">We develop website using ReactJS with the help of Generative AI toolset. This project is to discover advantages of using generative  AI while ReactJS development. We quantify it over various  aspects like Development time, Ease of use, Accuracy and  Usability.</p>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>            
                                </div>

                            </div>     
                        </div>
                    </div>

                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg   ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth "  style={{ height:'30%'}} >
                                    <img src={project1} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Vodafone 5G Reality Experience </h5>
                                            <p class="card-text">It’s a metaverse-based experience where people collaborate and converse  in a virtual environment with full-body avatars and vocal proximity.</p>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>            
                                </div>

                            </div>     
                        </div>
                    </div>

                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">


                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project2} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Eviden Metaverse Accelerator</h5>
                                            <p class="card-text">Eviden Metaverse application is a solution for Eviden digital twin metaverse for collaboration and onboarding people in company.</p>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>                                
                                </div>

                            </div>     
                        </div>
                    </div>

                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project3} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Digital Twin Network Rail </h5>
                                            <p class="card-text">Application is the digital twin of real train networking devices and its components.</p><br/><br/>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>            
                                </div>

                            </div>     
                        </div>
                    </div>

                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project4} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Digital Twin of Virtual Battery Assembly </h5>
                                            <p class="card-text">Realistic 3d environment of factory with  Manipulation of robot for battery assembly on tray  and details of robot functions.</p>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>                                
                                </div>

                            </div>     
                        </div>
                    </div>

                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project5} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Air Traffic control / Metaverse</h5>
                                            <p class="card-text">Metaverse solution for training air traffic control, here individual will log in as pilot or traffic controller with real time interaction to guid with weather scenarios.</p>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>            
                                </div>

                            </div>     
                        </div>
                    </div>
                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project6} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Data Visualization on Mixed Reality  </h5>
                                            <p class="card-text"> MRTK Converting real time data into to the 3D visualizing on mixed reality and having interaction with them.</p><br/>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>                                
                                </div>

                            </div>     
                        </div>
                    </div>
                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project7} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">De-Gen Surgical Experiment </h5>
                                            <p class="card-text"> HoloLens Medical Dicom Viewer application, which allows surgeons to view Dicom images without having to leave the place.</p><br/>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>            
                                </div>


                            </div>     
                        </div>
                    </div>
                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project8} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Holo-Kart game  </h5>
                                            <p class="card-text">Holo-kart is a HoloLens2 application that functions as a Go-Kart Racing guide and points collection system in an amusement park.</p><br/>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>                                
                                </div>

                            </div>     
                        </div>
                    </div>
                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">

                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project9} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">3D Model scanner </h5>
                                            <p class="card-text">Use case to create multiple image of any object to feed for object detection,  initially we need studio setup for taking images of object in all angles to feed backend for object detection but use of unity 3D models and take screen shot.</p><br/>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>            
                                </div>

                            </div>     
                        </div>
                    </div>
                </div>

                <div className="carousel-item " style={{marginTop:'100px', marginBottom:'150px'}}>    
                    <div className="container-lg ">
                        <div className=" d-flex align-items-center justify-content-center " >
                            <div className=" d-flex  align-items-center justify-content-center ">
                                <div class="card shadow-lg cardWidth m-5"  style={{ height:'30%'}}>
                                    <img src={project10} class="card-img-top" alt="..." style={{width:'100%' , height:'450px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Translator Application </h5>
                                            <p class="card-text">The translator app is a tool that enables users to comprehend foreign languages in their native tongue. It is divided into two phases: local and global.</p><br/><br/>
                                            <a href="#" class="btn btn btn-outline-dark rounded-pill">Demo Video</a>
                                        </div>                                
                                </div>

                            </div>     
                        </div>
                    </div>
                </div>
                
            </div>
            <button className="carousel-control-prev z-1" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" >
                <span className="carousel-control-prev-icon z-1" aria-hidden="true"  ><FaChevronLeft style={{color:"black" , width:'50px' , height:'50px'}}/> </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next z-1" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon z-1" aria-hidden="true"><FaChevronRight style={{color:"black" , width:'50px' , height:'50px'}}/> </span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Projects
