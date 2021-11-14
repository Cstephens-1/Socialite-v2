import { useState } from "react"
import styled from "styled-components"

function About(){
    const [aboutMenuOpen, setAboutMenuOpen] = useState(false)

    //about menu functionality
    function toggleAboutMenu(){
        setAboutMenuOpen(!aboutMenuOpen)
        console.log(aboutMenuOpen)
    }

    function noAboutMenu(){
        return(
            <>
                <AboutButtonStyler onMouseEnter={toggleAboutMenu}>About</AboutButtonStyler>
            </>
        )
    }

    function showAboutMenu(){
        return(
            <>
                <AboutButtonStyler onMouseLeave={toggleAboutMenu}>Go away</AboutButtonStyler>
                <AboutMenu><h5>I'm the about menu!</h5></AboutMenu>
            </>
        )
    }

    return(
        <TriangleUp>{aboutMenuOpen? showAboutMenu() : noAboutMenu()}</TriangleUp>
    )
}

export default About

const TriangleUp = styled.div `
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 150px solid red;
  margin-left: 48.5vw;
  border-radius: 50%;
`

const AboutButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 15px;
  margin-top: 11vh;
  margin-left: -1.5vw;
  &:hover{
    color: black;
  }
`

const AboutMenu = styled.h1`
  background-color: white;
  height: 200px;
  width: 500px;
  margin-top: -20vh; 
  margin-left: 10vw;
`