import { FiClock } from "react-icons/fi";
import { Time } from "@/components/index";
import {
  Container,
  EmailContainer,
  EmailTitle,
  EmailContent,
  TimeDisplay,
  Follow,
  FollowText,
  FollowContent,
} from "../styles/Contact";

const Contact = ({ email, location, instagram, twitter, linkedin }) => {
  console.log("email", email);
  return (
    <Container>
      <EmailContainer>
        <EmailTitle>Email</EmailTitle>
        <EmailContent>
          <a
            target="_blank"
            rel="noreferrer"
            href={`mailto:${email}`}
            style={{ border: "2px solid red" }}
          >
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
