import Link from "next/link";
import { TagName, TagLink } from "../styles/Tags";

const Tags = ({ tags }) => {
  const showTags =
    tags &&
    tags.map((tag) => {
      return (
        <Link key={tag} href="/all">
          <TagLink>{tag}</TagLink>
        </Link>
      );
    });
  return <TagName>{showTags}</TagName>;
};

export default Tags;
