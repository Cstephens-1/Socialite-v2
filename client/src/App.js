import myname from './myname.PNG';
import './App.css';
import { useSpring, animated } from 'react-spring'
import styled from "styled-components"
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {keyframes} from "styled-components"

function App() {
  // const [isToggled, setIsToggled] = useState(true);
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
    delay: 200,
  })
  // ...
  return (
    <AppWrapper>
      <animated.div style={styles}>I will fade in and out</animated.div>
      <ImgContainer>
        <ButtonStyler>About</ButtonStyler>
        <ButtonStyler>Projects</ButtonStyler>
        
        <ButtonStyler>Skills</ButtonStyler>
        <ButtonStyler>Contact</ButtonStyler>
      </ImgContainer>
      <ImgStyler src={myname} alt="" />
      {/* <About />
      <Projects />
      <Skills />
      <Contact /> */}

    </AppWrapper>
  )
}

export default App;



//components:
//about
//projects
//contact
//hobbies?
//skills


const AppWrapper = styled.div`
background-color: #2a3132;
top: 0;
bottom: 0;
left: 0;
right: 0;
position: absolute;
`
const MoveImage = keyframes`
  0% {width: 100%; height: 100%; margin-top: 20vh;}
  /* 30%{width: 70%; height: 70%; margin-top: 10vh; margin-right: 80vw; } */
  /* 60%{width: 30%; height: 30%; margin-top: 2vh; margin-right: 90vw;} */
  100%{width: 10%; height: 10%; margin-right: 98vw; top: 0; opacity: 30%; }
`

const ImgStyler=styled.img`
 width: 100%;
 height: 100%;
 animation-name: ${MoveImage};
 animation-duration: 5s;
 animation-fill-mode: forwards;
 position: absolute;
`





const ImgContainer = styled.div`
  margin-left: 28vw;
  width: 15%;
  height: 15%;
  display: flex;
  flex-direction: row;
  /* position: fixed; */
`

const ButtonStyler=styled.button`
  background-color: #2a3132;
  border-style: none;
  color: white;
  margin: 20px;
  font-size: 25px;
`