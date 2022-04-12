import styled from "styled-components"

const AboutUsWrapper = styled.div`
`

const TheTeam = styled.div`
    font-size: 3em;
    margin-top: 1.5em;
`

const GroupMembers = styled.div`
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 1.2em;
`

const GroupMemberImage = styled.img`
    height: 100%
`

const Description = styled.div`
    font-size: 1.5em;
`

const details = [
    {image: 'alan.png', name: 'Alan Zhang'},
    {image: 'frank.png', name: 'Frank Tang'},
    {image: 'jocelyn.png', name: 'Jocelyn Lu'},
    {image: 'joseph.png', name: 'Joseph Wood'},
    {image: 'spencer.png', name: 'Spencer Hong'},
]

function AboutUs() {
  return (
      <AboutUsWrapper>
        <TheTeam>The Team</TheTeam>
        <br/>
        <Description>The team consists of 5 students in the University of California, Berkeley's Master in Data Science program</Description>
        <br/>
        <GroupMembers>
            {details.map(detail => {
                return (
                    <div>
                        <GroupMemberImage src={`${process.env.PUBLIC_URL}${detail.image}`} />
                        <br />
                        <br />
                        {detail.name}
                    </div>
                )
            })}
        </GroupMembers>
      </AboutUsWrapper>
  );
}

export default AboutUs;
