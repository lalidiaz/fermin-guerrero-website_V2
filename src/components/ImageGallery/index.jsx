/* eslint-disable @next/next/no-img-element */
import { ImageListItem, ImageList } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
}

export default function ImageGallery({ element }) {
  console.log(
    'element',
    element.map((item) => item.sources)
  );

  return (
    <ImageList
      gap={13}
      variant='quilted'
      cols={4}
      rowHeight='auto'
      // className={classes.imageList}
    >
      {Object.values(element.sources).map((source) => {
        console.log('source', source);
        return (
          <ImageListItem
            key={element.id}
            // cols={cols}
            // rows={rows}
            // className={styles.imageListItem}
          >
            {/* {type === 'img' ? (
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src={img}
                alt='graphic-design'
                srcSet={srcset(img, 121, rows, cols)}
              />
            ) : (
              // <LazyLoad>
              <video
                autoPlay
                muted
                loop
                playsinline
                webkit-playsinline
                controls
                controlsList='nofullscreen'
                // className={styles.video}
                poster={poster}
              >
                <source src={img} srcSet={srcset(img, 121, rows, cols)} />
              </video>
              // </LazyLoad>
            )} */}
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
