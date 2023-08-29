import Link from "next/link";
import styled from "styled-components";
import { device } from "@/styles/device";

const Tags = ({ tags }) => {
  const showTags =
    tags &&
    tags.map((category, index) => {
      const transformName = category.replace(" ", "-");
      const toLower = transformName.toLowerCase();

      return (
        <Link
          key={category + index}
          href={{ pathname: "category", query: { category: category } }}
          passHref
        >
          <TagLink>{category}</TagLink>
        </Link>
      );
    });
  return <TagName>{showTags}</TagName>;
};

export default Tags;

const TagName = styled.div`
  margin-right: 8px;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`;

const TagLink = styled.div`
  margin-right: 8px;
  cursor: pointer;
  text-decoration: underline;
`;
