import Link from "next/link";
import styled from "styled-components";
import { device } from "@/styles/device";

const Tags = ({ tags = [] }) => {
  if (!tags?.length) return null;

  return (
    <TagsContainer role="navigation" aria-label="Categories">
      {tags.map((category) => {
        const normalizedCategory = category
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-");

        return (
          <Link
            key={normalizedCategory}
            href={{
              pathname: `/category/${category}`,
            }}
            passHref
            legacyBehavior
          >
            <TagLink>
              <span aria-label={`View ${category} category`}>{category}</span>
            </TagLink>
          </Link>
        );
      })}
    </TagsContainer>
  );
};

const TagsContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: -4px;
  padding: 4px;

  @media ${device.laptop} {
    gap: 16px;
  }
`;

const TagLink = styled.a`
  position: relative;
  padding: 4px 0px;
  font-size: 0.875rem;
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    transform: translateY(-1px);
    text-decoration: none;
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
export default Tags;
