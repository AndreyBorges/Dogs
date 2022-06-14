import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Footer,
  Header,
  Initial,
  Login,
  ContextStorage,
  ProtectedRouter,
  User,
  Photo,
  UserProfile,
  NotFound,
} from "../../Componets";

const Home = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Initial />} />
              <Route path="login/*" element={<Login />} />
              <Route path="photo/:id" element={<Photo />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </ContextStorage>
      </BrowserRouter>
    </div>
  );
};

export default Home;
