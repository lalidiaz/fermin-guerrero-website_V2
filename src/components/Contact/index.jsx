import { FiClock } from "react-icons/fi";
import { Time } from "@/components/index";
import { contactLinks } from "@/utils/links";
import {
  Container,
  EmailContainer,
  EmailTitle,
  EmailContent,
  TimeDisplay,
  Follow,
  FollowText,
  FollowContent,
} from "../../styles/Contact";

const Contact = () => {
  return (
    <Container>
      <EmailContainer>
        <EmailTitle>Email</EmailTitle>
        <EmailContent>
          <a target="_blank" rel="noreferrer" href="mailto:contact@ferminguerrero.com">
            contact@ferminguerrero.com
          </a>
          <div>
            <p>Dubai, UAE.</p>
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
          {contactLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a rel="noreferrer" href={link} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </FollowContent>
      </Follow>
    </Container>
  );
};
export default Contact;
