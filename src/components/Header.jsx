import ActiveLink from "./ActiveLink";
import { social } from "@/utils/links";
import Hamburger from "hamburger-react";
import { useState } from "react";
import styled from "styled-components";
import { device } from "../styles/device";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [changeHeaderStyle, setChangeHeaderStyle] = useState(false);

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-100vh",
    },
  };

  const changeHeaderColor = () => {
    if (window.scrollY >= 80) {
      setChangeHeaderStyle(true);
    } else {
      setChangeHeaderStyle(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeHeaderColor);
  }

  const handleClickHome = () => {
    setOpen(false);
  };

  const getSocialLinks = social.map(({ id, url, text }) => {
    return (
      <span key={id}>
        <a href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
      </span>
    );
  });

  return (
    <>
      <HeaderContainer changeHeaderStyle={changeHeaderStyle}>
        <BurgerContainer>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={21}
            color="white"
          />
        </BurgerContainer>
        <MenuMobile
          initial={false}
          animate={isOpen ? "opened" : "closed"}
          variants={menuVariants}
          transition={{ default: { duration: 1 } }}
        >
          <NavigationMobile>
            <Ul>
              <Li>
                <ActiveLink href="/" passHref closeMenu={handleClickHome}>
                  Fermín Guerrero
                </ActiveLink>
              </Li>
              <Li>
                <ActiveLink
                  href="/graphic"
                  passHref
                  closeMenu={handleClickHome}
                >
                  Graphic Design
                </ActiveLink>
              </Li>
              <Li>
                <ActiveLink href="/all" passHref closeMenu={handleClickHome}>
                  &
                </ActiveLink>
              </Li>
              <Li>
                <ActiveLink
                  href="/typeface"
                  passHref
                  closeMenu={handleClickHome}
                >
                  Typeface Design
                </ActiveLink>
              </Li>
              <Li>
                <ActiveLink href="/about" passHref closeMenu={handleClickHome}>
                  About
                </ActiveLink>
              </Li>
            </Ul>
          </NavigationMobile>
          <SocialMedia>{getSocialLinks}</SocialMedia>
        </MenuMobile>
      </HeaderContainer>
    </>
  );
};
export default Header;

const HeaderContainer = styled(motion.header)`
  width: 100%;
  z-index: 10000;
  height: auto;
  min-height: 2.8rem;
  background-color: ${(props) => (props.changeHeaderStyle ? "black" : "none")};
  border-bottom: ${(props) =>
    props.changeHeaderStyle ? "1px solid white" : "none"};
  position: fixed;
  top: 0;
  transition: 0.8s all ease;
`;

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.1rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 10px;
  width: 100%;
  height: auto;
  padding: 0px 8px 0px 20px;
  z-index: 101;

  @media ${device.laptop} {
    display: none;
    padding: 0px;
  }
`;

const MenuMobile = styled(motion.div)`
  background-color: black;
  color: white;
  font-size: 1rem;
  height: 60vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  padding-top: 10px;
  height: auto;

  border-radius: 2px;
`;

const NavigationMobile = styled.div`
  display: flex;
  flex-direction: column;
  top: 15%;
  height: auto;
  padding: 2rem 0rem;
`;

const Ul = styled.ul`
  padding-top: 25px;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 3px 20px 5px 20px;
    mix-blend-mode: difference;
    position: fixed;
    top: 0;
    z-index: 1;
    font-size: 1.1rem;
    outline: none;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1;
    color: white;
  }
`;

const Li = styled.li`
  display: block;
  border-bottom: 1px solid white;
  margin-left: 20px;
  margin-right: 20px;
  padding: 8px 0px;

  @media ${device.laptop} {
    border-bottom: none;
    &:nth-child(1) {
      grid-column: 1/5;
      margin-left: 0px;
    }
    &:nth-child(2) {
      grid-column: 5/7;
      padding-left: 3px;
    }
    &:nth-child(3) {
      grid-column: 7;
      padding-left: 6.5px;
    }
    &:nth-child(4) {
      grid-column: 8/10;
      padding-left: 6.5px;
    }
    &:nth-child(5) {
      grid-column: 12;
      margin-right: 0;
      text-align: right;
    }
  }
`;

const SocialMedia = styled.div`
  padding-bottom: 30px;
  a {
    padding-left: 20px;
    text-decoration: underline;
  }
  a:selected {
    color: white;
  }

  @media ${device.laptop} {
    display: none;
  }
`;
