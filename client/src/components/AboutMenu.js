import { faBluetooth } from "@fortawesome/free-brands-svg-icons"
import { animated } from "@react-spring/web"
import styled from "styled-components"

function AboutMenu(){

    return(
      <AboutMenuStyler>
  
          <p>Full Stack Developer in React and Rails. Cory recently graduated from Flatiron School after a career change from Director of Recreational Programs at a gymnastics facility.</p>
          <p>When not coding, Cory loves to travel, experience new cultures, and explore nature. A certified scuba diver, Cory hopes to dive the Barrier Reef before it's gone, and swim with whale sharks.</p>
          <p>His most impactful experience was volunteering at an elephant sanctuary in Thailand, and it's a dream of his to use his skills to help assist animal rescues in additional ways.</p>
      
     </AboutMenuStyler>
    )
}

export default AboutMenu


const AboutMenuStyler = styled.h1`
  background-color: white;
  height: 400px;
  width: 500px;
  margin-top: -30vh; 
  margin-left: 16vw;
  border-radius: 12px;
  font-size: 18px;
`