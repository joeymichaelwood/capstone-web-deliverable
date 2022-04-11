import './App.css';
import styled from "styled-components"

const DataWrapper = styled.div`
    font-size: 1.5em;
    margin: 2em;
`

const DataTitle = styled.h2`
`

const HeaderImage = styled.img`
  height: 500px;
`

function TechnicalApproach() {
  return (
    <DataWrapper>
        <DataTitle>Technical Appraoch</DataTitle>
        <HeaderImage src={`${process.env.PUBLIC_URL}yolo_v5.png`}></HeaderImage>
        <br />
        Because of the bounding box problem, we utilized the YOLOv5 model to identify the starfish.
    </DataWrapper>
  );
}

export default TechnicalApproach;
