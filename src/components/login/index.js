import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';

function LoginPage () {

 const loginRef = React.useRef();
 const passRef = React.useRef();

 const navigation = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
   navigation('/');
  }
 }, []);

 const login = async () => {
  const loginValue = loginRef.current.value;
  const passValue = passRef.current.value;
  if (!loginValue || !passValue) {
   return;
  }
  console.log({ loginValue, passValue });
  const response = await axios.post(
   'https://dummyjson.com/auth/login',
   { username: loginValue, password: passValue }
  );

  localStorage.setItem('token', response.data.token);
  const userProfile = {
   firstName: response.data.firstName,
   lastName: response.data.lastName,
   image: response.data.image,
  };
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  navigation('/');
 };

 return (
  <div className="full-screen center bg-main">
   <div className="login-wrapper">
    <div>Login: <input ref={loginRef} type="text" /></div>
    <div>Password: <input ref={passRef} type="password" /></div>
    <div>
     <button onClick={login}>Login</button>
    </div>
   </div>
  </div>
 );
}

export default LoginPage;