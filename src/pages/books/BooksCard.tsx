import { ReactElement } from 'react';

import { BookSingleCard } from './BookSingleCard';
import { Book } from '../../types/book';

interface BooksCardProps {
  books: Book[];
}

export function BooksCard(props: BooksCardProps): ReactElement {
  const { books } = props;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
}
