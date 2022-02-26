import API from "../config";
export const update = (user, data) => {
  return fetch(`${API}/user/${user}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const UpdateUser = (user, next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("user")) {
      let auth = JSON.parse(localStorage.getItem("user"));
      auth.user = user;
      //console.log(auth);
      localStorage.setItem("user", JSON.stringify(auth));
      next();
    }
  }
};
