import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, err, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        name={name}
        id={name}
      />
      {err && <p className={styles.err}>{err}</p>}
    </div>
  );
};

export default Input;
