import Head from 'next/head';
import { useState } from 'react';
import { getLandingData } from '@/utils/helpers';
import Image from 'next/image';
import { Footer } from '@/components/index';

export default function Home({ data }) {
  const [img, setImg] = useState(0);
  const mobile = data.mobile;
  const desktop = data.desktop;

  function handleMouseMove() {
    setImg(Math.floor(Math.random() * desktop.length));
  }

  return (
    <div className='hero' id='#home'>
      <Head>
        <title>Fermin Guerrero</title>
        <meta
          name='description'
          content='Fermin Guerrero graphic designer and typefase designer web/portfolio.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main-wrapper'>
        <Image
          layout='fill'
          style={{
            objectPosition: 'center',
            objectFit: 'cover',
            position: 'relative',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            right: '0',
          }}
          alt='graphic-design-image'
          src='https://res.cloudinary.com/lali/image/upload/v1643546446/BeyondTheBox_dpyev1.jpg'
        />
        <div
          style={{
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            backgroundImage: `url(${desktop[img]})`,
          }}
          onMouseMove={handleMouseMove}
        />
      </main>

      <Footer component='home' />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getLandingData();
  return {
    props: {
      data,
    },
  };
}
