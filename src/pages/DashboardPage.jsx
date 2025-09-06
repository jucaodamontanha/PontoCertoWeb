import React from 'react';
import Button from '../components/Button.jsx';

const DashboardPage = ({ userName, points, onRegisterPoint, onLogout }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Bem-vindo(a), {userName}!</h2>
      <div className="w-full bg-gray-100 p-4 rounded-lg mb-4 shadow-inner">
        <h3 className="text-lg font-bold mb-2 text-gray-700">Seu Histórico de Ponto</h3>
        <ul className="space-y-2">
          {points.map((point) => (
            <li key={point.id} className="text-gray-700 bg-white p-2 rounded-lg shadow-sm">
              <span className="font-medium">{point.type}:</span> {point.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full gap-4">
        <Button onClick={onRegisterPoint}>Registrar Ponto</Button>
        <Button onClick={onLogout}>Sair</Button>
      </div>
    </div>
  );
};

export default DashboardPage;
