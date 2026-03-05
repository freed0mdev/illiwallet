import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import MainPage from './pages/Main';

test('renders main page heading', () => {
  const router = createMemoryRouter(
    [{ path: '/', element: <MainPage /> }],
    { initialEntries: ['/'] }
  );
  render(<RouterProvider router={router} />);
  const heading = screen.getByText(/in the Future/i);
  expect(heading).toBeInTheDocument();
});
