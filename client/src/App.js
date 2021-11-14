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
      {/* <animated.div style={styles}>I will fade in and out</animated.div> */}
      {/* <ImgContainer>
        <ButtonStyler>About</ButtonStyler>
        <ButtonStyler>Projects</ButtonStyler>
        
        <ButtonStyler>Skills</ButtonStyler>
        <ButtonStyler>Contact</ButtonStyler>
      </ImgContainer> */}
      <ImgStyler src={myname} alt="" />
      <About />
      {/* <Projects />
      <Skills />
      <Contact /> */}
      <TriangleUp><AboutButtonStyler>About</AboutButtonStyler></TriangleUp>
      <TriangleLeft><ProjectsButtonStyler>Projects</ProjectsButtonStyler></TriangleLeft>
      <TriangleDown><ContactButtonStyler>Contact</ContactButtonStyler></TriangleDown>
      <TriangleRight><SkillsButtonStyler>Skills</SkillsButtonStyler></TriangleRight>


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
background-color: #111;
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

const TriangleLeft = styled.div `
      width: 0;
      height: 0;
      border-top: 50px solid transparent;
      border-right: 150px solid red;
      border-bottom: 50px solid transparent;
      margin-left: 41vw;
      margin-top: 2vh;
`

const TriangleRight = styled.div `
    width: 0;
      height: 0;
      border-top: 50px solid transparent;
      border-left: 150px solid red;
      border-bottom: 50px solid transparent;
      margin-left: 56vw;
      margin-top: -14vw
`

const TriangleDown = styled.div `
 width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 150px solid red;
      margin-left: 50vw;
      margin-top: 2vh;
      position: relative;
      z-index: 1;
`

const TriangleUp = styled.div `
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 150px solid red;
  margin-left: 50vw;
`


const ImgContainer = styled.div`
  margin-left: 70vw;
  width: 15%;
  height: 12%;
  display: flex;
  flex-direction: row;
  position: absolute;
`

const AboutButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 15px;
  margin-top: 11vh;
  margin-left: -1.5vw;
`

const ContactButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 15px;
  margin-left: -1.7vw;
  margin-top: -13vh;
  position: absolute;
  z-index: 2;
`

const ProjectsButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 15px;
  margin-left: 3vw;
  margin-top: -1vh;
  position: absolute;
  z-index: 2;
`

const SkillsButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 15px;
  margin-left: -7vw;
  margin-top: -1vh;
  position: absolute;
  z-index: 2;
`

