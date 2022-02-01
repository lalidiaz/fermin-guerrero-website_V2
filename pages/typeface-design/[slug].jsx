import Head from 'next/head';
import { getPaths, getProject, getProjectsData } from '@/utils/helpers';
import { ImageGallery, CoverImg, Credits } from '@/components/index';

export default function Type({ data, projects, path }) {
  return (
    <div className='container'>
      {data.map((element) => (
        <>
          <Head>
            <title>{element.name}</title>
            <meta name='description' content={element.description} />
          </Head>

          <div key={element.id}>
            <CoverImg element={element} />
            <div className='grid-container'>
              <div>
                <p className='name'>{element.name}</p>
              </div>
              <div className='year-and-tags'>
                <p>{element.year}</p>
                <Credits element={element} />
              </div>

              <div className='description'>{element.description}</div>
            </div>

            <ImageGallery element={element} />
          </div>
        </>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getPaths();
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const path = params.slug;
  const data = await getProject(path);
  const projects = await getProjectsData();

  return {
    props: {
      data,
      projects,
      path,
    },
  };
}
