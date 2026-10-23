import { Link } from 'react-router';
import logo from '../assets/logo.png';

const LINKS = [
  { label: 'Inside', to: '/#inside' },
  { label: 'Design', to: '/#design' },
  { label: 'How it works', to: '/instructions' },
  { label: 'Check balance', to: '/#balance' },
  { label: 'Contact', to: '/#contact' },
];

function Nav() {
  return (
    <header
      data-theme="illi-dark"
      className="fixed inset-x-0 top-0 z-50 bg-[rgb(22_22_23/0.8)] text-base-content backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="navbar wrap min-h-12 py-0">
        <div className="navbar-start">
          <Link to="/" aria-label="ILLI Wallet home" className="flex items-center">
            <img src={logo} alt="" width={20} height={21} className="h-5 w-auto" />
          </Link>
        </div>
        <nav className="navbar-center hidden gap-8 text-xs font-normal tracking-[-0.01em] md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="navbar-end gap-3">
          <span className="badge badge-sm badge-outline border-base-content/30 text-[11px] text-base-content/80">
            Sold out
          </span>
          <Link to="/instructions" className="text-xs opacity-80 hover:opacity-100 md:hidden">
            Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
