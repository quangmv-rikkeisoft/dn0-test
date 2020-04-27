import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';


const isAuthorization = () => {
  const token = localStorage.getItem("token") || "";
  return token.length>0;
}


const Login = (props) => {

  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    if (password!=="123") return e.target.reset();
    localStorage.setItem("token", "asdfddsdsfsd");
    history.push('/dashboard');
  }

  if (isAuthorization()) return <Redirect to="/dashboard"/>

  return (
    <div>
      <form onSubmit={submit}>
        <input data-test='login__pwd' type='password' onChange={(e) => setPassword(`${e.target.value}`)} />
        <button data-test='login__submit' type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login;