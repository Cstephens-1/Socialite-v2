import myname from './myname.PNG';
import './App.css';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';
import styled from "styled-components"

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
        <ImgStyler src={myname} alt="" />
        <ButtonStyler>Skills</ButtonStyler>
        <ButtonStyler>Contact</ButtonStyler>
      </ImgContainer>
      </AppWrapper>
  )
}

export default App;

const AppWrapper = styled.div`
background-color: #2a3132;
top: 0;
bottom: 0;
left: 0;
right: 0;
position: absolute;
`

const ImgStyler=styled.img`
 width: 100%;
 height: 100%;
 
`
const ImgContainer = styled.div`
  margin-left: 28vw;
  width: 15%;
  height: 15%;
  display: flex;
  flex-direction: row;
  position: fixed;
`

const ButtonStyler=styled.button`
  background-color: #2a3132;
  border-style: none;
  color: white;
  margin: 20px;
  font-size: 25px;
`