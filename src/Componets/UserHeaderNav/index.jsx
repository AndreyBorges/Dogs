import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHaderNav.module.css";
import { useMedia } from "../../Hooks";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobileMenu = useMedia("(max-width: 40rem)");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {mobileMenu && (
        <button
          aria-label="Menu"
          className={`${styles.mobileBtn} ${
            menuOpen && styles.mobileBtnActive
          } `}
          onClick={() => setMenuOpen(!menuOpen)}
        ></button>
      )}
      <nav
        className={`${mobileMenu ? styles.navMobile : styles.nav} ${
          menuOpen && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobileMenu && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatistica">
          <Estatisticas />
          {mobileMenu && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobileMenu && "Adicionar Foto"}
        </NavLink>
        <button onClick={() => userLogout()}>
          <Sair />
          {mobileMenu && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
