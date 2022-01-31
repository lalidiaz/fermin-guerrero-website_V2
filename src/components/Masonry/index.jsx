/* eslint-disable @next/next/no-img-element */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

const useStyles = makeStyles({
  label: {
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export default function Masonry({ data, video }) {
  console.log('data', data);
  const classes = useStyles();

  return (
    <ImageList variant='masonry' cols={3} gap={13} className={classes.label}>
      {data.map((project) => (
        <Link
          key={project.id}
          href={`/graphic-design/[slug]`}
          as={`/graphic-design/${project.name}`}
        >
          <a>
            <div className='container'>
              <ImageListItem key={project.id}>
                {project.id == 31 ? (
                  <video
                    preload='none'
                    playsinline
                    autoPlay
                    muted
                    loop
                    width='100%'
                    height='auto'
                    className={classes.videoClass}
                  >
                    <source src={video} type='video/mp4' />
                  </video>
                ) : (
                  <img src={project.image} alt={project.name} />
                )}
                <div className='text'>
                  <p>{project.name}</p>
                </div>
              </ImageListItem>
            </div>
          </a>
        </Link>
      ))}
    </ImageList>
  );
}
