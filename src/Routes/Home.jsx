import { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";

const Home = () => {
  const [dentist, setDentist] = useState([]);

 //GET 
  async function getAllDentist() {
    try {
      const response = await axios.get("https://dhodonto.ctdprojetos.com.br/dentista");
      setDentist(response.data);
    } catch (error) {
      alert("Erro ao buscar dentistas "+error);
    }
  }

  useEffect(() => {
    getAllDentist(); 
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {console.log(dentist)}
        {dentist.length ? dentist.map((dentist) => (
            <Card dentist={dentist} key={dentist.matricula} />
          ))
        : null}
      </div>
    </>
  );
};

export default Home;
