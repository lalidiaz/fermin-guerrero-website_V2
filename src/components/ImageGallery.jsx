/* eslint-disable @next/next/no-img-element */
import { ImageListItem, ImageList } from "@mui/material";
import { makeStyles } from "@mui/styles";

const stylesImgList = makeStyles({
  imageList: {
    width: "100%",
    height: "100%",
    ["@media (max-width:480px)"]: {
      display: "flex",
      flexDirection: "column",
    },
  },
});

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
}

const ImageGallery = ({ images, videos }) => {
  const classes = stylesImgList();

  const getImages =
    images &&
    images.map((img) => (
      <ImageListItem
        key={img.fields.id}
        cols={img.fields.cols}
        rows={img.fields.rows}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={img.fields.source}
          alt="graphic-design"
          srcSet={srcset(
            img.fields.source,
            121,
            img.fields.rows,
            img.fields.cols
          )}
        />
      </ImageListItem>
    ));

  const getVideos =
    videos &&
    videos.map((video) => (
      <ImageListItem
        key={video.fields.id}
        cols={video.fields.cols}
        rows={video.fields.rows}
      >
        <video
          autoPlay
          muted
          loop
          playsinline
          webkit-playsinline
          controls
          controlsList="nofullscreen"
          className="video"
          poster={video.fields.poster}
        >
          <source
            src={video.fields.url}
            srcSet={srcset(
              video.fields.url,
              121,
              video.fields.rows,
              video.fields.cols
            )}
          />
        </video>
      </ImageListItem>
    ));

  return (
    <ImageList
      gap={13}
      variant="quilted"
      cols={4}
      rowHeight="auto"
      className={classes.imageList}
    >
      {images && images.length && getImages}
      {videos && videos.length && getVideos}
    </ImageList>
  );
};

export default ImageGallery;
