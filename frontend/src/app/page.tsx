"use client";

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazer a requisição POST para o servidor local (localhost:5000)
      const response = await axios.post('http://localhost:5000/auth/sign-in', {
        email,
        password,
      });

      // Extrair o token JWT do cabeçalho de resposta
      const token = response.headers.authorization;

      // Armazenar o token no localStorage
      localStorage.setItem('token', token);

      // Redirecionar o usuário para a página após o login bem-sucedido
      // Por exemplo, você pode usar react-router-dom para isso
      // history.push('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login')
      // Lógica de tratamento de erros
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Faça o login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;