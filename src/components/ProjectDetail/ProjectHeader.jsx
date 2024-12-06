import { AnimateContent } from "@/components/index";
import { Credits, Tags } from "@/components/index";
import { RichText } from "@/components/index";
import styled from "styled-components";
import { device } from "@/styles/device";

const ProjectHeader = ({
  name,
  year,
  credits,
  tags,
  description,
  textAnimation,
}) => (
  <GridContainer>
    <AnimateContent delay={0.4} animate={textAnimation}>
      <GridName>{name}</GridName>
    </AnimateContent>

    <YearTags>
      <div>
        <AnimateContent delay={0.5} animate={textAnimation}>
          <p className="pb-6">{year}</p>
        </AnimateContent>

        {credits && (
          <AnimateContent delay={0.6} animate={textAnimation}>
            <Credits credits={credits} />
          </AnimateContent>
        )}
      </div>

      <div>
        {tags && (
          <AnimateContent delay={0.7} animate={textAnimation}>
            <Tags tags={tags} />
          </AnimateContent>
        )}
      </div>
    </YearTags>

    <AnimateContent delay={0.6} animate={textAnimation}>
      <GridDesc>
        <RichText texts={description} />
      </GridDesc>
    </AnimateContent>
  </GridContainer>
);

const GridContainer = styled.div`
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

const GridName = styled.p`
  font-weight: bold;
`;

const YearTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;

  @media ${device.laptop} {
    padding: 0px;
  }
`;

const GridDesc = styled.div`
  line-height: 1.4;
`;

export default ProjectHeader;
