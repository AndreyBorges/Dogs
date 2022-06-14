import React from "react";
import styles from "./PhotoCommentsForm.module.css";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import { useFetch } from "../../Hooks";
import { POST_COMMENTS, ErrorComponent } from "../";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { url, options } = POST_COMMENTS(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((prev) => [...prev, json]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.commentsForm} ${
        single ? styles.commentsSingleForm : ""
      }`}
    >
      <textarea
        className={styles.text}
        id="comment"
        name="comment"
        placeholder="Deixe seu comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.btnSend}>
        <Enviar />
      </button>
      <ErrorComponent error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
