import React from "react";
import { useState } from "react";
import { Form } from "./SignUp";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      heading="Log in to your account"
      question="Don't have an account?"
      action="Signup"
      link={"/signup"}
      buttonText="Login"
    />
  );
}

export default Login;
