import Link from '../ActiveLink';
import styles from './header.module.scss';

export default function Header() {
  const links = [
    {
      id: 1,
      url: '/',
      text: 'Fermin Guerrero',
    },
    {
      id: 2,
      url: '/graphic-design',
      text: 'Graphic Design',
    },
    {
      id: 3,
      url: '/all-projects',
      text: '&',
    },
    {
      id: 4,
      url: '/typeface-design',
      text: 'Typeface Design',
    },
    {
      id: 5,
      url: '/info',
      text: 'Info',
    },
  ];
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
