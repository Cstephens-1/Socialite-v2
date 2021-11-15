import styled from "styled-components"

function AboutMenu(){
    return(
        <AboutMenuStyler><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></AboutMenuStyler>
    )
}

export default AboutMenu


const AboutMenuStyler = styled.h1`
  background-color: white;
  height: 800px;
  width: 500px;
  margin-top: -30vh; 
  margin-left: 16vw;
  border-radius: 12px;
`