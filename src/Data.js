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

function Data() {
  return (
    <DataWrapper>
        <DataTitle>The Data</DataTitle>
        <HeaderImage src={`${process.env.PUBLIC_URL}cots_data.png`}></HeaderImage>
        <br />
        The data is taken from Kaggle's <a href="https://www.kaggle.com/c/tensorflow-great-barrier-reef" target="_blank" rel="noreferrer">Help Protect the Great Barrier Reef</a> competition.
        <br />
        <br />
        Because the data comes from frames in a video, the images are not very clear, and given the vast number of objects in each frame, it is extremely challenging to consistenly identify them in the murkiness of the ocean.
    </DataWrapper>
  );
}

export default Data;
