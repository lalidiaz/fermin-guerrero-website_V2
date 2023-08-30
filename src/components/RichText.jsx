import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { validateURL } from "@/utils/helpers";
import Link from "next/link";


const RichText = ({ texts, type }) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>;

  const Text = ({ children }) => <p>{children}</p>;

  const ExternalLink = ({ children, node }) => (
    <a
      href={validateURL(node.data.uri) ? node.data.uri : ""}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  // FIX ME: ADD TYPE TO URL?
  const InternalLink = ({ children, node }) => (
    <Link href={`/${type}/${node.data.target.fields.slug}`}>{children}</Link>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <ExternalLink node={node}>{children}</ExternalLink>
      ),
    },
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        <InternalLink node={node}>{children}</InternalLink>
      ),
    },
  };
  return <>{documentToReactComponents(texts, options)}</>;
};
export default RichText;
