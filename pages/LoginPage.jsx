// ---------------------- pages/LoginPage.jsx ----------------------
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/dashboard');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login to NU Library</h2>
        <input type="email" placeholder="Email" className="block w-full p-2 mb-3" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="block w-full p-2 mb-3" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-indigo-500 text-white p-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
