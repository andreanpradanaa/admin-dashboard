import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseLogin() {
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");

  return (
    <div>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}
