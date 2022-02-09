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
    <section className='item-wrapper' id='research'>
      <p className='item-year'>{year}</p>

      <div
        className='item-content-wrapper'
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}
      >
        {linkDescription && (
          <p className='item-content'>
            <u>{linkDescription}</u>
          </p>
        )}
      </div>

      <div>
        <p className='item-description'>{description}</p>
        <p className='item-description-two'>{description2}</p>
      </div>
      <div className='item-media'>
        {articles && <Media image={articles[activeIndex]?.image} />}
        {press && <Media image={press[activeIndex]?.image} />}
      </div>
    </section>
  );
}
