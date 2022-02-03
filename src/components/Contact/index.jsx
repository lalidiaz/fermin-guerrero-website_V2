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
    <section id='contact'>
      <div>
        <p>Email</p>

        <a
          target='_blank'
          rel='noreferrer'
          href='mailto:contact@ferminguerrero.com'
        >
          contact@ferminguerrero.com
        </a>
      </div>

      <div>
        <p>Dubai, UAE.</p>
      </div>

      <div>
        <FiClock color='white' size={23} style={{ paddingRight: '5px' }} />
        <Time />
      </div>

      <div>
        <p>Follow</p>
      </div>
      <ul>
        {contactLinks.map(({ id, name, link }) => (
          <li key={id}>
            <a rel='noreferrer' href={link} target='_blank'>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
