import Head from 'next/head';
import { getPaths, getProject, getProjectsData } from '@/utils/helpers';
import {
  ImageGallery,
  CoverImg,
  Credits,
  Tags,
  Description,
} from '@/components/index';

export default function Graphic({ data, projects, path }) {
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

                <div>
                  <Credits element={element} />
                  <Tags element={element} />
                </div>
              </div>

              <div className='description'>
                <Description element={element.description} />
              </div>
            </div>

            <div className='img-gallery-wrapper'>
              <ImageGallery element={element} />
            </div>
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
