import { Outlet, ScrollRestoration } from 'react-router';
import { LazyMotion, domAnimation } from 'motion/react';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-base-100 text-base-content font-sans">
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </LazyMotion>
  );
}

export default App;
