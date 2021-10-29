import React, { useState } from "react";
import LoginForm from "../imports/LoginForm";

import { useDispatch } from "react-redux";
import { loginAction } from "../../container/actions";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const userCredential = {
      username,
      password,
    };

    dispatch({ type: "REGISTER_SUCCESS", payload: "login dispatch" });
    // const userData = { username: "admin", password: "admin123" };
    const login = dispatch(loginAction(userCredential));
    login
      .then(() => history.push("/"))
      .catch((error) => {
        setError(error.err);
        console.log(error.err);
      });
    // console.log(store.getState());
    // console.log(userCredential);
  };

  return (
    <div>
      <LoginForm
        loginState={{
          errorMessage,
          handleSubmit,
          setUsername,
          setPassword,
          setError,
        }}
      />
    </div>
  );
}

export default Login;
