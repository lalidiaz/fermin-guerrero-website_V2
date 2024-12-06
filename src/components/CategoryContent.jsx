import { Masonry } from "@/components/index";
import styled from "styled-components";

const CategoryContent = ({ data }) => (
  <Wrapper>
    <Masonry data={data} />
  </Wrapper>
);

export const Wrapper = styled.div`
  padding-top: 5rem;
`;

export default CategoryContent;
