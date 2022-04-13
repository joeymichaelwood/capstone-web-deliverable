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
        Because of the nature of this problem requiring the use of bounding boxes, we utilized the YOLOv5 model to begin. While our initial low scores were the results of not enough epochs, even when the score maxed out, it was only scoring about 14%. Since the evaluation metric prioritized recall over precision, and because it's much more imporant to find the potential crown of thorns starfish than it is to get the bounding box perfect or risk missing them entirely, we lowered our confidence threshold from 0.5 to 0.05. This provided a 6% boost from our previous highest model.
        <br />
        <br />
        Since the performance of YOLOv5 was not what we were seeing on the Kaggle leaderboards, we decided to look elsewhere. We identified EfficentDet as a potential contender because of it's fast training time, providing more room for experimentation, and it's results in previous baselines. So, we tried the EfficientDet model using high image resolution and found much more favorable results over the YOLOv5 model, nearly tripling our previous best score. One trade off to consider, is it takes roughly twice as much time for the EfficientDet model to make its prediction.
        <br />
        <br />
        <HeaderImage src={`${process.env.PUBLIC_URL}results.png`}></HeaderImage>

        <DataTitle>Additional Work</DataTitle>
        <br />
        <br />
        With more time, there is the opportunity to work on several improvements to our existing solution. Given that the YOLOv5 model tends to guess too many starfish, a subsequent model could be trained to determine whether the annotations it picked are actually crown of thorns starifsh. This model could better distinguish whether the box is a COTS or part of the reef. Given the much smaller area this model would have to focus on, we hypothesize significant improvements over it's ability to make these distinctions. 
        <br />
        <br />
        Through this opportunity for improvement and other key fine-tuning that we have in mind, our next milestone is to hit 60% accuracy, a top 500 Kaggle score with the leader at 76% accuracy, compared to our current 40% score. There is also an opportuntiy to speed up performance of inference, which currently takes about 1.5 seconds per frame, as we'd like this to be as close to real time as possible, given the application it's used for.
        <br />
        <br />
        Given the flexibility of the work we've done, we can quickly extrapolate this model to be used for other marine identification tasks. Given that YOLOv5 works better on larger object detection use cases, it may even perform better in other applications than it does on the one it was originally designed for.
    </DataWrapper>
  );
}

export default TechnicalApproach;
