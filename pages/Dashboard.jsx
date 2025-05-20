// ---------------------- pages/Dashboard.jsx ----------------------
import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import ThemeToggle from '../components/ThemeToggle';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState(user?.theme_preference || 'light');

  useEffect(() => {
    fetch('/api/books').then(res => res.json()).then(setBooks);
  }, []);

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome {user.name} to NU Library</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <input
        type="text"
        placeholder="Search books..."
        className="w-full p-3 rounded mb-6"
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Dashboard;
