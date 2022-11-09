import Link from "../ActiveLink";

import { links } from "@/utils/links";

const Header = () => {
  return (
    <header className="header-wrapper">
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <div key={id} className="link-header">
            <Link href={url} activeClassName="active" passHref>
              {text}
            </Link>
          </div>
        );
      })}
    </header>
  );
};
export default Header;
