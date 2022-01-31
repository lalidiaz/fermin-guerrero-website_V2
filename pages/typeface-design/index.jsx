import Head from 'next/head';
import { Masonry } from '@/components/index';
import { getProjectsData } from '@/utils/helpers';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     height: '100%',
//   },
// })

export default function TypefaceDesign({ data }) {
  // const classes = useStyles()

  return (
    <>
      <Head>
        <title>Typeface Design</title>
        <meta name='description' content="Fermin Guerrero's typefaces" />
      </Head>
      <div className='main-wrapper'>
        <Masonry data={data} />
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
