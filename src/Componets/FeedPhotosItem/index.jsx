import React from "react";
import { ImageHelper } from "../";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };
  return (
    <>
      <li onClick={handleClick} className={styles.feedPhotoItem}>
        <ImageHelper src={photo.src} alt={photo.title} />
        <span className={styles.preview}>{photo.acessos}</span>
      </li>
      <li onClick={handleClick} className={styles.feedPhotoItem}>
        <ImageHelper src={photo.src} alt={photo.title} />
        <span className={styles.preview}>{photo.acessos}</span>
      </li>
      <li onClick={handleClick} className={styles.feedPhotoItem}>
        <ImageHelper src={photo.src} alt={photo.title} />
        <span className={styles.preview}>{photo.acessos}</span>
      </li>
    </>
  );
};

export default FeedPhotosItem;
