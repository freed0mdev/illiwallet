import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import InstructionsPage from './pages/Instructions';
import MainPage from "./pages/Main";
import App from "./App";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'instructions',
        element: <InstructionsPage />,
      },
    ],
  },
]);

export default router;
