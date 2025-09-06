import React from 'react';
import Button from '../components/Button.jsx';

const ManagerDashboardPage = ({ userName, users, onLogout }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Olá, {userName}! (Gestor)</h2>
      <div className="w-full bg-gray-100 p-4 rounded-lg mb-4 shadow-inner">
        <h3 className="text-lg font-bold mb-2 text-gray-700">Saldo de Horas da Equipe</h3>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="text-gray-700 bg-white p-2 rounded-lg shadow-sm flex justify-between items-center">
              <span className="font-medium">{user.name}</span>
              <span className="text-lg font-bold text-gray-800">{user.balance}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full gap-4">
        <Button onClick={() => console.log('Gerenciar escalas e feriados')}>Gerenciar Escalas</Button>
        <Button onClick={() => console.log('Corrigir pontos')}>Corrigir Pontos</Button>
        <Button onClick={onLogout}>Sair</Button>
      </div>
    </div>
  );
};

export default ManagerDashboardPage;
