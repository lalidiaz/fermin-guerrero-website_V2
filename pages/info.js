/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import {
  About,
  Contact,
  Awards,
  Exhibitions,
  Footer,
  HoverComponent,
} from '@/components/index';
import Item from '@/components/HoverImage/Item';
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
  exhibitions,
  awardsData,
}) {
  const articles = Object.values(articlesData).map((element) => element);
  const press = Object.values(pressData).map((element) => element);

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
              <HoverComponent data={press} title='Print (selected):' />
              {/* <div>
                <p> Online (selected):</p>
              </div> */}

              {/* <OnlinePress pressOnlineData={pressOnlineData} /> */}
            </section>

            <section className='sectionInfo' id='awards' ref={awardsRef}>
              <Awards awardsData={awardsData} />
            </section>
            <section className='sectionInfo' id='articles' ref={articlesRef}>
              <div className='boxPress'>
                <div className='pageWrapper' style={{ paddingTop: '50px' }}>
                  <div className='projectList'>
                    {articles.map((item, index) => (
                      <div key={item.id}>
                        <a
                          className='linkArticle'
                          href={item.url}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <Item
                            linkDescription={item.linkDescription}
                            url={item.url}
                            description={item.description}
                            description2={item.description2}
                            year={item.year}
                            index={index}
                            articles={articles}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section
              className='sectionInfo'
              id='exhibitions'
              ref={exhibitionsRef}
            >
              <Exhibitions exhibitions={exhibitions} />
            </section>
            {/* <div className='bottomSpacer' /> */}
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
  const exhibitions = await getExhibitionsData();
  const awardsData = await getAwardsData();
  // const p = await getOnlinePressData()

  return {
    props: {
      articlesData,
      pressData,
      exhibitions,
      awardsData,
      // pressOnlineData,
    },
  };
}
