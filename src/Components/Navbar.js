import React from 'react'

function Navbar({handleScroll}) {

  const headerStyle = {
    color:'white' , background:'#3c948b', fontSize:'14px', borderRadius:'0'
  }
  return (
    <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container" >
            <a className="navbar-brand w-75 name" style={{fontStyle: "normal", fontSize:'25px'}}  href="#"> <strong> Arun kumar H S</strong> </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

          
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item" onClick={()=>handleScroll('About')}>
                <a className="nav-link  name" style={{fontSize:'25px' ,marginInline:'20px'}} aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item" onClick={()=>handleScroll('Skills')}>
                <a className="nav-link name"  style={{fontSize:'25px' ,marginInline:'20px'}} href="#">Skills</a>
              </li>   

                 <li className="nav-item" onClick={()=>handleScroll('Projects')}>
                <a className="nav-link name"  style={{fontSize:'25px' ,marginInline:'20px'}} href="#">Projects</a>
              </li>  
              <li className="nav-item" onClick={()=>handleScroll('Contact')}>
                <a className="nav-link name"  style={{fontSize:'25px' ,marginInline:'20px'}} href="#">Contact</a>
              </li>            
            </ul>
            

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
