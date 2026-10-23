import { Link } from 'react-router';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-200">
      <div className="wrap footer sm:footer-horizontal items-center py-8 text-xs text-base-content/60">
        <Link to="/" aria-label="ILLI Wallet home" className="flex items-center gap-2">
          <img src={logo} alt="" width={16} height={17} className="h-4 w-auto invert" />
          <span className="font-medium text-base-content/80">ILLI Wallet</span>
        </Link>
        <nav className="flex gap-6 sm:place-self-center">
          <Link to="/" className="hover:text-base-content">Overview</Link>
          <Link to="/instructions" className="hover:text-base-content">How it works</Link>
          <Link to="/#contact" className="hover:text-base-content">Contact</Link>
        </nav>
        <p className="sm:place-self-end">
          Copyright &copy; {new Date().getFullYear()} ILLI Wallet. Handmade, sold on Etsy.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
