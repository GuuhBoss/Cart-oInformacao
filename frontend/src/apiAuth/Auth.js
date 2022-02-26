import API from "../config";

export const signup = (user) => {
  // console.log(name, email, password);
  // console.log(user);
  console.log(JSON.stringify(user));
  return fetch(`dihstuff.herokuapp.com/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  // console.log(JSON.stringify(user));
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    // console.log(JSON.stringify(data));
    localStorage.setItem("user", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      console.log("Não logou na conta");
    }
  }
};
