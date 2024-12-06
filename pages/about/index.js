import { masonryAnimation } from "@/utils/animations";
import { client } from "src/lib/cms";
import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { device } from "@/styles/device";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  About,
  Contact,
  Press,
  Awards,
  Articles,
  Exhibitions,
  AboutMobile,
} from "@/components/index";

const createSections = (
  about,
  paperOnline,
  paperPress,
  awards,
  articles,
  exhibitions
) => [
  {
    id: "about",
    name: "About",
    component: <About data={about.fields.about} />,
  },
  {
    id: "contact",
    name: "Contact",
    component: (
      <Contact
        email={about.fields.email}
        location={about.fields.location}
        instagram={about.fields.instagram}
        twitter={about.fields.twitter}
        linkedin={about.fields.linkedin}
      />
    ),
  },
  {
    id: "press",
    name: "Press",
    component: <Press paperOnline={paperOnline} paperPress={paperPress} />,
  },
  {
    id: "awards",
    name: "Awards & Distinctions",
    component: <Awards data={awards} />,
  },
  {
    id: "articles",
    name: "Research & Articles",
    component: <Articles data={articles} />,
  },
  {
    id: "exhibitions",
    name: "Exhibitions",
    component: <Exhibitions data={exhibitions} />,
  },
];

const SEO = () => (
  <Head>
    <title>About</title>
    <meta
      name="description"
      content="Fermín Guerrero's graphic designer and typeface designer information, contact, press, articles."
    />
  </Head>
);

const Info = ({ about, press, exhibitions, awards, articles }) => {
  const [activeLink, setActiveLink] = useState(null);

  const paperPress = press.filter((item) => !item.fields.online);
  const paperOnline = press.filter((item) => item.fields.online);

  const sections = createSections(
    about,
    paperOnline,
    paperPress,
    awards,
    articles,
    exhibitions
  );

  const renderNavLinks = () =>
    sections.map((item) => (
      <AsideLink
        key={item.id}
        weight={activeLink === item.id ? "bold" : "thin"}
        to={item.id}
        spy={true}
        smooth={true}
        duration={1000}
        type="button"
        item={item.id}
        onClick={() => setActiveLink(item.id)}
      >
        {item.name}
      </AsideLink>
    ));

  const renderSections = () =>
    sections.map((item) => (
      <SectionInfo key={item.id} id={item.id}>
        {item.component}
      </SectionInfo>
    ));
  return (
    <>
      <SEO />
      <Wrapper initial="exit" animate="enter" exit="exit">
        <Upper>
          <UpperImg
            variants={masonryAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            src={about.fields.image}
            alt="image-info-graphic-designer"
          />
        </Upper>

        <AboutMobileStyles>
          <AboutMobile
            about={about}
            paperOnline={paperOnline}
            paperPress={paperPress}
            articles={articles}
            exhibitions={exhibitions}
            awards={awards}
            email={about.fields.email}
            location={about.fields.location}
            instagram={about.fields.instagram}
            twitter={about.fields.twitter}
            linkedin={about.fields.linkedin}
          />
        </AboutMobileStyles>

        <AboutDesktop>
          <Nav>
            <Aside id="aside">{renderNavLinks()}</Aside>
          </Nav>
          <SectionsWrapper>{renderSections()}</SectionsWrapper>
        </AboutDesktop>
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  try {
    const [about, press, exhibitions, awards, articles] = await Promise.all([
      client.getEntries({ content_type: "about" }),
      client.getEntries({ content_type: "press" }),
      client.getEntries({ content_type: "exhibition" }),
      client.getEntries({ content_type: "awards" }),
      client.getEntries({ content_type: "article" }),
    ]);
    return {
      props: {
        about: about.items[0],
        press: press.items,
        exhibitions: exhibitions.items,
        awards: awards.items,
        articles: articles.items,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}

const Wrapper = styled(motion.div)`
  line-height: 1.4;
  padding: 40px 0px 0px;

  @media ${device.laptop} {
    padding: 0px 0px 60px 0px;
  }
`;

const Upper = styled.div`
  min-height: inherit;
  @media ${device.laptop} {
    min-height: 800px;
  }
`;
const UpperImg = styled(motion.img)`
  padding: 38px 20px;
  width: 100%;
`;
const AboutMobileStyles = styled.div`
  display: block;
  padding: 0px 20px 20px;

  p {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    display: none;
  }
`;
const AboutDesktop = styled.div`
  display: none;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1;
    width: 100%;
    padding: 0px 20px;
    font-size: 1.1rem;
  }
`;
const Nav = styled.div`
  @media ${device.laptop} {
    grid-column: 1/5;
    height: 100%;
  }
`;
const Aside = styled.aside`
  @media ${device.laptop} {
    padding-top: 50px;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
`;
const AsideLink = styled(Link)`
  @media ${device.laptop} {
    border: none;
    background: transparent;
    color: white;
    text-align: left;
    padding-top: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: ${(props) => props.weight};
  }
`;
const SectionsWrapper = styled.div`
  @media ${device.laptop} {
    grid-column: 5/12;
    padding-left: 3px;
  }
`;
const SectionInfo = styled.section`
  padding: 4rem 0rem 0rem 0rem;
`;

export default Info;
