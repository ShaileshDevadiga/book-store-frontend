import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

interface BackButtonProps {
  destination?: string;
}

export function BackButton(props: BackButtonProps): ReactElement {
  const { destination = '/' } = props;

  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
}
