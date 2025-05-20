// ---------------------- pages/WelcomePage.jsx ----------------------
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const user = localStorage.getItem('user');
      navigate(user ? '/dashboard' : '/login');
    }, 3000);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">Welcome to NU Library</h1>
    </motion.div>
  );
};

export default WelcomePage;

