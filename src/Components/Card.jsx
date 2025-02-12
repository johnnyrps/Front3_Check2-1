import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import styles from "./Card.module.css";
import { useContext } from "react";
import { NavBarContext } from "../utils/NavBarContext";
// import { Link } from "react-router-dom";
// import { ContextGlobal } from "./utils/global.context";


const Card = ({ nome, matricula, usuario }) => { 
    const { contextIsLight } = useContext(NavBarContext);

  return (
    <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
      />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/dentist/${matricula}`}>
          <h5 className={`card-title ${styles.title}`}>{nome}</h5>
        </Link>
        <p className="card-text">{usuario?.username}</p>
      </div>
    </div>
  );
};

export default Card;
