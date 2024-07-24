import { Route, Routes } from 'react-router-dom';

import { Books } from './pages/books/Books';
import { CreateBook } from './pages/createBook/CreateBook';
import { ShowBook } from './pages/showBook/ShowBook';
import { EditBook } from './pages/editBook/EditBook';
import { DeleteBook } from './pages/deleteBook/DeleteBook';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
}
