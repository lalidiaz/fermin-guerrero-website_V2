/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

export default function HoverComponent({ data, title }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  console.log('activeIndex', activeIndex);
  console.log('data', data.image);
  return (
    <div className='hover-component-grid'>
      <p className='hover-component-grid-p'>{title}</p>

      <ul className='hover-component-content'>
        {data.map((item, index) => (
          <section className='hover-component-section' id='research' key={item}>
            <p className='hover-component-year'>{item.year}</p>

            {/* <div
              className='hover-component-section-link-description'
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {item.linkDescription && (
                <p>
                  <u>{item.linkDescription}</u>
                </p>
              )}
            </div> */}

            <div
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <p className='hover-component-section-description'>
                {item.description}
              </p>
              <p className='hover-component-section-description-two'>
                {item.description2}
              </p>
            </div>
            <div className='hover-component-section-media'>
              <img
                src={data[index].image}
                alt='article-image'
                className='media-img'
              />
            </div>
          </section>
        ))}
      </ul>
    </div>
  );
}
