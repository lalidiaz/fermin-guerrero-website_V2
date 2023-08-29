import { FiClock } from "react-icons/fi";
import { Time } from "@/components/index";
import styled from "styled-components";
import { device } from "@/styles/device";

const Contact = ({ email, location, instagram, twitter, linkedin }) => {
  return (
    <Container>
      <EmailContainer>
        <EmailTitle>Email</EmailTitle>
        <EmailContent>
          <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
            contact@ferminguerrero.com
          </a>
          <div>
            <p>{location}</p>
          </div>
          <TimeDisplay>
            <FiClock color="white" size={23} style={{ paddingRight: "5px" }} />
            <Time />
          </TimeDisplay>
        </EmailContent>
      </EmailContainer>

      <Follow>
        <FollowText>Follow</FollowText>

        <FollowContent>
          <li>
            <a rel="noreferrer" href={instagram} target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noreferrer" href={twitter} target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a rel="noreferrer" href={linkedin} target="_blank">
              Linkedin
            </a>
          </li>
        </FollowContent>
      </Follow>
    </Container>
  );
};
export default Contact;

const Container = styled.div`
  display: grid;
`;

const EmailContainer = styled.div`
  font-size: 1rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

const EmailTitle = styled.p`
  grid-column: 1/3;
`;

const EmailContent = styled.div`
  grid-column: 3/8;
  padding: 0rem 0rem 1rem 0rem;

  @media ${device.laptop} {
  }
`;

const TimeDisplay = styled.div`
  display: flex;
  align-items: center;
  grid-column: 8/12;
`;

const Follow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const FollowText = styled.p`
  grid-column: 1/3;

  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 10px 0px;
  }
`;

const FollowContent = styled.ul`
  grid-column: 3/8;
  padding-left: 3px;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 10px 0px;
  }
`;
