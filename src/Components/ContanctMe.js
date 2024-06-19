import React from 'react'
import { IoMailSharp } from "react-icons/io5";

function ContanctMe({handleScroll}) {
  return (
    <div>
        <div className='d-flex justify-content-center pt-5' style={{marginTop:'200px'}}>
            <h6 style={{color:'gray'}}>Get in touch</h6>
        </div>
        <div className='d-flex justify-content-center mb-5'>
            <h1 className='fw-bold' style={{fontSize:'60px'}}>Contact Me</h1>         
        </div>

        <div className='d-flex justify-content-center mt-5' style={{marginBottom:'300px'}}>
            <div className='d-flex justify-content-center'>
                <div className="card mx-3" style={{borderRadius:'50px' , borderWidth:'5px' }} >
                    <div className="card-body d-flex" >
                        <div className='row'    >
                            <div className='col-md-8 col-sm-12'>
                            <a href="mailto:arun.aaa7@gmail.com" target='_blank' rel='noopener'  style={{ textDecoration: 'none', color: 'inherit' }}>
                                <p className='fs-5 mb-0' style={{whiteSpace:'nowrap'}}> <IoMailSharp />  arun.aaa7@gmail.com</p>
                            </a>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                            <a href="http://linkedin.com/in/arun-kumar-h-s-42b92197" target='_blank' rel='noopener' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className='fs-5 mb-0'>  <IoMailSharp  /> Linkedin</p>
                            </a>
                            </div>
                        <div/>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='d-flex justify-content-center mt-5' >
            <div className='d-flex justify-content-center ' >
                <ul className=" d-flex  mb-2 " style={{listStyleType:'none'}}>
                <li className=" nav-item" onClick={()=>handleScroll('About')}>
                    <a className=" nav-link  name fs-2 space" style={{fontSize:'25px'  , cursor:'pointer'}} aria-current="page" >About</a>
                </li>
                <li className="nav-item" onClick={()=>handleScroll('Skills')}>
                    <a className="nav-link name fs-2 space"  style={{fontSize:'25px' , cursor:'pointer'}} >Skills</a>
                </li>   

                    <li className="nav-item" onClick={()=>handleScroll('Projects')}>
                    <a className="nav-link name fs-2 space"  style={{fontSize:'25px'  , cursor:'pointer'}} >Projects</a>
                </li>  
                <li className="nav-item" onClick={()=>handleScroll('Contact')}>
                    <a className="nav-link name fs-2 space"  style={{fontSize:'25px' , cursor:'pointer'}} >Contact</a>
                </li>            
                </ul>           
            </div>
        </div>

        <div className='d-flex justify-content-center m-5'>
            <p>© 2024 Arun kumar H S. All rights reserved.</p>
            </div>

  
    </div>
  )
}

export default ContanctMe
