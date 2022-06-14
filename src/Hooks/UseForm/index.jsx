import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha tem que conter 1 digito, 1 letra maiúscula e 1 letra minúscula e no mínimo 8 caracteres",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números para este campo.",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [err, setErr] = React.useState(null);

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setErr("Campo obrigatório");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErr(types[type].message);
      return false;
    } else {
      setErr(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (err) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    err,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
