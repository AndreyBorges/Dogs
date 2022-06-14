import React from "react";
import { useFetch } from "../../Hooks";
import { ErrorComponent, Loading, PHOTO_GET, PhotoContent } from "../";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, erro, loading, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  const handleOutSideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setModalPhoto(null);
    }
  };

  return (
    <div className={styles.feedModal} onClick={handleOutSideClick}>
      {erro && <ErrorComponent error={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
