'use client';

// Templates re-mount on every navigation, so the enter animation replays
// on each route change while the persistent layout (header/footer) stays put.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
