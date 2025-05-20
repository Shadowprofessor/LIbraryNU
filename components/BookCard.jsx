// ---------------------- components/BookCard.jsx ----------------------
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
      <img src={book.coverURL} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{book.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">by {book.author}</p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{book.description.slice(0, 100)}...</p>
      <Link to={`/book/${book.id}`} className="block mt-3 text-indigo-500 hover:underline">View Details</Link>
    </div>
  );
};

export default BookCard;
