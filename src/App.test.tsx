import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import App from './App';
import MainPage from './pages/Main';

test('renders main page heading', () => {
  const router = createMemoryRouter(
    [{ path: '/', element: <App />, children: [{ index: true, element: <MainPage /> }] }],
    { initialEntries: ['/'] },
  );
  render(<RouterProvider router={router} />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'A coin that keeps your Bitcoin.',
  );
});
