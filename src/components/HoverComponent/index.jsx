/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const HoverComponent = ({
  data,
  year,
  description,
  descriptionTwo,
  index,
  link,
  url,
  titlePressOnline,
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="hover-component-grid">
      <section className="hover-component-section" id="research">
        <p className="hover-component-year">{year}</p>

        <div
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(-1)}
          className="hover-component-section-description"
        >
          {titlePressOnline && (
            <a href={url} target="_blank" rel="noreferrer">
              <u>{titlePressOnline}</u>
            </a>
          )}
          {link && (
            <a href={url} target="_blank" rel="noreferrer">
              <u>{link}</u>
            </a>
          )}
          <p>{description}</p>
          <p>{descriptionTwo}</p>
        </div>
        <div className="hover-component-section-media">
          {data[activeIndex] && data[activeIndex].image ? (
            <img src={data[activeIndex].image} alt="article-image" className="media-img" />
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default HoverComponent;
