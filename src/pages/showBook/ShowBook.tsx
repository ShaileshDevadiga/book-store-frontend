import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BackButton } from '../../components/BackButton';
import { Spinner } from '../../components/Spinner';
import { getSingleBook } from '../../api/book';

export function ShowBook(): ReactElement {
  const { id } = useParams();

  const {
    isPending,
    isError,
    data: book,
    error,
  } = useQuery({
    queryKey: ['books', parseInt(id!)],
    queryFn: () => getSingleBook(id!),
  });

  if (isError) {
    return <p>Network error. Please try again later {error.name}</p>;
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book?._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book?.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book?.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book?.publishYear}</span>
          </div>
          {!!book?.createdAt && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book?.createdAt).toString()}</span>
            </div>
          )}

          {!!book?.updatedAt && (
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time
              </span>
              <span>{new Date(book?.updatedAt).toString()}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
