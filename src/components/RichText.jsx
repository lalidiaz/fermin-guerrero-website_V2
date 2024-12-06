import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { validateURL } from "@/utils/helpers";
import Link from "next/link";
import { memo } from "react";

const RichText = ({ texts, type }) => {
  const Bold = memo(({ children }) => <span>{children}</span>);

  const Text = memo(({ children }) => <p>{children}</p>);

  const ExternalLink = memo(({ children, node }) => (
    <Link
      href={validateURL(node.data.uri) ? node.data.uri : ""}
      target="_blank"
      rel="noopener noreferrer"
    >
      <a>{children}</a>
    </Link>
  ));

  const InternalLink = memo(({ children, node }) => (
    <Link href={`/${type}/${node.data.target.fields.slug}`}>{children}</Link>
  ));

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.HYPERLINK]: (node, children) => (
        <ExternalLink node={node}>{children}</ExternalLink>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        <InternalLink node={node}>{children}</InternalLink>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-4xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-3xl font-bold mb-3">{children}</h2>
      ),
      // error handling for embedded entries
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        console.warn("Embedded entry not handled:", node);
        return null;
      },
    },
  };

  if (!texts) {
    return null;
  }

  return <div>{documentToReactComponents(texts, options)}</div>;
};
export default RichText;
