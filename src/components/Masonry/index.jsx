/* eslint-disable @next/next/no-img-element */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

export default function Masonry({ data, video }) {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ImageList variant='masonry' cols={notMobile ? 3 : 1} gap={13}>
      {data.map((project) => (
        <Link key={project.id} href={`/graphic-design/[slug]`} as={`/graphic-design/${project.slug}`}>
          <a className='masonry-item'>
            <ImageListItem key={project.id}>
              {project.id == 31 ? (
                <video preload='none' playsinline autoPlay muted loop width='100%' height='auto' className='video-masonry{'>
                  <source src={video} type='video/mp4' />
                </video>
              ) : (
                <img src={project.image} alt={project.name} className='img-masonry' />
              )}

              <p className='text'>{project.name}</p>
            </ImageListItem>
          </a>
        </Link>
      ))}
    </ImageList>
  );
}
