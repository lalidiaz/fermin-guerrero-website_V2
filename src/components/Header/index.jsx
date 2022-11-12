import ActiveLink from "../ActiveLink";
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
      top: "-60vh",
    },
  };

  const handleClickHome = () => {
    setOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <BurgerContainer>
          <Hamburger toggled={isOpen} toggle={setOpen} size={21} color="white" />
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
                <ActiveLink href="/">
                  <a onClick={() => handleClickHome()}>Fermín Guerrero</a>
                </ActiveLink>
              </Li>
              <Li>
                <ActiveLink href="/graphic-design">
                  <a onClick={() => handleClickHome()}>Graphic Design</a>
                </ActiveLink>
              </Li>
              <Li>
                <ActiveLink href="/all">
                  <a onClick={() => handleClickHome()}>&</a>
                </ActiveLink>
              </Li>
              <Li>
                <ActiveLink href="/typeface-design">
                  <a onClick={() => handleClickHome()}>Typeface Design</a>
                </ActiveLink>
              </Li>
              <Li>
                <Link href="/about">
                  <a onClick={() => handleClickHome()}>About</a>
                </Link>
              </Li>
            </Ul>
          </NavigationMobile>
          <SocialMedia>
            {social.map(({ id, url, text }) => {
              return (
                <span key={id}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {text}
                  </a>
                </span>
              );
            })}
          </SocialMedia>
        </MenuMobile>
      </HeaderContainer>
    </>
  );
};
export default Header;
