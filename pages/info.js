/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import { About, Contact, Footer, HoverComponent } from '@/components/index';
import Head from 'next/head';
import {
  getArticlesData,
  getExhibitionsData,
  getPressData,
  getAwardsData,
} from '@/utils/helpers';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default function Info({
  articlesData,
  pressData,
  exhibitionsData,
  awardsData,
}) {
  const getObjects = (data) => {
    return Object.values(data).map((element) => element);
  };

  const articles = getObjects(articlesData);
  const press = getObjects(pressData);
  const exhibitions = getObjects(exhibitionsData);
  const awards = getObjects(awardsData);

  const [visibleSection, setVisibleSection] = useState();

  const sidenavRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const awardsRef = useRef(null);
  const articlesRef = useRef(null);
  const exhibitionsRef = useRef(null);
  const pressRef = useRef(null);

  const sectionRefs = [
    { section: 'about', ref: aboutRef, name: 'About' },
    { section: 'contact', ref: contactRef, name: 'Contact' },
    { section: 'awards', ref: awardsRef, name: 'Awards & Distinctions' },
    { section: 'articles', ref: articlesRef, name: 'Research & Articles' },
    { section: 'exhibitions', ref: exhibitionsRef, name: 'Exhibitions' },
    { section: 'press', ref: pressRef, name: 'Press' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(sidenavRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSection]);

  return (
    <>
      <Head>
        <title>Info</title>
        <meta
          name='description'
          content="Fermin Guerrero's graphic designer and typefase designer information, contact, press, articles."
        />
      </Head>

      <div className='wrapper-info'>
        <img
          className='image'
          src='https://res.cloudinary.com/lali/image/upload/v1643735965/aboutmepicture_e0nbsk.jpg'
          alt='image-info-graphic-designer'
        />

        <div className='mobileAbout'>
          {/* <MobileSectionsMenu
            press={press}
            articles={articles}
            exhibitions={exhibitions}
            awardsData={awardsData}
            pressOnlineData={pressOnlineData}
          /> */}
        </div>
        <div className='content-info'>
          <aside className='sticky' id='aside' ref={sidenavRef}>
            {sectionRefs.map((item) => (
              <button
                key={item.section}
                type='button'
                className={`header_link ${
                  visibleSection === item.section && 'selected'
                }`}
                onClick={() => {
                  scrollTo(item.ref.current);
                }}
              >
                {item.name}
              </button>
            ))}
          </aside>

          <div className='sections-wrapper'>
            <section id='about' ref={aboutRef}>
              <About />
            </section>
            <section className='sectionInfo' id='contact' ref={contactRef}>
              <Contact />
            </section>

            <section className='sectionInfo' id='press' ref={pressRef}>
              <p className='hover-title'>Print (selected):</p>
              {press.map((item, index) => {
                const { description, descriptionTwo, year } = item;
                return (
                  <HoverComponent
                    data={press}
                    year={year}
                    description={description}
                    descriptionTwo={descriptionTwo}
                    key={item}
                    index={index}
                  />
                );
              })}
              {/* <div>
                <p> Online (selected):</p>
              </div> */}

              {/* <OnlinePress pressOnlineData={pressOnlineData} /> */}
            </section>

            <section className='sectionInfo' id='awards' ref={awardsRef}>
              {awards.map((item, index) => (
                <div className='awards-container' key={index}>
                  <p className='awards-year'>{item.year}</p>
                  <div className='awards-title'>
                    <p>{item.title}</p>
                  </div>

                  <p className='awards-prize'>{item.prize}</p>
                </div>
              ))}
            </section>
            <section className='sectionInfo' id='articles' ref={articlesRef}>
              {articles.map((item, index) => {
                const {
                  linkDescription,
                  url,
                  year,
                  description,
                  description2,
                } = item;
                return (
                  <HoverComponent
                    link={linkDescription}
                    url={url}
                    data={articles}
                    year={year}
                    description={description}
                    descriptionTwo={description2}
                    key={item}
                    index={index}
                  />
                );
              })}
            </section>
            <section
              className='sectionInfo'
              id='exhibitions'
              ref={exhibitionsRef}
            >
              {exhibitions.map((item, index) => (
                <div className='exhibitions-container' key={index}>
                  <p className='exhibitions-year'>{item.year}</p>
                  <div className='exhibitions-title'>
                    <p>{item.title}</p>
                  </div>

                  <p className='exhibitions-country'>{item.country}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
        <div className='footerDiv'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const articlesData = await getArticlesData();
  const pressData = await getPressData();
  const exhibitionsData = await getExhibitionsData();
  const awardsData = await getAwardsData();
  // const p = await getOnlinePressData()

  return {
    props: {
      articlesData,
      pressData,
      exhibitionsData,
      awardsData,
      // pressOnlineData,
    },
  };
}
