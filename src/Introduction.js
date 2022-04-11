import './App.css';
import styled from "styled-components"

const IntroductionWrapper = styled.div`
    font-size: 1.5em;
    margin: 2em;
`

const Motivation = styled.h2`
`

const HeaderImage = styled.img`
  height: 100%;
  width: 100%;
`

const GroupMemberImage = styled.img`
`

const COTSImageContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-left: 2em;
    margin-bottom: 2em;
`

const COTSDescription = styled.div`
    margin-left: 2em;
    margin-right: 2em;
`

function Introduction() {
  return (
    <IntroductionWrapper>
        <Motivation>Motivation</Motivation>
        <GroupMemberImage src={`${process.env.PUBLIC_URL}coral_bleaching.png`} />
        <br />
        <br />
        Australia's stunningly beautiful Great Barrier Reef is the world’s largest coral reef and home to 1,500 species of fish, 400 species of corals, 130 species of sharks, rays, and a massive variety of other sea life. In addition to being home to a quarter of the ocean's marine life, the reef also helps generate clean air and protect vulnerable coastlines from erosion, flooding, and storms. 
        <br/>
        <br/>
        Unfortunately, the reef is under threat, in part because of the overpopulation of one particular starfish – the coral-eating crown-of-thorns starfish (or COTS for short). While most coral-feeding organisms only cause tissue loss or localized injuries, crown-of-thorns starfish can kill entire coral colonies.
        <Motivation>What is a Crown of Thorns Starfish?</Motivation>
        <COTSImageContainer>
            <GroupMemberImage src={`${process.env.PUBLIC_URL}cots.png`} height="300"/>
            <COTSDescription>While these starfish may look beautiful, they are anything but. These starfish are the number 2 destroyer of coral reefs, only behind human activity. And in the murky ocean with millions of other organisms coexisting together, they are not so easily spottable as you can see in the video below. They are also extremley durable being able to regrow arms and sometimes even half of it's body were it cut in half. With few predators and the ability to produce millions of eggs in a single breeding season, these coral killers are extremely effective.  </COTSDescription>
        </COTSImageContainer>
        
        
        
         Current reef conservation techniques to identify starfish use manual survey methods as snorkel divers are manually towed by a boat. As the population of COTS increases, this method of identification faces clear limitations, including operational scalability, data resolution, reliability, and traceability.
        <br/>
        <br/>
        Our goal is to develop an automated solution to identify the presence and position of crown-of-thorns starfish from underwater images in real-time. Used in conjunction with underwater cameras, this technology could drastically improve the efficiency and scale at which reef managers detect and control COTS outbreaks.
        <br />
        <br />
        <br />

        <iframe width="700" height="400" src="https://www.youtube.com/embed/UT2noVDFoaA"></iframe>

    </IntroductionWrapper>
  );
}

export default Introduction;
