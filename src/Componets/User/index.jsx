import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  UserHeader,
  Feed,
  UserPhotoPost,
  UserStats,
  UserContext,
  NotFound,
  Head,
} from "../";

const User = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <Head title={`Minha Conta`} description={`Meu Perfil`} />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
