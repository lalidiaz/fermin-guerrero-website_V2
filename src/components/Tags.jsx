import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { device } from "@/styles/device";
import { v4 as uuidv4 } from "uuid";

const Tags = ({ tags }) => {
  return (
    <TagName>
      {tags &&
        tags.map((category, index) => {
          const transformName = category.replace(" ", "-");
          const toLower = transformName.toLowerCase();

          return (
            <React.Fragment key={uuidv4()}>
              <Link
                key={uuidv4()}
                href={{ pathname: "/category", query: { category: category } }}
                passHref
              >
                <TagLink key={uuidv4()}>{category}</TagLink>
              </Link>
            </React.Fragment>
          );
        })}
    </TagName>
  );
};

export default Tags;

const TagName = styled.div`
  margin-right: 8px;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`;

const TagLink = styled.a`
  margin-right: 8px;
  cursor: pointer;
  text-decoration: underline;
`;
