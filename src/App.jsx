
import { useEffect, useContext } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from './Components/utils/global.context';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false;

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
