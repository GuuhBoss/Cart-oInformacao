import "../css/style.css";
import { isAuthenticated } from "../apiAuth/Auth";
import { useState } from "react";

const Dashboard = () => {
  const { user } = isAuthenticated();
  console.log(user);

  const [values, setValues] = useState({
    idade: "",
    doenca: "",
    alergia: "",
    sangue: "",
    covid: false,
    nif: null,
    vacinacao: "",
    editar: false,
    salvo: false,
  });

  const editar = () => {};

  return (
    <div className="d-flex vh justify-content-center align-items-center border border-danger">
      <div className="card">
        <div className="card-header text-center">
          <h3>
            <strong>Hello {user.nome}</strong>
          </h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Este é o teu cartãozinho de informações
          </h5>
          <p className="card-text">
            Preencha tudo da melhor forma possivel de acordo com o seu
            conhecimento
          </p>
          <div className="row">
            <div className="col">
              <div className="row">
                <label>Idade: {user.idade}</label>
              </div>
              <div className="row">
                <label>Doenças: {user.doenca}</label>
              </div>
              <div className="row">
                <label>Alergia: {user.alergia}</label>
              </div>
              <div className="row">
                <label>NIF:{user.nif}</label>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <label>Tipo Sanguineo: {user.sangue} </label>
              </div>
              <div className="row">
                <label>Covid: {user.covid} </label>
              </div>
              <div className="row">
                <label>Vacinação: {user.vacinacao} </label>
              </div>
              <div className="row">
                <label>Dose: {user.dose} </label>
              </div>
            </div>
          </div>
          <button className="btn btn-warning mt-3" onClick={editar}>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
