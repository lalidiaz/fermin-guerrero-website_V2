/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import { getArticlesData, getExhibitionsData, getPressData, getAwardsData } from "@/utils/helpers";
import { masonryAnimation } from "@/utils/animations";
import {
  Wrapper,
  Upper,
  UpperImg,
  AboutMobile,
  AboutDesktop,
  Nav,
  Aside,
  AsideLink,
  SectionsWrapper,
  SectionInfo,
} from "@/styles/About";
import {
  About,
  Contact,
  Press,
  Awards,
  Articles,
  Exhibitions,
  PressOnline,
  AboutMobile,
} from "@/components/index";

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

const Info = ({ articlesData, pressData, exhibitionsData, awardsData }) => {
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
      component: [
        <Press data={pressPapers} title="Print (selected):" key={pressPapers[2].id} />,
        <PressOnline data={pressOnline} title="Print Online (selected):" key={pressOnline[4].id} />,
      ],
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
        <title>About</title>
        <meta
          name="description"
          content="Fermín Guerrero's graphic designer and typeface designer information, contact, press, articles."
        />
      </Head>

      <Wrapper initial="exit" animate="enter" exit="exit">
        <Upper>
          <UpperImg
            variants={masonryAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            src="https://res.cloudinary.com/lali/image/upload/v1643735965/aboutmepicture_e0nbsk.jpg"
            alt="image-info-graphic-designer"
          />
        </Upper>

        <AboutMobile>
          <AboutMobile
            press={pressPapers}
            pressOnline={pressOnline}
            articles={articles}
            exhibitions={exhibitions}
            awards={awards}
          />
        </AboutMobile>
        <AboutDesktop>
          <Nav>
            <Aside id="aside" ref={sidenavRef}>
              {sectionRefs.map((item) => (
                <AsideLink
                  // className={`header_link ${visibleSection === item.section && "selected"}`}
                  key={item.section}
                  type="button"
                  item={item.section}
                  visibleSection={visibleSection}
                  onClick={() => {
                    scrollTo(item.ref.current);
                  }}
                >
                  {item.name}
                </AsideLink>
              ))}
            </Aside>
          </Nav>

          <SectionsWrapper>
            {sectionsInfo.map((item, index) => (
              <SectionInfo id={item.id} ref={item.ref} key={index}>
                {item.id !== "press" && item.component}
                {item.id === "press" && item.component.map((comp) => comp)}
              </SectionInfo>
            ))}
          </SectionsWrapper>
        </AboutDesktop>
      </Wrapper>
    </>
  );
};

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
export default Info;
