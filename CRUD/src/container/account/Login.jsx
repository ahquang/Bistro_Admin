import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountForm from "../../components/AccountForm";
import FormItem from "../../components/FormItem/index";
import MyButton from "../../components/MyButton/index";
import "../../styles/components/_account.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        localStorage.setItem('user', JSON.stringify({
          email: user.email
        }))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <AccountForm label={"Login"}>
      <FormItem
        label={"Email"}
        handleOnChange={(e) => setEmail(e.target.value)}
      />
      <FormItem
        label={"Password"}
        type="password"
        handleOnChange={(e) => setPassword(e.target.value)}
      />
      <MyButton onClick={onLogin}>Login</MyButton>
      <div>
        Haven't got an account yet ? <Link to={"/register"}>Register now</Link>
      </div>
    </AccountForm>
  );
};

export default Login;
