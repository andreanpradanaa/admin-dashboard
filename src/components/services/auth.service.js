import axios from "axios";

const baseURL = "http://localhost:4000/api";

// register req
const register = (newUser) => {
  // POST req
  return axios
    .post(`${baseURL}/register`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// login req
const login = (userCredential) => {
  return axios
    .post(`${baseURL}/login`, userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("x-access-token", response.data.token);
      }
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

// logout service
const logout = () => {
  localStorage.removeItem("x-access-token");
  return { msg: "Logout succes..!" };
};

export { register, login, logout };
