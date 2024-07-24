import axios from 'axios';

import { Book } from '../types/book';

export async function getAllBooks(): Promise<Book[]> {
  const response = await axios.get('http://localhost:3100/api/v1/books');
  return response.data.data;
}

export async function getSingleBook(bookId: string): Promise<Book> {
  const response = await axios.get(
    `http://localhost:3100/api/v1/books/${bookId}`
  );
  return response.data;
}

export async function createBook(
  data: Pick<Book, 'title' | 'author' | 'publishYear'>
): Promise<void> {
  await axios.post('http://localhost:3100/api/v1/books', data);
}

export async function deleteBook(bookId: string): Promise<void> {
  await axios.delete(`http://localhost:3100/api/v1/books/${bookId}`);
}
