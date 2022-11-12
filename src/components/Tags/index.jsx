import Link from "next/link";
import { TagName, TagLink } from "../../styles/Tags";

const Tags = ({ element }) => {
  return (
    <TagName>
      {element.tags &&
        element.tags.map((tag) => {
          const transformName = tag.replace("-", " ");
          return (
            <Link href={`/tag/${tag}`} passHref key={element.id}>
              <TagLink>
                <u>{transformName}</u>
              </TagLink>
            </Link>
          );
        })}
    </TagName>
  );
};

export default Tags;
