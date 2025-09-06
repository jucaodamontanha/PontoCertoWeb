import React, { useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import ManagerDashboardPage from './pages/ManagerDashboardPage.jsx';
import './index.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userName, setUserName] = useState('');
  const [points, setPoints] = useState([]);
  const [users, setUsers] = useState([]);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUserName(user.name);
    setUserRole(user.role);

    if (user.role === 'FUNCIONARIO') {
      const mockPoints = [
        { id: 1, type: 'Entrada', time: '08:00' },
        { id: 2, type: 'Saída', time: '12:00' },
        { id: 3, type: 'Entrada', time: '13:00' },
        { id: 4, type: 'Saída', time: '17:00' },
      ];
      setPoints(mockPoints);
    } else if (user.role === 'GESTOR' || user.role === 'ADMIN') {
      const mockUsers = [
        { id: 1, name: 'João Silva', balance: '+10h' },
        { id: 2, name: 'Maria Souza', balance: '-5h' },
        { id: 3, name: 'Pedro Alves', balance: '+2h' },
      ];
      setUsers(mockUsers);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
    setUserRole('');
    setPoints([]);
    setUsers([]);
  };

  const handleRegisterPoint = () => {
    const newPoint = {
      id: points.length + 1,
      type: 'Entrada',
      time: new Date().toLocaleTimeString('pt-BR').substring(0, 5),
    };
    setPoints(prevPoints => [...prevPoints, newPoint]);
    console.log("Ponto registrado com sucesso!");
  };

  const renderDashboard = () => {
    switch (userRole) {
      case 'FUNCIONARIO':
        return <DashboardPage userName={userName} points={points} onRegisterPoint={handleRegisterPoint} onLogout={handleLogout} />;
      case 'GESTOR':
        return <ManagerDashboardPage userName={userName} users={users} onLogout={handleLogout} />;
      case 'ADMIN':
        return <AdminDashboardPage userName={userName} users={users} onLogout={handleLogout} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          PontoCerto
        </h1>
        {isAuthenticated ? renderDashboard() : <LoginPage onLogin={handleLogin} />}
      </div>
    </div>
  );
};

export default App;
