import styled from "styled-components"


function ContactMenu({toggleContactMenu}){


    function closeContactMenu(){
        toggleContactMenu()
    }

    return(
            <ContactMenuStyler onMouseLeave={closeContactMenu}>
                <button>email</button>
                <button>phone</button>
                <button>LinkedIn</button>
                <button>Github</button>
            </ContactMenuStyler>
    )
}

export default ContactMenu

const ContactMenuStyler = styled.div`
  background-color: royalblue;
  height: 50px;
  width: 500px;
  margin-top:-2vh; 
  margin-left: -15vw;
  border-radius: 12px;
  color: black;
`