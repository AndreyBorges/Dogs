import React from "react";
import { PHOTO_DELETE } from "../";
import { useFetch } from "../../Hooks";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Deseja realmente excluir a foto?");
    if (confirm) {
      const { url, options } = await PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={styles.photoDelete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.photoDelete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
