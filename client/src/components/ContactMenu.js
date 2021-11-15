import styled from "styled-components"


function ContactMenu({setContactMenuOpen}){


    function closeContactMenu(){
        setContactMenuOpen(true)
    }

    return(
            <ContactMenuStyler onMouseLeave={closeContactMenu}>
                <ContactButtonStyler>
                <button>corystephens012@gmail.com  </button>
                <button>985.373.6687</button>
                <button>LinkedIn</button>
                <button>Github</button>
                </ContactButtonStyler>
            </ContactMenuStyler>
    )
}

export default ContactMenu

const ContactMenuStyler = styled.div`
  background-color: black;
  height: 50px;
  width: 500px;
  margin-top:-2vh; 
  margin-left: -13vw;
  border-radius: 12px;
  color: black;
`

const ContactButtonStyler=styled.div`
    color: white;
    margin-top: 2vh;
    padding-top: 3vh;
    display: flexbox;
    flex-direction: row;
`