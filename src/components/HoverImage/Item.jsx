import Media from './Media';
import { useState } from 'react';

export default function Item({
  description,
  year,
  index,
  articles,
  description2,
  press,
  linkDescription,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className='wrapper-item' id='research'>
      <div>
        <p>{year}</p>
      </div>
      <div
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}
      >
        {linkDescription && (
          <p className='content'>
            <u>{linkDescription}</u>
          </p>
        )}
      </div>

      <div>
        <p className='content-item'>{description}</p>
        <p className='descriptiontwo'>{description2}</p>
      </div>
      <div>
        {articles && <Media image={articles[activeIndex]?.image} />}
        {press && <Media image={press[activeIndex]?.image} />}
      </div>
    </section>
  );
}
