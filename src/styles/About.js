import styled from "styled-components";
import { device } from "./device";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Wrapper = styled(motion.div)`
  line-height: 1.4;
  padding: 40px 0px 0px;

  @media ${device.laptop} {
    padding: 0px 0px 60px 0px;
  }
`;

export const Upper = styled.div`
  min-height: inherit;
  @media ${device.laptop} {
    min-height: 800px;
  }
`;
export const UpperImg = styled(motion.img)`
  padding: 38px 20px;
  width: 100%;
`;
export const AboutMobileStyles = styled.div`
  display: block;
  padding: 0px 20px 20px;

  p {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    display: none;
  }
`;
export const AboutDesktop = styled.div`
  display: none;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1;
    width: 100%;
    padding: 0px 20px;
    font-size: 1.1rem;
  }
`;
export const Nav = styled.div`
  @media ${device.laptop} {
    grid-column: 1/5;
    height: 100%;
  }
`;
export const Aside = styled.aside`
  @media ${device.laptop} {
    padding-top: 50px;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
`;
export const AsideLink = styled(Link)`
  @media ${device.laptop} {
    border: none;
    background: transparent;
    color: white;
    text-align: left;
    padding-top: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: ${(props) =>
      props.visibleSection === props.item ? "bold" : "regular"};
  }
`;
export const SectionsWrapper = styled.div`
  @media ${device.laptop} {
    grid-column: 5/12;
    padding-left: 3px;
  }
`;
export const SectionInfo = styled.section`
  padding: 3rem 0rem;
`;
