import { useState } from "react"
import styled from "styled-components"

function Contact(){
    const [contactMenuOpen, setContactMenuOpen] = useState(false)

    //about menu functionality
    function toggleContactMenu(){
        setContactMenuOpen(!contactMenuOpen)
        console.log(contactMenuOpen)
    }

    function noContactMenu(){
        return(
            <>
                <ContactButtonStyler onMouseEnter={toggleContactMenu}>Contact</ContactButtonStyler>
            </>
        )
    }

    function showContactMenu(){
        return(
            <>
                <ContactButtonStyler onMouseLeave={toggleContactMenu}>Go away</ContactButtonStyler>
                <ContactMenu><h5>I'm the Contact menu!</h5></ContactMenu>
            </>
        )
    }



    return(
            <TriangleDown>{contactMenuOpen? showContactMenu() : noContactMenu()}</TriangleDown>
        )
}

export default Contact

const TriangleDown = styled.div `
      width: 0;
      height: 0;
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
      border-top: 150px solid red;
      border-radius: 50%;
      margin-left: 48.5vw;
      margin-top: 2vh;
      position: relative;
      z-index: 1;
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
  &:hover{
    color: black;
  }
`

const ContactMenu = styled.h1`
  background-color: white;
  height: 200px;
  width: 500px;
  margin-top: -20vh; 
  margin-left: 10vw;
`