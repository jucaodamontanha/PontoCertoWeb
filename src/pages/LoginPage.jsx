import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('FUNCIONARIO');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMock = {
      name: 'Nome do Usuário',
      role: role,
    };
    onLogin(userMock);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="FUNCIONARIO">Funcionário</option>
          <option value="GESTOR">Gestor</option>
          <option value="ADMIN">Admin</option>
        </select>
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};

export default LoginPage;
