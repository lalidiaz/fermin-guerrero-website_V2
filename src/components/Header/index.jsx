import Link from "../ActiveLink";
import styles from "./header.module.scss";
import { links } from "@/utils/links";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <div key={id} className={styles.linkHeader}>
            <Link href={url} activeClassName='active' passHref>
              {text}
            </Link>
          </div>
        );
      })}
    </header>
  );
}
