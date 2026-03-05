import React from 'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import logo from "../../assets/logo.svg";

function ErrorPage() {
  const error = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <Link to="/" className="mb-12">
        <img src={logo} alt="ILLI Wallet" className="h-10 opacity-60" />
      </Link>

      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-gradient-gold mb-6">404</p>
        <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-gray mb-2">{errorMessage}</p>
        <p className="text-sm text-gray-dark mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn-outline-gold px-8 py-3 rounded-full text-xs"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="btn-gold px-8 py-3 rounded-full text-xs"
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
