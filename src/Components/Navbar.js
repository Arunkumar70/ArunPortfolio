import React from 'react'

function Navbar({handleScroll , stateHandle , handleTopClick}) {

  const headerStyle = {
    color:'white' , background:'#3c948b', fontSize:'14px', borderRadius:'0'
  }

  return (
    <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary bk shadow"  style={{position:'fixed' , top:'0', width:'100%',zIndex: "1000" }}>
          <div className="container" >
            <a onClick={()=>handleTopClick()}
            className="navbar-brand w-75 name" style={{fontStyle: "normal", fontSize:'25px ' , cursor:'pointer'}}  > <strong> Arun kumar H S</strong> </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

          
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item" onClick={()=>handleScroll('About')}>
                <a className={`nav-link name  ${stateHandle==="About"?   "fw-bolder" :""}`} style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} aria-current="page" >About</a>
              </li>
              <li className="nav-item" onClick={()=>handleScroll('Skills')}>
                <a className={`nav-link name  ${stateHandle==="Skills"?   "fw-bolder" :""}`}  style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} >Skills</a>
              </li>   

                 <li className="nav-item" onClick={()=>handleScroll('Projects')}>
                <a className={`nav-link name  ${stateHandle==="Projects"?   "fw-bolder" :""}`}  style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} >Projects</a>
              </li>  
              <li className="nav-item" onClick={()=>handleScroll('Contact')}>
                <a className={`nav-link name  ${stateHandle==="Contact"?   "fw-bolder" :""}`}  style={{fontSize:'25px' ,marginInline:'20px' , cursor:'pointer'}} >Contact</a>
              </li>            
            </ul>
            

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
