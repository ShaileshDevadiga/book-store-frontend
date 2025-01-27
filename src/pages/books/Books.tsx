import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';

import { Spinner } from '../../components/Spinner';
import { BooksTable } from './BooksTable';
import { BooksCard } from './BooksCard';
import { getAllBooks } from '../../api/book';

export function Books(): ReactElement {
  const [showType, setShowType] = useState('table');

  const {
    isPending,
    isError,
    data: books,
    error,
  } = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks,
  });

  if (isError) {
    return <p>Network error. Please try again later {error.name}</p>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {isPending ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
}
