import { isRouteErrorResponse, Link, useRouteError } from 'react-router';
import logo from '../../assets/logo.png';

function ErrorPage() {
  const error = useRouteError();
  let detail: string;

  if (isRouteErrorResponse(error)) {
    detail = `${error.status} ${error.statusText}`.trim();
  } else if (error instanceof Error) {
    detail = error.message;
  } else if (typeof error === 'string') {
    detail = error;
  } else {
    detail = 'Unknown error';
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-base-100 px-6 text-center text-base-content font-sans">
      <Link to="/" aria-label="ILLI Wallet home" className="mb-12">
        <img src={logo} alt="" width={28} height={30} className="h-7 w-auto invert opacity-70" />
      </Link>
      <h1 className="display-lg max-w-xl">This page does not exist.</h1>
      <p className="lede mt-5 max-w-md text-base-content/70">
        The link may be out of date, or the address may have a typo.
      </p>
      <p className="mt-3 text-sm text-base-content/50">{detail}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary btn-lg px-7">
          Go to the overview
        </Link>
        <Link to="/instructions" className="btn btn-ghost btn-lg">
          How it works
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
