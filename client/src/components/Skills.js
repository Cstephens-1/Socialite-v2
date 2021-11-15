import { useState } from "react"
import styled from "styled-components"

function Skills(){
    const [skillsMenuOpen, setSkillsMenuOpen] = useState(false)

//skills menu functionality
function toggleSkillsMenu(){
    setSkillsMenuOpen(!skillsMenuOpen)
    console.log(skillsMenuOpen)
  }

  function noSkillsMenu(){
    return(
      <>
       <SkillsButtonStyler onMouseEnter={toggleSkillsMenu}>Skills</SkillsButtonStyler>
      </>
    )
  }

  function showSkillsMenu(){
    return(
      <>
       <SkillsButtonStyler onMouseLeave={toggleSkillsMenu}>Go away</SkillsButtonStyler>
       <SkillsMenu><h5>I'm the skills menu!</h5></SkillsMenu>
      </>
    )
  }



    return(
        <TriangleRight>{skillsMenuOpen? showSkillsMenu() : noSkillsMenu()}</TriangleRight>
    )
}

export default Skills

const TriangleRight = styled.div `
    width: 0;
      height: 0;
      border-top: 100px solid transparent;
      border-left: 150px solid red;
      border-bottom: 100px solid transparent;
      margin-left: 59vw;
      margin-top: -21vw;
      border-radius: 50%;
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
  &:hover{
    color: black;
  }
`

const SkillsMenu = styled.h1`
  background-color: white;
  height: 700px;
  width: 500px;
  margin-top: -30vh; 
  margin-left: 5vw;
  border-radius: 12px;
`