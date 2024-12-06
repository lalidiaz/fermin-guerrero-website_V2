/* eslint-disable @next/next/no-img-element */
import { ImageListItem, ImageList } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { isImage } from "@/utils/helpers";

const useStyles = makeStyles({
  imageList: {
    width: "100%",
    height: "100%",
    "@media (max-width:480px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  media: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

const getSrcSet = (image, size, rows = 1, cols = 1) => {
  const dimensions = `w=${size * cols}&h=${size * rows}`;
  const baseUrl = `${image}?${dimensions}&fit=crop&auto=format`;
  return `${baseUrl} 1x, ${baseUrl}&dpr=2 2x`;
};

const MediaItem = ({ item }) => {
  const classes = useStyles();
  const { url, cols, rows, portada } = item.fields;

  if (isImage(url)) {
    return (
      <img
        className={classes.media}
        src={url}
        alt="graphic-design"
        srcSet={getSrcSet(url, 121, rows, cols)}
        loading="lazy"
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      controlsList="nofullscreen"
      className={classes.video}
      poster={portada}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
};

const ImageGallery = ({ media = [] }) => {
  const classes = useStyles();

  return (
    <ImageList
      gap={13}
      variant="quilted"
      cols={4}
      rowHeight="auto"
      className={classes.imageList}
    >
      {media.map((item) => (
        <ImageListItem
          key={item.fields.url}
          cols={item.fields.cols}
          rows={item.fields.rows}
        >
          <MediaItem item={item} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageGallery;
