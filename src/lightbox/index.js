import React, { useState, useCallback } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
  },
}));

const photos = [];
for (let index = 0; index < 20; index++) {
  photos.push({
    src: "https://picsum.photos/1280/720",
  });
}

const GalleryLightbox = () => {
  const classes = useStyles();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = () => {
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setPhotoIndex(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div className="see-allbutton">
        <Button onClick={openLightbox} variant="contained" color="primary">
          ดูทั้งหมด
        </Button>
      </div>

      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].src}
          nextSrc={photos[(photoIndex + 1) % photos.length].src}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
          onCloseRequest={closeLightbox}
          imageCaption={"Image " + (photoIndex + 1) + " of " + photos.length}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryLightbox;
