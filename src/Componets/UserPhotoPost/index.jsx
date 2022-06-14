import React from "react";
import styles from "./UserPhotoPost.module.css";
import { Input, ButtonForm, Head, ErrorComponent, PHOTO_POST } from "../";
import { useFetch, useForm } from "../../Hooks";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    formData.append("img", img.raw);
    request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Postar foto" description="Postar foto do seu pet." />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <ButtonForm disabled name="Enviando..." />
        ) : (
          <ButtonForm name="Enviar" />
        )}
        <ErrorComponent error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default UserPhotoPost;
