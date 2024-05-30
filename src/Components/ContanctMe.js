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
                <div class="card" style={{borderRadius:'50px' , borderWidth:'5px' , width:'500px'}} >
                    <div class="card-body d-flex" >
                        <IoMailSharp className='ms-5 mx-2 mt-2'/> 
                          <p className='fs-5' style={{whiteSpace:'nowrap'}}>  arun.aaa7@gamil.com</p>
                          <IoMailSharp  className='ms-4 me-2 mt-2'/> 
                          <p className='fs-5'>  Linkedin</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='d-flex justify-content-center mt-5' >
            <div className='d-flex justify-content-center'>
                <ul className=" d-flex  mb-2 " style={{listStyleType:'none'}}>
                <li className=" nav-item" onClick={()=>handleScroll('About')}>
                    <a className=" nav-link  name fs-2" style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} aria-current="page" >About</a>
                </li>
                <li className="nav-item" onClick={()=>handleScroll('Skills')}>
                    <a className="nav-link name fs-2"  style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} >Skills</a>
                </li>   

                    <li className="nav-item" onClick={()=>handleScroll('Projects')}>
                    <a className="nav-link name fs-2"  style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} >Projects</a>
                </li>  
                <li className="nav-item" onClick={()=>handleScroll('Contact')}>
                    <a className="nav-link name fs-2"  style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} >Contact</a>
                </li>            
                </ul>           
            </div>
        </div>

        <div className='d-flex justify-content-center m-5'>
            <p>© 2021 Arun kumar H S. All rights reserved.</p>
            </div>

  
    </div>
  )
}

export default ContanctMe
