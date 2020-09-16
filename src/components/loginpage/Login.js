import React, { useState } from "react";
import axios from "axios";
import BasePage from "../BasePage";
import LoginForm from "./LoginForm";

const LoginPage = ({ loginValue }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      console.log(data.token);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <BasePage
        component={
          <LoginForm
            emailChange={onEmailChange}
            passwordChange={onPasswordChange}
            onSubmit={onSubmit}
            error={setError}
          />
        }
        colour="#FEA000"
      />
    </div>
  );
};

export default LoginPage;
