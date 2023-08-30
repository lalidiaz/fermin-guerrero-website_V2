/* eslint-disable @next/next/no-img-element */
import { ImageListItem, ImageList } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { isImage } from "@/utils/helpers";
import { v4 as uuidv4 } from "uuid";

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

const ImageGallery = ({ media }) => {
  const classes = stylesImgList();

  const getMedia =
    media &&
    media.map((item) => {
      return (
        <ImageListItem
          key={uuidv4()}
          cols={item.fields.cols}
          rows={item.fields.rows}
        >
          {isImage(item.fields.url) ? (
            <img
              key={uuidv4()}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={item.fields.url}
              alt="graphic-design"
              srcSet={srcset(
                item.fields.url,
                121,
                item.fields.rows,
                item.fields.cols
              )}
            />
          ) : (
            <video
              key={uuidv4()}
              autoPlay
              muted
              loop
              playsinline
              webkit-playsinline
              controls
              controlsList="nofullscreen"
              className="video"
              poster={item.fields.portada}
            >
              <source
                key={uuidv4()}
                src={item.fields.url}
                srcSet={srcset(
                  item.fields.url,
                  121,
                  item.fields.rows,
                  item.fields.cols
                )}
              />
            </video>
          )}
        </ImageListItem>
      );
    });
  return (
    <ImageList
      gap={13}
      variant="quilted"
      cols={4}
      rowHeight="auto"
      className={classes.imageList}
    >
      {media && media.length && getMedia}
    </ImageList>
  );
};

export default ImageGallery;
