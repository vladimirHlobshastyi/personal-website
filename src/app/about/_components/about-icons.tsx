type AboutIconProps = {
  className?: string;
};

export type AboutIconName =
  | 'architecture'
  | 'briefcase'
  | 'clock'
  | 'collaboration'
  | 'compass'
  | 'conversation'
  | 'globe'
  | 'layers'
  | 'mobile'
  | 'nodes'
  | 'shield'
  | 'spark'
  | 'speed';

export function LayeredBlocksIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="5" width="16" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="10" width="12" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="15" width="8" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MobileStackIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="7"
        y="2.8"
        width="10"
        height="18.4"
        rx="2.3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M10 6.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function ConnectedNodesIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="17" r="2.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 8.1 10.7 14M16 8.1 13.3 14M8.6 7h6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkFrameIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m12 7 1.35 3.15L16.5 11.5l-3.15 1.35L12 16l-1.35-3.15L7.5 11.5l3.15-1.35L12 7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompassStrokeIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m9 15 2-6 6-2-2 6-6 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function SpeedLinesIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12a7 7 0 1 1 14 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="m12 12 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M5 17h2.5M16.5 17H19M9 19h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ConversationIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 6.5h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H9.5L6 18v-2.5H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 8.5h.5A2.5 2.5 0 0 1 22 11v4a2.5 2.5 0 0 1-2.5 2.5H18V20l-2.7-2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BriefcaseIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M4 11h16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function GlobeStrokeIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.8 12h16.4M12 3.8c2.1 2.2 3.2 5.1 3.2 8.2S14.1 18 12 20.2M12 3.8C9.9 6 8.8 8.9 8.8 12S9.9 18 12 20.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockStrokeIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7.5V12l3.2 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckShieldIcon({ className }: AboutIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.8 18.5 6v5.2c0 4.1-2.5 7-6.5 9-4-2-6.5-4.9-6.5-9V6L12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9.3 11.9 1.8 1.8 3.6-3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function getAboutIcon(name: AboutIconName, className: string) {
  switch (name) {
    case 'architecture':
    case 'layers':
      return <LayeredBlocksIcon className={className} />;
    case 'mobile':
      return <MobileStackIcon className={className} />;
    case 'collaboration':
    case 'conversation':
      return <ConversationIcon className={className} />;
    case 'nodes':
      return <ConnectedNodesIcon className={className} />;
    case 'spark':
      return <SparkFrameIcon className={className} />;
    case 'compass':
      return <CompassStrokeIcon className={className} />;
    case 'speed':
      return <SpeedLinesIcon className={className} />;
    case 'briefcase':
      return <BriefcaseIcon className={className} />;
    case 'globe':
      return <GlobeStrokeIcon className={className} />;
    case 'clock':
      return <ClockStrokeIcon className={className} />;
    case 'shield':
      return <CheckShieldIcon className={className} />;
    default:
      return <LayeredBlocksIcon className={className} />;
  }
}
