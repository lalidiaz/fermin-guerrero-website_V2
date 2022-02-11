import { FiClock } from 'react-icons/fi';
import { Time } from '@/components/index';

export default function Contact() {
  const contactLinks = [
    {
      id: 1,
      name: 'Instagram',
      link: 'https://www.instagram.com/ferminguerrero_design/',
    },
    { id: 2, name: 'Twitter', link: 'https://twitter.com/fermin_guerrero' },
    {
      id: 3,
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/fermin-guerrero-616237173/',
    },
  ];

  return (
    <section className='contact-component'>
      <div className='email'>
        <p className='email-p'>Email</p>
        <div className='email-content'>
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:contact@ferminguerrero.com'
          >
            contact@ferminguerrero.com
          </a>
          <div>
            <p>Dubai, UAE.</p>
          </div>
          <div className='time'>
            <FiClock color='white' size={23} style={{ paddingRight: '5px' }} />
            <Time />
          </div>
        </div>
      </div>

      <div className='follow'>
        <p className='follow-p'>Follow</p>

        <ul className='follow-content'>
          {contactLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a rel='noreferrer' href={link} target='_blank'>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
