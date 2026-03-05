import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import coinImage from "../../assets/coin.png";
import coinDisassembled from "../../assets/coin_disassembled.png";

const STORE_URL = 'https://antigift.etsy.com/listing/1630826805';

function MainPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ─── Hero ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid absolute inset-0" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="animate-fade-in">
            <img src={logo} alt="ILLI Wallet" className="mx-auto h-16 mb-12" />
          </div>
          <h1 className="animate-fade-up text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Your Investment<br />
            <span className="text-gradient-gold">in the Future</span>
          </h1>
          <p className="animate-fade-up-delay mt-6 text-lg sm:text-xl text-gray max-w-lg mx-auto opacity-0">
            Handcrafted cold storage crypto wallet. A collectible coin that safeguards your digital assets offline.
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full text-sm "
            >
              Shop on Etsy
            </a>
            <a
              href="#features"
              className="btn-outline-gold px-10 py-4 rounded-full text-sm "
            >
              Discover
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray opacity-50">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ─── Product Showcase ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="ambient-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="absolute w-72 h-72 bg-orange rounded-full opacity-[0.04] blur-5xl animate-glow" />
              <img
                src={coinImage}
                alt="ILLI Wallet Coin"
                className="relative w-80 md:w-96 animate-float drop-shadow-2xl"
              />
            </div>
            <div className="max-w-lg">
              <p className="text-orange text-xs tracking-ultra uppercase font-semibold mb-4">Limited Edition</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The Simplicity of Design Has a
                <span className="text-gradient-gold"> Deep Meaning</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray">
                Each ILLI Wallet coin is a handcrafted piece of art &mdash; a physical cold storage wallet
                designed to protect your cryptocurrency offline, forever safe from hackers and hardware failures.
              </p>
              <div className="mt-10 flex gap-4">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-8 py-3 rounded-full text-xs "
                >
                  Buy Now &rarr;
                </a>
                <Link
                  to="/instructions"
                  className="btn-outline-gold px-8 py-3 rounded-full text-xs "
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-xl" />

      {/* ─── Why Cold Storage ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="max-w-lg order-2 md:order-1">
              <p className="text-orange text-xs tracking-ultra uppercase font-semibold mb-4">Cold Storage</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Super Safe
                <span className="text-gradient-gold"> Crypto Wallet</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray">
                A cold wallet cannot fail like a hardware wallet &mdash; it is not subject to physical impact and
                not connected to the internet. All the data necessary to access the cryptocurrency is printed
                on the coin as a QR code, making it invulnerable to hackers and damage.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span className="text-gray">No batteries, no firmware updates, no screens that can break</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span className="text-gray">100% offline &mdash; impossible to hack remotely</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span className="text-gray">Durable construction built to last decades</span>
                </li>
              </ul>
            </div>
            <div className="relative flex justify-center order-1 md:order-2">
              <div className="absolute w-72 h-72 bg-orange rounded-full opacity-[0.04] blur-5xl animate-glow" />
              <img
                src={coinDisassembled}
                alt="ILLI Wallet coin disassembled"
                className="relative w-80 md:w-96 drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-xl" />

      {/* ─── Features Grid ─── */}
      <section id="features" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-orange text-xs tracking-ultra uppercase font-semibold mb-4">Why Choose ILLI</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              The Magic Of
              <span className="text-gradient-gold"> Unique Design</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<HeartIcon />}
              title="Perfect Gift"
              description="A unique, thoughtful present for crypto enthusiasts and collectors alike."
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Maximum Security"
              description="Cold storage is the safest way to store cryptocurrency, fully offline."
            />
            <FeatureCard
              icon={<LockIcon />}
              title="First Edition"
              description="Limited first edition run. Each coin is individually crafted and numbered."
            />
            <FeatureCard
              icon={<WalletIcon />}
              title="True Investment"
              description="A physical asset that holds and protects your digital wealth over time."
            />
            <FeatureCard
              icon={<KeyIcon />}
              title="Hidden Secret"
              description="More than just a coin. A construction with a secret inside, revealing your keys."
            />
            <FeatureCard
              icon={<ExchangeIcon />}
              title="Universal Use"
              description="Compatible with all major cryptocurrencies. Multiply your holdings."
            />
          </div>
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-xl" />

      {/* ─── CTA Section ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="ambient-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-orange text-xs tracking-ultra uppercase font-semibold mb-4">Handcrafted on Etsy</p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Own a Piece of the
            <span className="text-gradient-gold"> Future</span>
          </h2>
          <p className="mt-6 text-lg text-gray max-w-xl mx-auto">
            Every ILLI Wallet is handmade with care. Secure your crypto in style &mdash;
            order yours today from our Etsy shop.
          </p>
          <div className="mt-10">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-12 py-4 rounded-full text-sm "
            >
              Visit Our Etsy Shop &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-surface-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="ILLI Wallet" className="h-8 opacity-60" />
            <nav className="flex gap-8 text-sm text-gray-dark">
              <Link to="/instructions" className="hover:text-orange transition-colors">
                Instructions
              </Link>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
                Etsy Shop
              </a>
            </nav>
            <p className="text-sm text-gray-dark">
              &copy; ILLI Wallet {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card rounded-2xl p-8 text-center">
      <div className="w-14 h-14 mx-auto mb-5 rounded-xl step-number flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Icons ─── */

function HeartIcon() {
  return (
    <svg width="24" height="22" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.0807 2.9593C28.1723 1.05091 25.619 0 22.8903 0C20.5411 0 18.3221 0.77911 16.5324 2.21345C14.717 0.77911 12.4953 0 10.169 0C7.42771 0 4.86763 1.05136 2.9593 2.9593C1.05091 4.86731 0 7.42107 0 10.1493C0 12.8779 1.05091 15.4313 2.9593 17.3392L15.6608 30.0407C15.8922 30.2726 16.1961 30.3885 16.5 30.3885C16.8031 30.3885 17.1062 30.2729 17.3381 30.0422L30.0498 17.3693C31.9526 15.4238 33 12.8668 33 10.1691C33 7.4464 31.9665 4.88948 30.0807 2.9593ZM28.363 15.6983L16.5012 27.5237L4.63779 15.6608C3.17812 14.2007 2.37407 12.2433 2.37407 10.1493C2.37407 8.05535 3.17812 6.09791 4.63779 4.63785C6.09785 3.17818 8.06205 2.37413 10.169 2.37413C12.2424 2.37413 14.2106 3.18173 15.7098 4.64733C16.1743 5.10198 16.9194 5.09798 17.3788 4.63785C18.8389 3.17818 20.7959 2.37413 22.8903 2.37413C24.9846 2.37413 26.9417 3.17818 28.3919 4.62831C29.8325 6.10223 30.6259 8.06998 30.6259 10.1691C30.6259 12.2429 29.8187 14.2106 28.363 15.6983Z" fill="currentColor"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="28" viewBox="0 0 29 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.687 7.10213L14.6575 0.159154C14.2545 -0.055883 13.7716 -0.0527175 13.3713 0.166852L0.702449 7.10983C0.26921 7.34745 0 7.80184 0 8.29602V18.1245C0 25.8466 4.5829 32.8451 11.6774 35.9555L13.4357 36.722C13.6079 36.7973 13.7923 36.8347 13.9762 36.8347C14.1588 36.8347 14.3414 36.7977 14.5123 36.7238L16.4919 35.8689C23.728 32.8068 28.4033 25.7713 28.4033 17.9437V8.29559C28.4034 7.79602 28.1279 7.33709 27.687 7.10213ZM25.6983 17.9437C25.6983 24.6843 21.6695 30.7428 15.4334 33.3794C15.4303 33.3807 15.4271 33.3821 15.4239 33.3834L13.979 34.0073L12.7612 33.4763C6.65226 30.7983 2.70505 24.7722 2.70505 18.124V9.09674L14.0308 2.89039L25.6982 9.1076V17.9437H25.6983Z" fill="currentColor"/>
      <path d="M20.8085 14.4991C20.3374 13.9197 19.4848 13.8318 18.9055 14.3034L11.9498 19.962L9.38083 16.9539C8.89616 16.3859 8.04184 16.3187 7.47421 16.8038C6.90615 17.2885 6.83895 18.1423 7.32406 18.7104L10.7505 22.7225C11.0178 23.0358 11.3975 23.1968 11.7798 23.1968C12.0801 23.1968 12.3821 23.0976 12.6323 22.8934L20.6127 16.4016C21.1927 15.9305 21.2801 15.0785 20.8085 14.4991Z" fill="currentColor"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="22" height="28" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 0C13.0924 0 11.1338 1.9587 11.1338 4.36619C11.1338 6.77368 13.0925 8.73238 15.5 8.73238C17.9075 8.73238 19.8662 6.77368 19.8662 4.36619C19.8662 1.9587 17.9075 0 15.5 0ZM15.5 6.1127C14.5206 6.1127 13.7535 5.34554 13.7535 4.36619C13.7535 3.40303 14.5367 2.61968 15.5 2.61968C16.4632 2.61968 17.2465 3.40296 17.2465 4.36619C17.2465 5.34554 16.4793 6.1127 15.5 6.1127Z" fill="currentColor"/>
      <path d="M15.4995 6.2467C9.02312 6.2467 3.75439 11.5744 3.75439 18.1228V25.7636H6.37415V18.1228C6.37415 13.0187 10.4679 8.86639 15.4995 8.86639C20.5311 8.86639 24.6249 13.0187 24.6249 18.1228V25.589H27.2445V18.1228C27.2446 11.5743 21.9759 6.2467 15.4995 6.2467Z" fill="currentColor"/>
      <path d="M29.6902 24.4491H1.30984C0.586383 24.4491 0 25.0355 0 25.7589V31.7843C0 32.5078 0.586383 33.0942 1.30984 33.0942H29.6902C30.4136 33.0942 31 32.5078 31 31.7843V25.7589C31 25.0355 30.4136 24.4491 29.6902 24.4491ZM28.3803 30.4744H2.61968V27.0688H28.3803V30.4744V30.4744Z" fill="currentColor"/>
      <path d="M18.9485 31.7866C18.9485 33.7204 17.4334 35.2359 15.4992 35.2359C13.5649 35.2359 12.0499 33.7208 12.0499 31.7866H9.43018C9.43018 35.1333 12.1525 37.8556 15.4992 37.8556C18.8459 37.8556 21.5682 35.1333 21.5682 31.7866H18.9485Z" fill="currentColor"/>
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="24" height="22" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.6574 18.8503V24.6068H3.35519C2.58053 24.6068 1.97363 23.9999 1.97363 23.2253V4.17957H0V23.2253C0 25.0752 1.50524 26.5804 3.35519 26.5804H26.6442C27.1892 26.5804 27.631 26.1387 27.631 25.5936V18.8503H25.6574Z" fill="currentColor"/>
      <path d="M29.0124 12.4703H21.5454C21.0004 12.4703 20.5586 12.9121 20.5586 13.4572V18.8518C20.5586 19.3968 21.0004 19.8386 21.5454 19.8386H29.0124C29.5574 19.8386 29.9992 19.3968 29.9992 18.8518V13.4572C29.9992 12.9121 29.5574 12.4703 29.0124 12.4703ZM28.0256 17.865H22.5323V14.444H28.0256V17.865Z" fill="currentColor"/>
      <path d="M26.6113 5.92095H24.2429V0.986816C24.2429 0.441788 23.8011 0 23.2561 0H3.94726C1.77067 0 0 1.77067 0 3.94726C0 6.12386 1.77067 7.89453 3.94726 7.89453H25.6245V13.4865H27.5981V6.90777C27.5982 6.36268 27.1564 5.92095 26.6113 5.92095ZM22.2693 5.92095H3.94726C2.84068 5.92095 1.97363 5.05384 1.97363 3.94732C1.97363 2.8408 2.84074 1.97369 3.94726 1.97369H22.2693V5.92095Z" fill="currentColor"/>
      <path d="M23.2569 2.995H3.98096C3.43593 2.995 2.99414 3.43678 2.99414 3.98181C2.99414 4.52684 3.43593 4.96863 3.98096 4.96863H23.2569C23.8019 4.96863 24.2437 4.52684 24.2437 3.98181C24.2437 3.43678 23.8019 2.995 23.2569 2.995Z" fill="currentColor"/>
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="20" height="28" viewBox="0 0 26 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.3203 12.8309H23.9228C25.0681 12.8309 26 13.7627 26 14.9081V31.9409C25.9999 33.0862 25.0681 34.018 23.9228 34.018H2.3203C1.17499 34.018 0.243119 33.0862 0.243119 31.9408V14.9081C0.243186 13.7627 1.17499 12.8309 2.3203 12.8309ZM2.73577 31.5254H23.5074V15.3235H2.73577V31.5254Z" fill="currentColor"/>
      <path d="M13.2038 0C16.801 0 20.1735 2.09666 21.7961 5.34162C22.1044 5.9573 21.8547 6.7059 21.239 7.01371C20.623 7.32198 19.8748 7.07185 19.567 6.45663C18.363 4.04878 15.8651 2.49258 13.215 2.49258C9.26882 2.52787 6.05835 5.78905 6.05835 9.76266V13.917C6.05835 14.6054 5.50041 15.1633 4.81202 15.1633C4.12363 15.1633 3.5657 14.6054 3.5657 13.917V9.76266C3.56576 4.42683 7.88414 0.0473809 13.2038 0Z" fill="currentColor"/>
      <path d="M13.1214 21.9811C13.8097 21.9811 14.3677 22.539 14.3677 23.2274V26.1354C14.3677 26.8238 13.8097 27.3818 13.1214 27.3818C12.433 27.3818 11.875 26.8242 11.875 26.1354V23.2273C11.875 22.539 12.433 21.9811 13.1214 21.9811Z" fill="currentColor"/>
    </svg>
  );
}

function ExchangeIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6181 5.39507L21.6123 0.349821C21.1519 -0.114088 20.4034 -0.116873 19.9399 0.343136C19.4763 0.803146 19.4732 1.55165 19.9332 2.01519L24.1094 6.22447L19.9363 10.3975C19.4743 10.859 19.4743 11.608 19.9363 12.0695C20.1673 12.3005 20.4696 12.416 20.7724 12.416C21.0751 12.416 21.3778 12.3005 21.6088 12.07L26.6146 7.06409C27.0753 6.60359 27.0766 5.85743 26.6181 5.39507Z" fill="currentColor"/>
      <path d="M25.8176 5.04456H1.18246C0.529333 5.04456 0 5.57389 0 6.22701V15.3716C0 16.0247 0.529333 16.554 1.18246 16.554C1.83558 16.554 2.36491 16.0247 2.36491 15.3716V7.40953H25.8175C26.4707 7.40953 27 6.8802 27 6.22707C27.0001 5.57395 26.4707 5.04456 25.8176 5.04456Z" fill="currentColor"/>
      <path d="M2.85191 25.4631L7.02492 21.2905C7.48648 20.829 7.48691 20.0805 7.02492 19.6185C6.56299 19.1565 5.81405 19.1565 5.3525 19.6185L0.346611 24.6239C-0.114141 25.0843 -0.11575 25.8305 0.343083 26.2928L5.34897 31.3381C5.58033 31.571 5.88461 31.6877 6.18852 31.6877C6.48965 31.6877 6.79083 31.5734 7.02139 31.3448C7.48493 30.8848 7.48809 30.1363 7.02808 29.6724L2.85191 25.4631Z" fill="currentColor"/>
      <path d="M25.7782 14.7368C25.1251 14.7368 24.5957 15.2661 24.5957 15.9193V24.2755H1.18246C0.529333 24.2755 0 24.8048 0 25.458C0 26.1111 0.529333 26.6404 1.18246 26.6404H25.7786C26.4317 26.6404 26.9611 26.1111 26.9607 25.458V15.9193C26.9606 15.2662 26.4313 14.7368 25.7782 14.7368Z" fill="currentColor"/>
    </svg>
  );
}

export default MainPage;
