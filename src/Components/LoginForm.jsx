import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "./utils/AuthContext";


const LoginForm = () => {

  const navigate = useNavigate();

  const {userData, fillUserDataState} = useContext(AuthContext)

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    auth();
    e.preventDefault();
    
  };
  
  async function auth() {
    try {
      const response = await axios.post("https://dhodonto.ctdprojetos.com.br/auth",
      {
        username: user,
        password: password
      }
      )
      navigate ("/home")
      fillUserDataState(response.data.token)
      console.log(response.data.token);
    } catch (error) {
      alert("Erro ao fazer login")
    }
  }

  return (
    < >
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`
        }
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              value={user}
              onChange={(event)=>setUser(event.target.value)}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
