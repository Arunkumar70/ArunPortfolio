import React from 'react'
import { PiMedalFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";

function Adout() {
  return (
    <div>
      <div className='d-flex justify-content-center pt-5'>
        <h6 style={{color:'gray'}}>Get to know more</h6>
      </div>
      <div className='d-flex justify-content-center'>
        <h1 className='fw-bold' style={{fontSize:'50px'}}>About</h1>
      </div>

      <div className="container text-center pt-5">
        <div className="row align-items-center " style={{marginTop:'100px'}}>
          <div className="col-md-4 col-xs-12 mt-3">
            <div className="card shadow-lg">
              <div className="card-body py-5">
                <PiMedalFill style={{width:'50px', height:'50px'}}/>
                <div><h4>Experiance</h4></div>
                <div><h6 style={{color:'gray'}} >8+ years</h6></div>
                <div><h6 style={{color:'gray'}} >AR/VR/MR and FrontEnd Developer</h6></div>
              </div>
            
            </div>
          </div>
          <div className="col-md-4 col-xs-12 mt-3">
            <div className="card shadow-lg">
              <div className="card-body py-5">
                <MdCastForEducation style={{width:'50px', height:'50px'}}/>       
                <div><h4>Education</h4></div>
                <div><h6 style={{color:'gray'}} >Bachelor of Engineering</h6></div>
                <br/>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xs-12 mt-3">
            <div className="card shadow-lg">
              <div className="card-body py-5">
                <MdCastForEducation style={{width:'50px', height:'50px'}}/>       
                <div><h4>Support</h4></div>
                <div><h6 style={{color:'gray'}} >Online</h6></div>
                <div><h6 style={{color:'gray'}} >Indian Timings</h6></div>
              </div>
            </div>
          </div>

          <div style={{marginTop:'100px' , marginBottom:'200px'}}>
            <p className='fs-5'>
            I am dynamic and creative developer with 8 years of experience in all areas of programming, including development, coding, deployment, automation, troubleshooting & testing. 3 years’ experience on full stack tech like REACT JS, Javascript, Java, Web development. 5+ years in app development using Unity, Vuforia, ARcore, and ARkit. Hands on knowledge on OOOPs, C# programming, Visual Studio. Worked on version control such as GitHub, Source Code, Plastic SCM and bitbucket. Excellent in R&D and Tech blogs for program tutorials where I wrote for Microsoft mixed reality (Setting up Photon Unity Networking - Mixed Reality | Microsoft Learn) 
            </p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Adout
