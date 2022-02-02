import Head from 'next/head';
import { Masonry } from '@/components/index';
import { getProjectsData } from '@/utils/helpers';

export default function allProjects({ data, video }) {
  return (
    <>
      <Head>
        <title>All</title>
        <meta name='description' content="Fermin Guerrero's projects." />
      </Head>
      <div className='main-wrapper'>
        <div className='masonry-wrap'>
          <Masonry data={data} video={video} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getProjectsData();
  const filterVideos = data.filter((elem) => elem.id === 31);
  const video = filterVideos[0].mp4Gallery;
  return {
    props: {
      data,
      video,
    },
  };
}
