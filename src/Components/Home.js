import React from 'react'
import MyPhoto from '../Image/Arun.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Home({handleScroll}) {
  return (
    <div>
        <div className=" container text-center " style={{marginTop:'200px'}}>
            <div className="row" style={{marginBottom:'250px'}}>
                <div className="col-md-6 col-sm-12 ">
                    <div className='d-flex justify-content-end' >                   
                        <img src={MyPhoto} className="rounded d-block shadow-lg"  style={{width:'60%', height:'60%' , marginRight:"100px"}} alt="My Photo "/>                   
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 pt-5">
                    <div className='d-flex flex-column '>
                        <p>Hello I'am </p>
                        <h3 style={{whiteSpace: "nowrap" }}>Arun kumar H S </h3><br/>
                        <h4 style={{whiteSpace: "nowrap", color:'gray' }}>AR/VR/MR and FrontEnd Developer </h4><br/>
                        <div>
                            <button type="button" className="btn btn-outline-dark rounded-pill" style={{margin:'10px'}}>Download CV</button>
                            <button onClick={()=>handleScroll('Contact')} type="button" className="btn btn-outline-dark rounded-pill" style={{margin:'10px'}}>Contact Me</button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className="p-3"><a href="" title="TVmaze Facebook page" ><FaLinkedin style={{width:'190%', height:"190%", color: 'black'}}/></a></div>
                            <div className="p-3"><a href="" title="TVmaze Facebook page" ><FaGithub  style={{width:'190%', height:"190%" ,color: 'black'}}/></a></div>
                        </div>               
                    </div> 
                </div>
    
            </div>
        </div>
    </div>
  )
}

export default Home
