import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import coinImage from '../../assets/coin.webp';
import coinDisassembled from '../../assets/coin_disassembled.webp';
import BalanceChecker from '../../components/BalanceChecker';
import Reveal from '../../components/Reveal';
import Chevron from '../../components/Chevron';

const EASE = [0.22, 1, 0.36, 1] as const;

function MainPage() {
  return (
    <>
      <Hero />
      <Inside />
      <Design />
      <Steps />
      <Balance />
      <Contact />
    </>
  );
}

/* ─── Hero: headline first, then the coin rises into place. One orchestrated moment. ─── */

function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  return (
    <section className="overflow-hidden bg-base-100 pt-32 pb-24 md:pt-40 md:pb-28">
      <div className="wrap text-center">
        <m.h1 className="display-xl mx-auto max-w-3xl" {...rise(0)}>
          A coin that keeps your Bitcoin.
        </m.h1>
        <m.p className="lede mx-auto mt-6 max-w-xl text-base-content/70" {...rise(0.1)}>
          ILLI Wallet is a handcrafted cold storage wallet. Your keys live on the metal, not on a
          device, so there is nothing to charge, update, or hack.
        </m.p>
        <m.div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          {...rise(0.2)}
        >
          <Link to="/#contact" className="btn btn-primary btn-lg px-7">
            Get notified for the next edition
          </Link>
          <Link to="/instructions" className="link link-secondary link-hover text-lg">
            How it works
            <Chevron />
          </Link>
        </m.div>
      </div>

      <m.div
        className="wrap mt-14 flex justify-center md:mt-20"
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 60, scale: 0.94 },
              animate: { opacity: 1, y: 0, scale: 1 },
              transition: { duration: 1.3, ease: EASE, delay: 0.25 },
            })}
      >
        <img
          src={coinImage}
          alt="ILLI Wallet coin, gold plated, with a Bitcoin mark and the year 2023"
          width={800}
          height={800}
          fetchPriority="high"
          decoding="async"
          className="product-shadow w-[min(82vw,620px)]"
        />
      </m.div>
    </section>
  );
}

/* ─── Inside: the one dark band. Shows the actual mechanism of the product. ─── */

const PARTS = [
  {
    title: 'Outer ring',
    body: 'Carries the public address. Scan it with any wallet app to send Bitcoin to the coin.',
  },
  {
    title: 'Inner disc',
    body: 'Sits sealed beneath the ring and holds the private key. Lift it only when you are ready to spend.',
  },
  {
    title: 'Two QR codes',
    body: 'Both keys are engraved as QR codes, so a phone camera is the only tool you will ever need.',
  },
];

function Inside() {
  return (
    <section
      id="inside"
      data-theme="illi-dark"
      className="mt-24 scroll-mt-12 bg-base-100 py-28 text-base-content md:mt-32 md:py-36"
    >
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg">Two parts. One secret.</h2>
          <p className="lede mt-5 text-base-content/70">
            The coin comes apart. The ring you see is the address you share. The disc underneath
            is the key you keep.
          </p>
        </Reveal>

        <Reveal className="mt-14 flex justify-center md:mt-20" delay={0.1}>
          <img
            src={coinDisassembled}
            alt="ILLI Wallet coin taken apart: outer ring with engraved numbers and inner disc with two QR codes"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className="product-shadow-dark w-[min(88vw,760px)]"
          />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3 md:mt-24">
          {PARTS.map((part) => (
            <div key={part.title} className="border-t border-base-300 pt-5">
              <h3 className="text-lg font-semibold tracking-[-0.015em]">{part.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-base-content/65">{part.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Design: a bento of five tiles, two large, three small. ─── */

function Design() {
  return (
    <section id="design" className="scroll-mt-12 bg-base-200 py-28 md:py-36">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg">Nothing to charge. Nothing to update.</h2>
          <p className="lede mt-5 text-base-content/70">
            A hardware wallet is a small computer. ILLI Wallet is a piece of metal, and that is
            the whole point.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-6">
          <Tile className="md:col-span-3" title="Offline, by design.">
            The coin never connects to anything. There is no radio, no port, and no screen, so a
            remote attacker has nothing to reach.
          </Tile>
          <Tile className="md:col-span-3" title="Built to outlast the hardware.">
            No battery to die, no firmware to patch. Solid brass with gold plating, made to sit in
            a safe for decades and still work the day you need it.
          </Tile>
          <Tile className="md:col-span-2" title="Works with any wallet app.">
            Sweep the key into the Bitcoin wallet you already use. No companion app required.
          </Tile>
          <Tile className="md:col-span-2" title="A gift you can hold.">
            Give someone their first Bitcoin as an object, not a password.
          </Tile>
          <Tile className="md:col-span-2" title="First edition, numbered." figure="2023">
            A limited first run. Every coin is engraved with its edition year and number.
          </Tile>
        </div>
      </div>
    </section>
  );
}

function Tile({
  title,
  children,
  className = '',
  figure,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  figure?: string;
}) {
  return (
    <div className={`card rounded-box bg-base-100 ${className}`}>
      <div className="card-body p-8 md:p-10">
        {figure && (
          <p className="mb-2 text-5xl font-semibold tracking-[-0.04em] text-secondary md:text-6xl">
            {figure}
          </p>
        )}
        <h3 className="display-md">{title}</h3>
        <p className="mt-2 max-w-md text-[17px] leading-relaxed text-base-content/65">{children}</p>
      </div>
    </div>
  );
}

/* ─── Steps: a sequence, so it earns its numbers. Teaser for the full guide. ─── */

const STEPS = [
  { title: 'Unbox', body: 'The coin arrives with its private key sealed under the inner disc.' },
  { title: 'Fund', body: 'Scan the public QR code and send Bitcoin from any wallet or exchange.' },
  { title: 'Keep', body: 'Store it somewhere dry and safe. It needs nothing from you.' },
  { title: 'Spend', body: 'Open the disc, scan the private key, and sweep the balance.' },
];

function Steps() {
  return (
    <section className="bg-base-100 py-28 md:py-36">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg">From box to vault in four steps.</h2>
        </Reveal>

        <ol className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-t border-base-300 pt-5">
              <p className="text-sm text-base-content/50">{i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold tracking-[-0.015em]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-base-content/65">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center">
          <Link to="/instructions" className="link link-secondary link-hover text-lg">
            Read the full guide
            <Chevron />
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ─── Balance: the one thing an owner comes back for. Same checker as the guide. ─── */

function Balance() {
  return (
    <section id="balance" className="scroll-mt-12 bg-base-200 py-28 md:py-36">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg">Check a balance.</h2>
          <p className="lede mt-5 text-base-content/70">
            Scan the public QR code on the ring, paste the address here, and see what the coin
            holds. The private key is never needed.
          </p>
        </Reveal>
        <BalanceChecker />
      </div>
    </section>
  );
}

/* ─── Contact ─── */

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      // EmailJS is only needed once someone actually submits, so keep it out of the initial bundle.
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-12 bg-base-100 py-28 md:py-36">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg">Questions? Write to us.</h2>
          <p className="lede mt-5 text-base-content/70">
            The first edition is sold out. Leave your email and we will tell you when the next
            run is ready.
          </p>
        </Reveal>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="card card-border mx-auto mt-12 max-w-xl rounded-box border-base-300 bg-base-100"
        >
          <div className="card-body gap-5 p-8 md:p-10">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium">Name</legend>
              <input
                id="from_name"
                name="from_name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="input input-lg w-full bg-base-200"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium">Email</legend>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="input input-lg w-full bg-base-200"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium">Message</legend>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What would you like to know?"
                className="textarea textarea-lg w-full resize-none bg-base-200"
              />
            </fieldset>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary btn-lg btn-block mt-2"
            >
              {status === 'sending' ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  Sending
                </>
              ) : (
                'Send message'
              )}
            </button>

            {status === 'success' && (
              <div role="status" className="alert alert-success alert-soft">
                <span>Message sent. We will reply to the address you gave.</span>
              </div>
            )}
            {status === 'error' && (
              <div role="alert" className="alert alert-error alert-soft">
                <span>The message did not send. Check your connection and try again.</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default MainPage;
