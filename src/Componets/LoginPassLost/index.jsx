import React from "react";
import { Input, ButtonForm, PASSWORD_LOST, ErrorComponent, Head } from "../";
import { useFetch, useForm } from "../../Hooks";

const LoginPassLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });

      await request(url, options);
    }
  };

  return (
    <section className="animeLeft">
      <Head
        title="Recuperar senha"
        description="Recuperar senha do site Dogs."
      />
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="login"
            label={"Email / Usuário"}
            placeholder="Digite seu e-mail"
            name="login"
            {...login}
          />
          {loading ? (
            <ButtonForm disabled name={"Enviando..."} />
          ) : (
            <ButtonForm name={"Enviar"} />
          )}
        </form>
      )}
      <ErrorComponent error={error} />
    </section>
  );
};

export default LoginPassLost;
