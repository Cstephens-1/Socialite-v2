import { useState } from "react"
import styled from "styled-components"

function Projects(){

    const [projectsMenuOpen, setProjectsMenuOpen] = useState(false)

    //skills menu functionality
    function toggleProjectsMenu(){
        setProjectsMenuOpen(!projectsMenuOpen)
        console.log(projectsMenuOpen)
      }
    
      function noProjectsMenu(){
        return(
          <>
           <ProjectsButtonStyler onMouseEnter={toggleProjectsMenu}>Projects</ProjectsButtonStyler>
          </>
        )
      }
    
      function showProjectsMenu(){
        return(
          <>
           <ProjectsButtonStyler onMouseLeave={toggleProjectsMenu}>Go away</ProjectsButtonStyler>
           <ProjectsMenu><h5>I'm the Projects menu!!</h5></ProjectsMenu>
          </>
        )
      }






    return(
        <TriangleLeft>{projectsMenuOpen? showProjectsMenu() : noProjectsMenu()}</TriangleLeft>
    )
}

export default Projects

const TriangleLeft = styled.div `
    width: 0;
    height: 0;
    border-top: 100px solid transparent;
    border-right: 150px solid;
    border-right-color: red;
    border-bottom: 100px solid transparent;
    margin-left: 40vw;
    margin-top: 0vh;
    border-radius: 50%;
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
  &:hover{
    color: black;
  }
`

const ProjectsMenu = styled.h1`
  background-color: white;
  height: 800px;
  width: 500px;
  margin-top: -35vh; 
  margin-left: -30vw;
  border-radius: 15px;
`