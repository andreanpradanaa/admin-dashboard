import React, { useState } from "react";
import RegistrationForm from "../imports/RegistrationForm";
// import BaseLogin from "../imports/BaseLogin";
import { registerAction } from "../../container/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault("");

    const newUser = {
      username,
      password,
      passwordCheck,
    };
    const user = {
      username: "admin",
      password: "admin123",
      passwordCheck: "admin123",
    };

    const validate = dispatch(registerAction(user));
    validate
      .then((data) => {
        console.log(data);
        history.push("/login");
      })
      .catch((error) => console.log(error));

    console.log(newUser);
  };

  let registerData = {
    handleSubmit,
    setUsername,
    setPassword,
    setPasswordCheck,
  };

  return (
    <div>
      {/* <BaseLogin /> */}
      <RegistrationForm registerState={registerData} />
    </div>
  );
}

export default Register;
