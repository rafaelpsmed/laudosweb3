import React, { useState } from 'react';
import Axios from 'axios';

interface CadastroFormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

const CadastroForm: React.FC = () => {
  const [formData, setFormData] = useState<CadastroFormData>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Realize a validação dos campos e envie os dados para o servidor
    // Aqui você pode utilizar uma biblioteca de requisição HTTP, como o Axios

    // console.log(formData.nome);

    Axios.post('http://localhost:8000/cadastrar',{
        usuarioNome:formData.nome,
        usuarioEmail:formData.email,
        usuarioSenha:formData.senha
    })

    // Exemplo de envio para o servidor
    // fetch('/registro', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Lógica para lidar com a resposta do servidor
    //   })
    //   .catch((error) => {
    //     // Lógica para lidar com erros na requisição
    //   });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmarSenha">Confirmação de Senha:</label>
        <input
          type="password"
          id="confirmarSenha"
          name="confirmarSenha"
          value={formData.confirmarSenha}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
      {/* <button type="submit">Voltar</button> */}
    </form>
  );
};

export default CadastroForm;
