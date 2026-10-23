import { createBrowserRouter } from 'react-router';
import App from './App';
import ErrorPage from './pages/Error';
import MainPage from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'instructions',
        lazy: async () => ({ Component: (await import('./pages/Instructions')).default }),
      },
    ],
  },
]);

export default router;
