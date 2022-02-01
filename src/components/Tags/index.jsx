import Link from 'next/link';

export default function Tags({ element }) {
  return (
    <div className='tag-name'>
      {element.tags &&
        element.tags.map((tag) => {
          const transformName = tag.replace('-', ' ');
          return (
            <Link href={`/tag/${tag}`} passHref key={element.id}>
              <a className='tag-link'>
                <u>{transformName}</u>
              </a>
            </Link>
          );
        })}
    </div>
  );
}
