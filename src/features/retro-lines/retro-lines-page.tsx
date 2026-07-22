import Link from 'next/link';
import { CONTACTS } from '@/config/contacts';

const features = [
  'Single-player puzzle gameplay',
  'Offline play',
  'Local progress on device',
  'Rewarded ads for continuation',
  'Multiple stages and score progression',
  'Simple touch controls',
  'No login or account required',
];

export function RetroLinesPage() {
  return (
    <main className="grid gap-5">
      <section className="border-line bg-surface overflow-hidden border p-8 sm:p-10">
        <p className="text-quiet before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
          Android Puzzle Game
        </p>
        <div className="grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
          <div>
            <h1 className="tracking-tightest max-w-3xl text-[clamp(2.8rem,7vw,5.5rem)] leading-[.92] font-semibold">
              Retro Lines
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-lg leading-8">
              Retro Lines is a minimalist puzzle game focused on quick sessions, clean visuals,
              and score-based progression. Players match lines, manage limited moves, and continue
              their run with rewarded ads. The game is designed for solo offline play.
            </p>
          </div>

          <div className="border-line bg-bg/55 grid gap-3 border p-5">
            <p className="text-quiet text-[0.7rem] font-bold tracking-[.16em] uppercase">
              Support page
            </p>
            <p className="text-fg text-sm leading-7">
              This page provides app information, support contact details, and policy references
              for store and advertising platform requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
            About the game
          </p>
          <p className="text-muted max-w-3xl text-[0.98rem] leading-8">
            Retro Lines is a single-player puzzle game for Android. The gameplay is built around
            line-based board strategy, score progression, short sessions, and local device
            progress storage. The app does not include social features, user accounts, messaging,
            or user-generated content.
          </p>
        </article>

        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">Features</p>
          <ul className="grid gap-3">
            {features.map((feature) => (
              <li key={feature} className="border-line bg-surface-2/35 flex items-start gap-3 border p-3">
                <span
                  className="bg-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-fg text-[0.95rem] leading-7">{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_.82fr]">
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">Privacy</p>
          <p className="text-muted max-w-3xl text-[0.98rem] leading-8">
            Retro Lines uses Google AdMob to show ads and Sentry for crash diagnostics. The app
            does not provide user accounts, chat, or user-generated content. For full privacy
            details, see the privacy policy below.
          </p>
          <Link
            href="https://sites.google.com/view/retro-lines-privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent mt-5 inline-flex text-sm font-semibold underline underline-offset-4 transition-colors hover:opacity-80"
          >
            Privacy Policy
          </Link>
        </article>

        <div className="grid gap-5">
          <article className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">Support</p>
            <p className="text-muted text-[0.98rem] leading-8">
              For support, business, or store-related questions, contact:
            </p>
            <a
              href={CONTACTS.email.href}
              className="text-fg mt-4 inline-flex break-all text-sm font-semibold underline underline-offset-4 transition-colors hover:text-accent"
            >
              {CONTACTS.email.value}
            </a>
          </article>

          <article className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
              Availability
            </p>
            <p className="text-muted text-[0.98rem] leading-8">Retro Lines is distributed via Google Play.</p>
            <p className="text-fg mt-4 text-sm leading-7">
              Google Play link will be added after publication.
            </p>
          </article>
        </div>
      </section>

      <p className="text-quiet max-w-3xl text-[0.75rem] leading-6">
        Developer website for Retro Lines. This page exists to provide app information, support
        contact details, and policy references for store and advertising platform requirements.
      </p>
    </main>
  );
}
