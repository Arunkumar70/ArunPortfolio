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
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Use the scrollY value as needed
      if(scrollY > 600 && scrollY < 1500){
        setShow(true);
        setScroll("About");
      }
      else if(scrollY > 1500 && scrollY < 2500){
        setShow(true);
        setScroll("Skills");
      }
      else if(scrollY > 2500  && scrollY < 3500){
        setShow(true);
        setScroll("Projects");
      }
      else if(scrollY > 3500){
        setShow(true);
        setScroll("Contact");
      }
      else{
        setShow(false);
        setScroll("");
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
    
  const handleTopClick = () => {

    window.scrollTo({top: 0, behavior: 'smooth'});
  }



  const home = useRef();
  const about = useRef(); 
  const skills = useRef();
  const projects = useRef();
  const contact = useRef();

  return (<div  >
    <div>
      <Navbar handleScroll={handleSrollClick} stateHandle = {scroll} handleTopClick = {handleTopClick}/>
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
        <BsArrowUpCircleFill style={{width:'50px', height:'50px', color:'gray', cursor:'pointer' ,zIndex:'1000'}} onClick={handleTopClick}/>
      </div>}

  </div>)
}

export default App;
