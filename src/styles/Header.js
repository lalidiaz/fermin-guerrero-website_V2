import styled from "styled-components";
import { device } from "../styles/device";
import { motion } from "framer-motion";

export const HeaderContainer = styled(motion.header)`
  width: 100%;
`;

export const BurgerContainer = styled.div`
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

export const MenuMobile = styled(motion.div)`
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

  border: 1px solid white;
  border-radius: 2px;
`;

export const NavigationMobile = styled.div`
  display: flex;
  flex-direction: column;
  top: 15%;
  height: auto;
  padding: 2rem 0rem;
`;

export const Ul = styled.ul`
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

export const Li = styled.li`
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

export const SocialMedia = styled.div`
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
