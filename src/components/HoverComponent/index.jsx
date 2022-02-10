/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

export default function HoverComponent({
  data,
  year,
  description,
  descriptionTwo,
  index,
  link,
  url,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className='hover-component-grid'>
      <ul className='hover-component-content'>
        <section className='hover-component-section' id='research'>
          <p className='hover-component-year'>{year}</p>

          <div
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
            className='hover-component-section-description'
          >
            {link && (
              <a href={url} target='_blank' rel='noreferrer'>
                <u>{link}</u>
              </a>
            )}
            <p>{description}</p>
            <p>{descriptionTwo}</p>
          </div>
          <div className='hover-component-section-media'>
            {activeIndex && data[activeIndex]?.image && (
              <img
                src={data[activeIndex]?.image}
                alt='article-image'
                className='media-img'
              />
            )}
          </div>
        </section>
      </ul>
    </div>
  );
}
