import Head from 'next/head';
import { useState, useRouter } from 'react';
import { getPaths, getProject, getProjectsData } from '@/utils/helpers';
import { ImageGallery } from '@/components/index';
import Grid from '@mui/material/Grid';

export default function Graphic({ data, projects, path }) {
  return (
    <>
      <div className='container'>
        {data.map((element) => {
          return (
            <>
              <Head>
                <title>{element.name}</title>
                <meta name='description' content={element.description} />
              </Head>

              {/* <CoverImage element={element} /> */}

              <Grid container>
                <div className='grid-container'>
                  <Grid item xs={12} lg={2}>
                    <div className='name'>{element.name}</div>
                    {/* <SocialMedia element={element} /> */}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={4}
                    // className={styles.tagYearContainer}
                  >
                    {/* <div>
                  <p>{element.year}</p>
                  <Credits element={element} />
                </div>
                <Tags element={element} /> */}
                  </Grid>
                  {/* <DescriptionProject element={element} /> */}
                </div>
              </Grid>
              <ImageGallery element={data} />
              {/* <NavigationProject
            element={element}
            navigationProjects={navigationProjects}
          /> */}
            </>
          );
        })}
      </div>
    </>
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
