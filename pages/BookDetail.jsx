// ---------------------- pages/BookDetail.jsx ----------------------
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLiveBookCount } from '../utils/api';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [liveCount, setLiveCount] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`).then(res => res.json()).then(data => {
      setBook(data);
      getLiveBookCount(data.thingSpeakChannel, data.fieldID).then(setLiveCount);
    });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <img src={book.coverURL} alt={book.title} className="w-full h-80 object-cover rounded" />
      <h1 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">{book.title}</h1>
      <p className="text-gray-600 dark:text-gray-300">by {book.author}</p>
      <p className="mt-4 text-gray-700 dark:text-gray-200">{book.description}</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Contents:</h2>
        <p className="text-gray-600 dark:text-gray-300">{book.contents}</p>
      </div>
      <div className="mt-6 text-green-500 font-bold text-lg">Available Copies (Live): {liveCount}</div>
    </div>
  );
};

export default BookDetail;
