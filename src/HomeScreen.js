import './App.css';
import styled from "styled-components"

const HeaderImageBoundingBox = styled.div`
  height: 70vh;
  width: 100vw;
`

const HeaderImage = styled.img`
  height: 100%;
  width: 100%;
`

const GroupMembers = styled.p`
  font-size: calc(10px + 3vmin);
`

function HomeScreen() {
  return (
      <div>
        <HeaderImageBoundingBox>
            <HeaderImage src={"../starfish-boxes.png"}></HeaderImage>
        </HeaderImageBoundingBox>
        
        <header className="App-header">
            Spring 2022 W210 Capstone
            <br/>
            Crown of Thorns Starfish
            <GroupMembers>
            by Alan Zhang, Frank Tang, Jocelyn Lu, Joseph Wood, and Spencer Hong
            </GroupMembers>
        </header>
      </div>
  );
}

export default HomeScreen;
