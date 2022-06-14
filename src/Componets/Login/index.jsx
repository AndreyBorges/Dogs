import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  LoginForm,
  LoginCreate,
  LoginPassLost,
  LoginPassReset,
  UserContext,
  NotFound,
  Head,
} from "../";

import styles from "./Login.module.css";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Head title="Login" description="Login do site Dogs." />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPassLost />} />
          <Route path="reset" element={<LoginPassReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
