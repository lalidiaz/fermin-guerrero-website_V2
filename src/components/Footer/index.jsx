export default function Footer({ component }) {
  const links = [
    {
      id: 1,
      name: 'Twitter',
      href: 'https://twitter.com/fermin_guerrero',
      className: 'twitter',
    },
    {
      id: 2,
      name: 'Instagram',
      href: 'https://www.instagram.com/ferminguerrero_design/',
      className: 'instagram',
    },
    {
      id: 3,
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/fermin-guerrero-616237173/',
      className: 'linkedin',
    },
  ];
  return (
    // <footer className={component === 'home' ? 'footerHome' : 'footerComponent'}>
    <footer>
      <div className='copyright'>
        ©2021 <span>&#8212; </span> Fermin Guerrero
      </div>

      <div className='footer-links'>
        {links.map((link) => (
          <div className={link.className} key={link.id}>
            <a rel='noreferrer' href={link.href} target='_blank'>
              <u>{link.name}</u>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
