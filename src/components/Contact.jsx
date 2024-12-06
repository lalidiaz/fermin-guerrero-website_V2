import { FiClock } from "react-icons/fi";
import { Time } from "@/components/index";
import styled from "styled-components";
import { device } from "@/styles/device";
import { memo } from "react";

const Contact = memo(({ email, location, instagram, twitter, linkedin }) => {
  return (
    <Container>
      <Section>
        <Title>Email</Title>
        <Content>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </a>
          <Location>{location}</Location>
          <Clock>
            <FiClock color="white" size={23} style={{ marginRight: "5px" }} />
            <Time />
          </Clock>
        </Content>
      </Section>

      <Section>
        <Title>Follow</Title>
        <SocialLinks>
          {[
            { href: instagram, label: "Instagram" },
            { href: twitter, label: "Twitter" },
            { href: linkedin, label: "LinkedIn" },
          ].map(({ href, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </SocialLinks>
      </Section>
    </Container>
  );
});

const Container = styled.div`
  display: grid;
  gap: 1rem;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

const Title = styled.p`
  grid-column: 1/3;
`;

const Content = styled.div`
  grid-column: 3/8;
  padding-bottom: 1rem;
`;

const Clock = styled.div`
  display: flex;
  align-items: center;
`;

const Location = styled.p`
  margin: 0.5rem 0;
`;

const SocialLinks = styled.ul`
  grid-column: 3/8;
  padding-left: 3px;

  @media ${device.laptop} {
    padding: 0.625rem 0;
  }
`;

export default Contact;
