import Link from "next/link";
import { TagName, TagLink } from "../styles/Tags";

const Tags = ({ tags }) => {
  const showTags =
    tags &&
    tags.map((tag) => (
      <Link key={tag} href={`/tag`}>
        <TagLink>{tag}</TagLink>
      </Link>
    ));
  return <TagName>{showTags}</TagName>;
};

export default Tags;
