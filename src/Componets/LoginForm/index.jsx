import React from "react";
import styles from "./LoginForm.module.css";
import stylesBtn from "../ButtonForm/Button.module.css";
import { Link } from "react-router-dom";
import { Input, ButtonForm, UserContext, ErrorComponent, Head } from "../";
import { useForm } from "../../Hooks";

const LoginForm = () => {
  const user = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.validate() && password.validate()) {
      userLogin(user.value, password.value);
    }
  };

  return (
    <section className={`animeLeft`}>
      <Head title="Login" description="Login do site Dogs." />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="user" {...user} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <ButtonForm disabled name="Carregando..." />
        ) : (
          <ButtonForm name="Entrar" />
        )}
        <ErrorComponent error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/lost">
        Perdeu a Senha ?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/create">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
