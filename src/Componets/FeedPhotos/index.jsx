import React from "react";
import { FeedPhotosItem, ErrorComponent, PHOTOS_GET, Loading } from "../";
import { useFetch } from "../../Hooks";
import styles from "./FeedPhotos.module.css";
import { useEffect } from "react";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinity }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 1;
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user,
      });

      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        return setInfinity(false);
      }
      return json;
    };
    fetchPhotos();
  }, [request, user, page, setInfinity]);

  if (error) return <ErrorComponent error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feedPhotos} animeLeft`}>
        {data.map((photo) => {
          return (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
