import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import CadastroForm from "./Cadastro";
import "./App.css";

function App(): JSX.Element {
  const [message, setMessage] = useState<string>("");
  
  

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  }, []);

  console.log(message);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Lógica de autenticação aqui
      console.log('Login:', email, password);
    };
  
    const handleSignUp = () => {
      // Lógica para redirecionar para a página de cadastro
      console.log('Redirecionando para a página de cadastro');
      setMostrarFormulario(true);
    };
  
    const handleForgotPassword = () => {
      // Lógica para redirecionar para a página de recuperação de senha
      console.log('Redirecionando para a página de recuperação de senha');

      
    };

  return (
    <div className="App">
      <h1>{message}</h1>

      {mostrarFormulario ? (
        <CadastroForm />
      ) : (

      <form onSubmit={handleLogin}  method="POST">
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
      <br />
      <button type="submit">Entrar</button>
      <br />
      <button type="button" onClick={handleSignUp}>Cadastrar</button>
      <br />
      <button type="button" onClick={handleForgotPassword}>Esqueci a Senha</button>
    </form>
      )}
  </div>
      
      
  );
}

export default App;

