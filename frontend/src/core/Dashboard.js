import "../css/style.css";
import { isAuthenticated } from "../apiAuth/Auth";
import { useState } from "react";
import { update, UpdateUser } from "./apiCore";

const Dashboard = () => {
  const { user } = isAuthenticated();
  //console.log(user);

  const [values, setValues] = useState({
    idade: user.idade,
    doenca: user.doenca,
    alergia: user.alergia,
    sangue: user.sangue,
    covid: user.covid,
    nif: user.nif,
    vacinacao: user.vacinacao,
    dose: user.dose,
    editar: false,
    salvo: false,
  });

  const {
    idade,
    doenca,
    alergia,
    sangue,
    covid,
    nif,
    vacinacao,
    dose,
    editar,
    salvo,
  } = values;

  const salvar = (e) => {
    e.preventDefault();
    update(user._id, {
      idade,
      doenca,
      alergia,
      sangue,
      covid,
      nif,
      vacinacao,
      dose,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        UpdateUser(
          { idade, doenca, alergia, sangue, covid, nif, vacinacao, dose },
          () => {
            setValues({
              ...values,
              editar: false,
              salvo: true,
            });
          }
        );
      }
    });
  };

  const Editar = () => {
    setValues({
      ...values,
      editar: true,
      salvo: false,
    });
  };

  const normal = () => {
    if (editar === false) {
      return (
        <div className="d-flex vh justify-content-center align-items-center">
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
              <div className="row" id="form">
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
              <button className="btn btn-warning mt-3" onClick={Editar}>
                Editar
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleChange = (data) => (event) => {
    setValues({ ...values, error: false, [data]: event.target.value });
  };

  const Editado = () => {
    if (editar === true) {
      return (
        <div className="d-flex vh justify-content-center align-items-center">
          <div className="d-flex vh justify-content-center align-items-center">
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
                <div className="row" id="form">
                  <div className="col">
                    <div className="row">
                      <label>
                        Idade:{" "}
                        <input
                          value={idade}
                          type="text"
                          name="idade"
                          onChange={handleChange("idade")}
                        />
                      </label>
                    </div>
                    <div className="row">
                      <label>
                        Doenças:{" "}
                        <input
                          value={doenca}
                          type="text"
                          name="doenca"
                          onChange={handleChange("doenca")}
                        />
                      </label>
                    </div>
                    <div className="row">
                      <label>
                        Alergia:{" "}
                        <input
                          value={alergia}
                          type="text"
                          name="alergia"
                          onChange={handleChange("alergia")}
                        />
                      </label>
                    </div>
                    <div className="row">
                      <label>
                        NIF:{" "}
                        <input
                          value={nif}
                          type="text"
                          name="nif"
                          onChange={handleChange("nif")}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <label>
                        Tipo Sanguineo:
                        <input
                          value={sangue}
                          type="text"
                          name="sangue"
                          onChange={handleChange("sangue")}
                        />
                      </label>
                    </div>
                    <div className="row">
                      <label>
                        Covid:
                        <select onChange={handleChange("covid")}>
                          <option value="true">Tenho</option>
                          <option value="false">Não Tenho</option>
                        </select>
                      </label>
                    </div>
                    <div className="row">
                      <label>
                        Vacinação:{" "}
                        <input
                          value={vacinacao}
                          type="text"
                          name="vacinacao"
                          onChange={handleChange("vacinacao")}
                        />
                      </label>
                    </div>
                    <div className="row">
                      <label>
                        Dose:{" "}
                        <input
                          value={dose}
                          type="text"
                          name="dose"
                          onChange={handleChange("dose")}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-warning mt-3" onClick={salvar}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const sucesso = () => (
    <div
      className="alert alert-info text-center"
      style={{ display: salvo ? "" : "none" }}
    >
      Salvo com Sucesso
    </div>
  );
  return (
    <div>
      {sucesso()}
      {normal()}
      {Editado()}
      {/* {JSON.stringify(values)} */}
    </div>
  );
};
export default Dashboard;
