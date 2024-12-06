import { AnimateContent, ImageGallery } from "@/components/index";
import styled from "styled-components";
import { device } from "@/styles/device";

const ProjectGallery = ({ media, imageAnimation }) => (
  <GridImg>
    <AnimateContent delay={0.4} animate={imageAnimation}>
      <ImageGallery media={media} />
    </AnimateContent>
  </GridImg>
);

const GridImg = styled.div`
  padding: 20px 20px 40px 20px;

  @media ${device.laptop} {
    padding: 20px 20px 60px 20px;
  }
`;

export default ProjectGallery;
