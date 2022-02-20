// import "../css/style.css";
import { signin } from "../apiAuth/Auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { authenticate } from "../apiAuth/Auth";

const Signin = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    idade: "",
    doenca: "",
    alergia: "",
    sangue: "",
    covid: false,
    nif: null,
    vacinacao: "",
    error: "",
    success: false,
    role: "",
  });

  const { email, password, error, success, role } = value;

  const handleChange = (data) => (event) => {
    setValue({ ...value, error: false, [data]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    signin({ email, password }).then((data) => {
      console.log(data);
      if (data.firstRrror || data.error) {
        setValue({
          ...value,
          error: data.firstError || data.error,
        });
      } else {
        authenticate(data, () =>
          setValue({
            ...value,
            email: "",
            password: "",
            error: "",
            role: data.user.role,
            success: true,
          })
        );
      }
    });
  };

  const signinForm = () => (
    <div className="text-center ">
      <form className="form-signup">
        <h1 className="h3 mb-3 font-weight-normal">Entre na sua conta</h1>

        <label className="hidden">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange("email")}
          autoFocus
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

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="Lembrar-me" /> Lembrar-me
          </label>
        </div>

        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={clickSubmit}
        >
          Entrar
        </button>
      </form>

      <div className="text-center">
        <p className="text-muted ">
          <Link to="">Esqueceu a password? Clique Aqui</Link>
        </p>
        <p>
          <Link to="/signup">Ainda não criou uma conta? Crie agora!</Link>
        </p>
      </div>

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

  const redirectUser = () => {
    if (success) {
      if (role === 1) {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/user/dashboard" />;
      }
    }
  };

  return (
    <div>
      {showError()}
      {signinForm()}
      {redirectUser()}
    </div>
  );
};

export default Signin;
