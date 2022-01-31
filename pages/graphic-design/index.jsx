import Head from 'next/head';
import { Masonry } from '@/components/index';
import { getProjectsData } from '@/utils/helpers';

export default function graphicDesign({ data, video }) {
  return (
    <>
      <Head>
        <title>Graphic Design</title>
        <meta
          name='description'
          content="Fermin Guerrero's Graphic Design Projects"
        />
      </Head>
      <div className='main-wrapper'>
        <Masonry data={data} video={video} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjectsData();
  const data = projects.filter((element) => element.type === 'graphic');
  const videoMp4 = projects.filter((elem) => elem.id === 31);
  const video = videoMp4[0].mp4Gallery;

  return {
    props: {
      data,
      video,
    },
  };
}
