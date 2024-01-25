import {
  Accordion,
  Press,
  Articles,
  Exhibitions,
  About,
  Contact,
  Awards,
} from "@/components/index";

const AboutMobile = ({
  about,
  paperOnline,
  paperPress,
  articles,
  exhibitions,
  awards,
  email,
  location,
  instagram,
  twitter,
  linkedin,
}) => {
  return (
    <>
      <Accordion title="About" content={<About data={about.fields.about} />} />
      <Accordion
        title="Contact"
        content={
          <Contact
            email={email}
            location={location}
            instagram={instagram}
            twitter={twitter}
            linkedin={linkedin}
          />
        }
      />
      <Accordion
        title="Press"
        content={<Press paperOnline={paperOnline} paperPress={paperPress} />}
      />
      <Accordion
        title="Awards & Distinctions"
        content={<Awards data={awards} />}
      />
      <Accordion
        title="Research & Articles"
        content={<Articles data={articles} />}
      />
      <Accordion
        title="Exhibitions"
        content={<Exhibitions data={exhibitions} />}
      />
    </>
  );
};

export default AboutMobile;
