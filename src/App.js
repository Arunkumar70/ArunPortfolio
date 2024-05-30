import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import ContanctMe from './Components/ContanctMe';
import Projects from './Components/Projects';
import './App.css';
import { useRef , useEffect , useState} from 'react';
import { BsArrowUpCircleFill } from "react-icons/bs";

function App() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Use the scrollY value as needed
      console.log(scrollY);
      if(scrollY > 800){
        setShow(true);
      }
      else{
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSrollClick = (elem) =>{
    if(elem === 'Home'){
      home.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(elem === 'About'){
      about.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(elem === 'Skills'){
      skills.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(elem === 'Projects'){
      projects.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(elem === 'Contact'){
      contact.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
    


  const home = useRef();
  const about = useRef(); 
  const skills = useRef();
  const projects = useRef();
  const contact = useRef();

  return (<div  >
    <div>
      <Navbar handleScroll={handleSrollClick}/>
    </div>
      <div ref={home}>
        <Home handleScroll={handleSrollClick}/>
      </div>
      <hr/>
      <div ref={about}>
        <About/>
      </div>
      <hr/>
      <div ref={skills}>
        <Skills/>
      </div>
      <hr/>
      <div ref={projects}>
        <Projects/>
      </div>
      <hr/>
      <div ref={contact} >
        <ContanctMe handleScroll={handleSrollClick}/>
      </div>

      {show && <div className='d-flex justify-content-center' style={{position:'fixed', bottom:'40px', right:'40px', margin:'20px'}}>
        <BsArrowUpCircleFill style={{width:'50px', height:'50px', color:'gray', cursor:'pointer'}} onClick={()=>handleSrollClick('Home')}/>
      </div>}

  </div>)
}

export default App;
