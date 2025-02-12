import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { removeTokenFromStorage } from "./utils/localStorage.service";
import styles from "./Navbar.module.css";
import { AuthContext } from "./utils/AuthContext";

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme, setLogout } =
    useContext(ContextGlobal);

  const {login, setLogin, emptyUserData} = useContext(AuthContext)
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  const logout = () => {
    setLogout();
    setLogin(false);
    emptyUserData();
    removeTokenFromStorage();
  };

  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                { login ? (
                  <button
                    onClick={() => logout()}
                    className={`btn btn-${isDarkMode ? "dark" : "light"}`}
                    
                    >Logout
                    </button>
                  ) : (
                    <Link className="nav-link" to="/login"> 
                    Login
                    </Link>
                  )}
                </li>
                <li className={`nav-item`}>
                    {/*Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
               
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn btn-${isDarkMode ? "light" : "dark"} ${styles.btnStyle
                    }`}
                    onClick={changeTheme}
                >
                  {isDarkMode ? "☀" : "🌙"}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
