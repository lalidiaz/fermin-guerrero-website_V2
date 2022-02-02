import Head from 'next/head';
import { Masonry } from '@/components/index';
import { getProjectsData } from '@/utils/helpers';

export default function TypefaceDesign({ data }) {
  return (
    <>
      <Head>
        <title>Typeface Design</title>
        <meta name='description' content="Fermin Guerrero's typefaces" />
      </Head>
      <div className='main-wrapper'>
        <div className='masonry-wrap'>
          <Masonry data={data} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjectsData();
  const data = projects.filter((element) => element.type === 'typeface');
  return {
    props: {
      data,
    },
  };
}
