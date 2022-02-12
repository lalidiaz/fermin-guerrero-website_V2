import {
  Accordion,
  PressOnline,
  Press,
  Articles,
  Exhibitions,
  About,
  Contact,
  Awards,
} from '@/components/index';

export default function InfoMobile({
  press,
  articles,
  exhibitions,
  awards,
  pressOnline,
}) {
  return (
    <div className='info-mobile-wrapper'>
      <Accordion title='About' content={<About />} />
      <Accordion title='Contact' content={<Contact />} />
      <Accordion
        title='Press'
        content={[
          <Press data={press} title='Print (selected):' />,
          <PressOnline data={pressOnline} title='Print Online (selected):' />,
        ]}
      />

      <Accordion
        title='Awards & Distinctions'
        content={<Awards data={awards} />}
      />
      <Accordion
        title='Research & Articles'
        content={<Articles data={articles} />}
      />
      <Accordion
        title='Exhibitions'
        content={<Exhibitions data={exhibitions} />}
      />
    </div>
  );
}
