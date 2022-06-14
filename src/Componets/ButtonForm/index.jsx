import React from "react";
import styles from "./Button.module.css";

const ButtonForm = ({ name, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {name}
    </button>
  );
};

export default ButtonForm;
