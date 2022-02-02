export default function Footer({ component }) {
  return (
    // <footer className={component === 'home' ? 'footerHome' : 'footerComponent'}>
    <footer>
      <div className='copyright'>
        ©2021 <span>&#8212; </span> Fermin Guerrero
      </div>

      <div className='twitter'>
        <a
          className='social'
          rel='noreferrer'
          href='https://twitter.com/fermin_guerrero'
          target='_blank'
        >
          <u>Twitter</u>
        </a>
      </div>
      <div className='instagram'>
        <a
          className='social'
          rel='noreferrer'
          href='https://www.instagram.com/ferminguerrero_design/'
          target='_blank'
        >
          <u>Instagram</u>
        </a>
      </div>
      <div className='linkedin'>
        <a
          className='social'
          rel='noreferrer'
          href='https://www.linkedin.com/in/fermin-guerrero-616237173/'
          target='_blank'
        >
          <u>Linkedin</u>
        </a>
      </div>
    </footer>
  );
}
