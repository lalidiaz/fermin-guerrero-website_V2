/* eslint-disable @next/next/no-img-element */
import { ImageListItem, ImageList } from '@mui/material';
import { makeStyles } from '@mui/styles';

const stylesImgList = makeStyles({
  imageList: {
    width: '100%',
    height: '100%',
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
}

export default function ImageGallery({ element }) {
  const classes = stylesImgList();
  console.log('element', element);
  // console.log(
  //   'element map',
  //   element.map((item) => item.sources)
  // );

  // const iterate = (obj) => {
  //   Object.keys(obj).forEach((key) => {
  //     console.log(`key: ${key}, value: ${obj[key]}`);

  //     if (typeof obj[key] === 'object' && obj[key] !== null) {
  //       iterate(obj[key]);
  //     }
  //   });
  // };

  // console.log('iterate func', iterate(element));

  return (
    <ImageList
      gap={13}
      variant='quilted'
      cols={4}
      rowHeight='auto'
      className={classes.imageList}
    >
      {Object.values(element.sources).map((source) => {
        return (
          <ImageListItem
            key={element.id}
            cols={source.cols}
            rows={source.rows}
            className='image-listItem'
          >
            {source.type === 'img' ? (
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src={source.img}
                alt='graphic-design'
                srcSet={srcset(source.img, 121, source.rows, source.cols)}
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsinline
                webkit-playsinline
                controls
                controlsList='nofullscreen'
                className='video'
                poster={source.poster}
              >
                <source
                  src={source.url}
                  srcSet={srcset(source.url, 121, source.rows, source.cols)}
                />
              </video>
            )}
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
