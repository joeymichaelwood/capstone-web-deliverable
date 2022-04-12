import './App.css';
import styled from "styled-components"

const DataWrapper = styled.div`
    font-size: 1.5em;
    margin: 2em;
`

const DataTitle = styled.h2`
`

const HeaderImage = styled.img`
  height: 400px;
`

function Data() {
  return (
    <DataWrapper>
        <DataTitle>The Data</DataTitle>
        <div>
          <HeaderImage src={`${process.env.PUBLIC_URL}cots_data.png`}></HeaderImage>
          <HeaderImage src={`${process.env.PUBLIC_URL}data.png`}></HeaderImage>
        </div>
        <br />
        The data is taken from Kaggle's <a href="https://www.kaggle.com/c/tensorflow-great-barrier-reef" target="_blank" rel="noreferrer">Help Protect the Great Barrier Reef</a> competition.
        <br />
        <br />
        The data is made up of 3 videos that consists of over 23,000 time series frames. Because the test set will also be time series, information from previous images can be used and can be relevant for predicting whether there are starfish in the image. For exmaple if there's a starfish in the center of the previous image, it's doubtful the starfish has moved a lot in the next frame, assuming they are in the same video. The data provides the video id, the frame number, the associated image id to find in the list of image files, and the annotations which includes the bounding box for each of the starfish in the image. The annotations can be 0 or greater.  
        <br />
        <br />
        Because the data comes from frames in a video, the images are not very clear, and given the vast number of objects in each frame, it is extremely challenging to consistenly identify them in the murkiness of the ocean that limits color contrast between the starfish and their surroundings. The starfish can also frequently overlap on top of each other, and our model was identifying them as a single starfish and struggling to identify them as separate organisms as the results expected. The starfish also look just like other objects in the reefs without the high color contrast and frequently blended in with their surroundings.
    </DataWrapper>
  );
}

export default Data;
