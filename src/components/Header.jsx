import ActiveLink from "./ActiveLink";
import { social } from "@/utils/links";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  BurgerContainer,
  MenuMobile,
  NavigationMobile,
  Ul,
  Li,
  SocialMedia,
} from "@/styles/Header";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-100vh",
    },
  };

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
      <HeaderContainer>
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
