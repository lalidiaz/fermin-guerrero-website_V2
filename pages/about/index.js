/* eslint-disable @next/next/no-img-element */
import { masonryAnimation } from "@/utils/animations";
import { client } from "src/lib/cms";
import Head from "next/head";
import {
  Wrapper,
  Upper,
  UpperImg,
  AboutDesktop,
  Nav,
  Aside,
  AsideLink,
  SectionsWrapper,
  SectionInfo,
  // FIX ME MOBILE
  AboutMobileStyles,
} from "@/styles/About";
import {
  About,
  Contact,
  Press,
  Awards,
  Articles,
  Exhibitions,
  AboutMobile,
} from "@/components/index";

const Info = ({ about, press, exhibitions, awards, articles }) => {
  const sections = [
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
      component: <Press data={press} />,
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

  const getSections = sections.map((item) => (
    <AsideLink
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      key={item.id}
      type="button"
      item={item.id}
    >
      {item.name}
    </AsideLink>
  ));

  const getSectionsContent = sections.map((item, index) => (
    <SectionInfo id={item.id} key={index}>
      {item.component}
    </SectionInfo>
  ));

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
            src={about.fields.image}
            alt="image-info-graphic-designer"
          />
        </Upper>

        <AboutMobileStyles>
          <AboutMobile
            press={press}
            articles={articles}
            exhibitions={exhibitions}
            awards={awards}
          />
        </AboutMobileStyles>
        <AboutDesktop>
          <Nav>
            <Aside id="aside">{getSections}</Aside>
          </Nav>

          <SectionsWrapper>{getSectionsContent}</SectionsWrapper>
        </AboutDesktop>
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const about = await client.getEntries({ content_type: "about" });
  const press = await client.getEntries({ content_type: "press" });
  const exhibitions = await client.getEntries({ content_type: "exhibition" });
  const awards = await client.getEntries({ content_type: "awards" });
  const articles = await client.getEntries({ content_type: "article" });

  return {
    props: {
      about: about.items[0],
      press: press.items,
      exhibitions: exhibitions.items,
      awards: awards.items,
      articles: articles.items,
    },
  };
}
export default Info;
