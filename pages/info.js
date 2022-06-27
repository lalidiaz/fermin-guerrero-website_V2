/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import { About, Contact, Footer, Press, Awards, Articles, Exhibitions, PressOnline, InfoMobile } from "@/components/index";
import { getArticlesData, getExhibitionsData, getPressData, getAwardsData } from "@/utils/helpers";

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
    behavior: "smooth",
    block: "start",
  });
};

export default function Info({ articlesData, pressData, exhibitionsData, awardsData }) {
  const [visibleSection, setVisibleSection] = useState();
  const sidenavRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const awardsRef = useRef(null);
  const articlesRef = useRef(null);
  const exhibitionsRef = useRef(null);
  const pressRef = useRef(null);

  const getObjects = (data) => {
    return Object.values(data).map((element) => element);
  };

  const articles = getObjects(articlesData);
  const exhibitions = getObjects(exhibitionsData);
  const awards = getObjects(awardsData);
  const pressPapers = pressData.papers;
  const pressOnline = pressData.online;

  const sectionRefs = [
    { section: "about", ref: aboutRef, name: "About" },
    { section: "contact", ref: contactRef, name: "Contact" },
    { section: "press", ref: pressRef, name: "Press" },
    { section: "awards", ref: awardsRef, name: "Awards & Distinctions" },
    { section: "articles", ref: articlesRef, name: "Research & Articles" },
    { section: "exhibitions", ref: exhibitionsRef, name: "Exhibitions" },
  ];

  const sectionsInfo = [
    { component: <About />, id: "about", ref: aboutRef },
    { component: <Contact />, id: "contact", ref: contactRef },
    {
      component: [<Press data={pressPapers} title='Print (selected):' />, <PressOnline data={pressOnline} title='Print Online (selected):' />],
      id: "press",
      ref: pressRef,
    },
    {
      component: <Awards data={awards} />,
      id: "awards",
      ref: awardsRef,
    },
    {
      component: <Articles data={articles} />,
      id: "articles",
      ref: articlesRef,
    },
    {
      component: <Exhibitions data={exhibitions} />,
      id: "articles",
      ref: exhibitionsRef,
    },
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSection]);

  return (
    <>
      <Head>
        <title>Info</title>
        <meta name='description' content="Fermin Guerrero's graphic designer and typefase designer information, contact, press, articles." />
      </Head>

      <div className='wrapper-info'>
        <img className='image' src='https://res.cloudinary.com/lali/image/upload/v1643735965/aboutmepicture_e0nbsk.jpg' alt='image-info-graphic-designer' />

        <div className='mobile-info'>
          <InfoMobile press={pressPapers} pressOnline={pressOnline} articles={articles} exhibitions={exhibitions} awards={awards} pressOnline={pressOnline} />
        </div>
        <div className='content-info-desktop'>
          <div className='navigation'>
            <aside className='sticky' id='aside' ref={sidenavRef}>
              {sectionRefs.map((item) => (
                <button
                  key={item.section}
                  type='button'
                  className={`header_link ${visibleSection === item.section && "selected"}`}
                  onClick={() => {
                    scrollTo(item.ref.current);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </aside>
          </div>

          <div className='sections-wrapper'>
            {sectionsInfo.map((item, index) => (
              <section className='sectionInfo' id={item.id} ref={item.ref} key={index}>
                {item.id !== "press" && item.component}
                {item.id === "press" && item.component.map((comp) => comp)}
              </section>
            ))}
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

  return {
    props: {
      articlesData,
      pressData,
      exhibitionsData,
      awardsData,
    },
  };
}
