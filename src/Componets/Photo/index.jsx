import React from "react";
import styles from "./Photo.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks";
import {
  USERPHOTOINFO_GET,
  Loading,
  ErrorComponent,
  PhotoContent,
  Head,
} from "../";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  console.log(data);
  React.useEffect(() => {
    const { url, options } = USERPHOTOINFO_GET(id);
    request(url, options);
  }, [request, id]);
  if (error) return <ErrorComponent />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={`container mainContainer ${styles.photo}`}>
        <Head
          title={`${data.photo.title}`}
          description={`Foto de ${data.photo.title}`}
        />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
