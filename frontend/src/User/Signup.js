import "../css/style.css";
import { signup } from "../apiAuth/Auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    nome: "",
    email: "",
    password: "",
    idade: "",
    doenca: "",
    alergia: "",
    sangue: "",
    covid: false,
    nif: null,
    vacinacao: "",
    dose: "",
    error: "",
    success: false,
  });

  const {
    nome,
    email,
    password,
    idade,
    doenca,
    alergia,
    sangue,
    covid,
    nif,
    vacinacao,
    dose,
    success,
    error,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    signup({
      nome,
      email,
      password,
      idade,
      doenca,
      alergia,
      sangue,
      covid,
      nif,
      vacinacao,
      dose,
    }).then((data) => {
      if (data.firstError || data.error) {
        setValues({
          ...values,
          error: data.firstError || data.error,
          success: false,
        });
      } else {
        setValues({
          ...values,
          nome: "",
          email: "",
          password: "",
          idade: "",
          doenca: "",
          alergia: "",
          sangue: "",
          covid: false,
          nif: null,
          vacinacao: "",
          dose: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signupForm = () => (
    <div className="text-center ">
      <form className="form-signup">
        <h1 className="h3 mb-3 font-weight-normal">Crie sua conta</h1>
        <label className="sr-only">Nome</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nome"
          onChange={handleChange("nome")}
          required
          autoFocus
        ></input>
        <label className="hidden">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange("email")}
          required
        />
        <label className="sr-only">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange("password")}
          required
        />
        <label className="sr-only">Idade</label>
        <input
          type="number"
          className="form-control"
          placeholder="Qual a sua Idade?"
          onChange={handleChange("idade")}
        />
        <label className="sr-only">Doença</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tens Alguma Doença?"
          onChange={handleChange("doenca")}
        />
        <label className="sr-only">Alergia</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tens Alergia?"
          onChange={handleChange("alergia")}
        />
        <label className="sr-only">Sangue</label>
        <input
          type="text"
          className="form-control"
          placeholder=" Tipo de Sangue"
          onChange={handleChange("sangue")}
        />
        <label className="sr-only">Covid</label>
        <select className="form-select">
          <option defaultValue>--- Escolhe uma opção ---</option>
          <option value={true}>Sim, tenho</option>
          <option value={false}>Não tenho</option>
        </select>
        <label className="sr-only">NIF</label>
        <input
          type="number"
          className="form-control"
          placeholder="Numero de NIF"
          onChange={handleChange("nif")}
        />
        <label className="sr-only">Vacinação</label>
        <input
          type="text"
          className="form-control"
          placeholder="Qual Vacina tomaste?"
          onChange={handleChange("vacinacao")}
        />
        <label className="sr-only">Doses</label>
        <input
          type="number"
          className="form-control"
          placeholder="Quantas doses já tomaste?"
          onChange={handleChange("dose")}
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="Lembrar-me" /> Lembrar-me
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={clickSubmit}
        >
          Criar
        </button>
      </form>

      <p className="mt-5 mb-3 text-muted">©Gustavo's Production 2022</p>
    </div>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Sua conta foi criada por favor faça <Link to="/signin">Login</Link>
    </div>
  );

  return (
    <div>
      {showError()}
      {showSuccess()}
      {signupForm()}
      {/* {JSON.stringify(values)} */}
    </div>
  );
};

export default Signup;
