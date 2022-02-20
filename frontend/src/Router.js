import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Signup from "./User/Signup";
import App from "./App";
import Signin from "./User/Signin";
import Dashboard from "./core/Dashboard";

// const SigninM = () => useRoutes([
//     {path: "/", element=<Signin />},
//     {path: "/signin", element=<Signin />}
// ])



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/a" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <SigninM /> */}
    </BrowserRouter>
  );
};

export default Router;
