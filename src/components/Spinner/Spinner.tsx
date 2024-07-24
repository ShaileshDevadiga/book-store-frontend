import { ReactElement } from 'react';

export function Spinner(): ReactElement {
  return (
    <div
      className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-600"
      data-testid="loader"
    />
  );
}
