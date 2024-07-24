import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';

import { BackButton } from '../../components/BackButton';
import { Spinner } from '../../components/Spinner';
import { createBook } from '../../api/book';

export function CreateBook(): ReactElement {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { isPending, mutate } = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/');
    },
    onError: () => {
      enqueueSnackbar('Error', { variant: 'error' });
    },
  });

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    mutate(data);
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {isPending ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}
