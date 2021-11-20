import styled from "styled-components"

function ProjectsMenu(){
    return(
        <>
        <ProjectsMenuStyler>
            <div>
                <h1>Coachable</h1>
                <button>Youtube</button>
                <button>Github</button>
            </div>
            <div>
                <h1>Socialite</h1>
                <button>Youtube</button>
                <button>Github</button>
            </div>
            <div>
                <h1>PoolBoy</h1>
                <button>Youtube</button>
                <button>Github</button>
            </div>
        </ProjectsMenuStyler>
        </>
    )
}

export default ProjectsMenu

const ProjectsMenuStyler = styled.h1`
  background-color: white;
  height: 800px;
  width: 500px;
  margin-top: -35vh; 
  margin-left: -30vw;
  border-radius: 15px;
`