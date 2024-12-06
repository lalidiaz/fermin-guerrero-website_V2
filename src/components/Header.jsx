import ActiveLink from "./ActiveLink";
import { social } from "@/utils/links";
import Hamburger from "hamburger-react";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { device } from "../styles/device";
import { motion } from "framer-motion";

const navigationLinks = [
  { href: "/", text: "Fermín Guerrero", column: "1/5" },
  { href: "/graphic", text: "Graphic Design", column: "5/7" },
  { href: "/all", text: "&", column: "7" },
  { href: "/typeface", text: "Typeface Design", column: "8/10" },
  { href: "/about", text: "About", column: "12" },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [changeHeaderStyle, setChangeHeaderStyle] = useState(false);

  const menuVariants = {
    opened: { top: 0 },
    closed: { top: "-100vh" },
  };

  useEffect(() => {
    const changeHeaderColor = () => {
      setChangeHeaderStyle(window.scrollY >= 80);
    };

    window.addEventListener("scroll", changeHeaderColor);
    return () => window.removeEventListener("scroll", changeHeaderColor);
  }, []);

  const getSocialLinks = useMemo(
    () =>
      social.map(({ url, text }) => (
        <span key={`social-${text}`}>
          <a href={url} target="_blank" rel="noreferrer">
            {text}
          </a>
        </span>
      )),
    [social]
  );

  return (
    <>
      <HeaderContainer changeheaderstyle={changeHeaderStyle ? 1 : 0}>
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
              {navigationLinks.map(({ href, text, column }) => (
                <Li key={href} $column={column}>
                  <ActiveLink
                    href={href}
                    passHref
                    closeMenu={() => setOpen(false)}
                  >
                    {text}
                  </ActiveLink>
                </Li>
              ))}
            </Ul>
          </NavigationMobile>
          <SocialMedia>{getSocialLinks}</SocialMedia>
        </MenuMobile>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled(motion.header)`
  --header-height: 2.8rem;
  --transition-duration: 0.8s;

  width: 100%;
  z-index: 10000;
  height: auto;
  min-height: var(--header-height);
  background-color: ${(props) => (props.changeheaderstyle ? "black" : "none")};
  border-bottom: ${(props) =>
    props.changeheaderstyle ? "1px solid white" : "none"};
  position: fixed;
  top: 0;
  transition: var(--transition-duration) all ease;
`;

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 0 8px 0 20px;
  z-index: 101;

  @media ${device.laptop} {
    display: none;
  }
`;

const MenuMobile = styled(motion.div)`
  background-color: black;
  color: white;
  height: auto;
  width: 100vw;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  border-radius: 2px;
`;

const NavigationMobile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const Ul = styled.ul`
  padding-top: 25px;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
    padding: 3px 20px 5px;
    mix-blend-mode: difference;
    position: fixed;
    top: 0;
    z-index: 1;
    font-size: 1.1rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    color: white;
  }
`;

const Li = styled.li`
  display: block;
  border-bottom: 1px solid white;
  margin: 0 20px;
  padding: 8px 0;

  @media ${device.laptop} {
    border-bottom: none;
    margin: 0;
    grid-column: ${(props) => props.$column};
    text-align: ${(props) => (props.$column === "12" ? "right" : "left")};
  }
`;

const SocialMedia = styled.div`
  padding-bottom: 30px;

  a {
    padding-left: 20px;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
      transition: opacity 0.2s;
    }
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export default Header;
