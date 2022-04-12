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
        <br />
        To preprocess the data, we did random sampling between the 3 videos to ensure no data leakage that could impact the quality of the final model. The images were augmented and resized during training to give the model an opporutnity to figure out the importnat features of the images, while not overfitting on specific scenarios. Then the data was reformatted to match model input. 
        <br />
        <br />
        Given the scale of the data and the models we needed, all our training was down on AWS across various EC2 instances. Because the ultimate application would need to run in near-real time, we had to constantly weigh the balance of accuracy with time performance and this also limited the type of training resources we could use. We couldn't use compute power too large that didn't seem feasible for these researchers to have access to. 
        <br />
        <br />
        Because of the nature of this problem requiring the use of bounding boxes, we utilized the YOLOv5 model to begin. While our initial low scores were the results of not enough epochs, even when the score maxed out, it was only scoring about 14%. Since the evaluation metric prioritized recall over precision, we lowered our confidence threshold from 0.5 to 0.05. This provided a 6% boost from our previous highest model.
        <br />
        <br />
        Then we tried an EfficientDet model using high image resolution and found much more favorable results over the YOLOv5 model, nearly tripling our previous best score.
        <br />
        <br />
        <HeaderImage src={`${process.env.PUBLIC_URL}results.png`}></HeaderImage>
    </DataWrapper>
  );
}

export default TechnicalApproach;
