// ---------------------- pages/RegisterPage.jsx ----------------------
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', enrollment: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) navigate('/login');
    else alert('Registration failed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {['name', 'enrollment', 'email', 'password'].map(field => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="block w-full p-2 mb-3"
            onChange={e => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <button onClick={handleRegister} className="w-full bg-green-500 text-white p-2 rounded">Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
