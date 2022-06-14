import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, ButtonForm, PASSWORD_RESET, ErrorComponent, Head } from "../";
import { useFetch, useForm } from "../../Hooks";

const LoginPassReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  const password = useForm();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  React.useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    const key = param.get("key");
    const login = param.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <section className="animeLeft">
      <Head
        title="Recuperar senha"
        description="Recuperar senha do site Dogs."
      />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Nova senha"}
          type={"password"}
          name={"password"}
          {...password}
        />
        {loading ? (
          <ButtonForm disabled name={"Enviando..."} />
        ) : (
          <ButtonForm name={"Resetar"} />
        )}
      </form>
      <ErrorComponent error={error} />
    </section>
  );
};

export default LoginPassReset;
