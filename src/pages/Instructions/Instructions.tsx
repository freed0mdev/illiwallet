import BalanceChecker from '../../components/BalanceChecker';
import Reveal from '../../components/Reveal';

const STEPS = [
  {
    title: 'Receive your coin',
    body: 'Your ILLI Wallet arrives in sealed packaging. The public address is engraved on the outer ring. The private key sits on the inner disc, hidden until you lift it out.',
  },
  {
    title: 'Send Bitcoin to it',
    body: 'Open any Bitcoin wallet or exchange app, choose Send, and scan the public QR code on the ring. Send a small test amount first, then the rest once it arrives.',
  },
  {
    title: 'Put it away',
    body: 'Keep the coin somewhere dry and secure, such as a home safe or a bank deposit box. It needs no power and no maintenance, so it can stay there for years.',
  },
  {
    title: 'Spend when you are ready',
    body: 'Lift the inner disc to reveal the private key. In your wallet app choose Sweep, scan the key, and the full balance moves to a fresh address you control.',
  },
];

const TIPS = [
  {
    title: 'Never share the private key',
    body: 'Anyone who scans the inner disc can spend the balance. Keep it sealed and out of photographs.',
  },
  {
    title: 'Protect it from fire and water',
    body: 'Metal is tough, but engraving can still be damaged. A fireproof safe is the simplest answer.',
  },
  {
    title: 'Check the address before you send',
    body: 'Compare the address your app shows with the one on the ring, and send a small test amount first.',
  },
  {
    title: 'Sweep, do not import',
    body: 'Sweeping moves the funds to a new key. Importing leaves them on a key that is now exposed.',
  },
];

function InstructionsPage() {
  return (
    <>
      <section className="bg-base-100 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="wrap text-center">
          <h1 className="display-xl mx-auto max-w-3xl">Using your ILLI Wallet.</h1>
          <p className="lede mx-auto mt-6 max-w-xl text-base-content/70">
            Four steps from the box to a funded cold wallet, and the habits that keep it safe.
          </p>
        </div>
      </section>

      <section className="bg-base-100 pb-28 md:pb-36">
        <div className="wrap">
          <ul className="timeline timeline-vertical timeline-compact mx-auto max-w-2xl">
            {STEPS.map((step, i) => (
              <li key={step.title} className="[--timeline-col-start:0] [--timeline-row-start:0.5rem]">
                {i > 0 && <hr className="bg-base-300" />}
                <div className="timeline-middle">
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-content">
                    {i + 1}
                  </span>
                </div>
                <div className="timeline-end mb-12 pl-4 md:pl-6">
                  <h2 className="display-md">{step.title}</h2>
                  <p className="mt-3 max-w-prose text-[17px] leading-relaxed text-base-content/65">
                    {step.body}
                  </p>
                </div>
                {i < STEPS.length - 1 && <hr className="bg-base-300" />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-base-200 py-28 md:py-36">
        <div className="wrap">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-lg">Keep it safe.</h2>
            <p className="lede mt-5 text-base-content/70">
              Cold storage removes the digital risks. These four habits handle the physical ones.
            </p>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-20">
            {TIPS.map((tip) => (
              <div key={tip.title} className="border-t border-base-300 pt-5">
                <h3 className="text-lg font-semibold tracking-[-0.015em]">{tip.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-base-content/65">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-28 md:py-36">
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
    </>
  );
}

export default InstructionsPage;
