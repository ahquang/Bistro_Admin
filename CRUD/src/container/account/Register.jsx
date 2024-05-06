import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import AccountForm from "../../components/AccountForm";
import FormItem from "../../components/FormItem/index";
import MyButton from "../../components/MyButton/index";
import "../../styles/components/_account.scss";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <AccountForm label={"Register"}>
      <FormItem
        label={"Email"}
        handleOnChange={(e) => setEmail(e.target.value)}
      />
      <FormItem
        label={"Password"}
        type="password"
        handleOnChange={(e) => setPassword(e.target.value)}
      />
      <MyButton onClick={onSubmit}>Register</MyButton>
      <div>
        Have an account already ? <Link to={"/login"}>Login now</Link>
      </div>
    </AccountForm>
  );
};

export default Register;
