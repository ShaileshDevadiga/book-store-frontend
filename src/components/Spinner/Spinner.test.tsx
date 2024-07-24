import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders the spinner', () => {
    render(<Spinner />);

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
