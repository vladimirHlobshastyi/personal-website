'use client';

import { useState } from 'react';
import { SocialIcon } from '@/components/ui';
import {
  BLOG_SHARE_RESET_TIMEOUT_MS,
  BLOG_SHARE_VIA_ACCOUNT,
} from '../_constants/blog.constants';

type ShareRowProps = {
  url: string;
  title: string;
};

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="text-muted h-4 w-4" aria-hidden="true">
      <rect x="9" y="9" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15 9V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.2 10.8 7.5-4.4M8.2 13.2l7.5 4.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ShareRow({ url, title }: ShareRowProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const targets = [
    {
      name: 'facebook',
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'linkedin',
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'x',
      label: 'X',
      href: `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}&via=${BLOG_SHARE_VIA_ACCOUNT}`,
    },
    {
      name: 'telegram',
      label: 'Telegram',
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: 'whatsapp',
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), BLOG_SHARE_RESET_TIMEOUT_MS);
    } catch {
      // Clipboard can fail on insecure contexts — silently ignore.
    }
  }

  return (
    <aside className="border-line mt-12 border-t pt-6">
      <details className="group relative inline-block">
        <summary className="border-line text-fg hover:border-line-strong flex h-11 cursor-pointer list-none items-center gap-2 border px-4 text-sm font-semibold transition-colors [&::-webkit-details-marker]:hidden">
          <ShareIcon />
          Share
          <span className="text-muted transition-transform group-open:rotate-45">+</span>
        </summary>
        <div className="border-line bg-surface shadow-card absolute left-0 z-10 mt-2 grid w-52 overflow-hidden border p-1">
          {targets.map((target) => (
            <a
              key={target.name}
              href={target.href}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="share_click"
              data-analytics-label={target.name}
              className="text-fg hover:bg-surface-2 flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors"
            >
              <SocialIcon name={target.name} className="text-muted h-4 w-4" />
              {target.label}
            </a>
          ))}

          <button
            type="button"
            onClick={copy}
            className="text-fg hover:bg-surface-2 flex items-center gap-3 px-3 py-2.5 text-left text-sm font-medium transition-colors"
          >
            <CopyIcon />
            {copied ? 'Copied' : 'Copy link'}
          </button>
        </div>
      </details>
    </aside>
  );
}
