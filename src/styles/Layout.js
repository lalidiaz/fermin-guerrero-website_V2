import styled from "styled-components";
import { device } from "../styles/device";

export const MainWrapper = styled.main`
  width: 100%;
  position: relative;
`;

export const MasonryWrapper = styled.div`
  padding: 40px 20px;
`;

export const GridContainer = styled.div`
  grid-template-columns: 1fr;
  padding: 20px;

  @media ${device.laptop} {
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: 1fr 1fr 2fr;
    min-height: 100px;
    padding: 15px 20px;
    font-weight: regular;
  }
`;

export const GridName = styled.p`
  font-weight: bold;
`;

export const YearTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;

  @media ${device.laptop} {
    padding: 0px;
  }
`;

export const GridDesc = styled.div`
  line-height: 1.4;
`;

export const GridImg = styled.div`
  padding: 20px 20px 40px 20px;
  @media ${device.laptop} {
    padding: 0px 20px;
  }
`;

export const MobileCarousel = styled.div`
  display: block;
  width: 100%;

  @media ${device.laptop} {
    display: none;
  }
`;

export const MobileCarouselImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;

  @media ${device.laptop} {
    display: none;
  }
`;

export const MainImg = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    position: relative;
    width: 100vw;
  }
`;

export const UpperImg = styled.div`
  display: none;

  @media ${device.laptop} {
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
  }
`;
