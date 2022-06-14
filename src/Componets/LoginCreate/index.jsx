import React from "react";
import {
  Input,
  ButtonForm,
  USER_POST,
  UserContext,
  ErrorComponent,
  Head,
} from "../";
import { useFetch, useForm } from "../../Hooks";
import styles from "./LoginCreate.module.css";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  };
  return (
    <section className={`animeLeft`}>
      <Head title="Cadastro" description="Cadastro do site Dogs." />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <ButtonForm disabled name="Cadastrando..." />
        ) : (
          <ButtonForm name="Cadastrar" />
        )}
        <ErrorComponent error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
