import React from "react";

interface IconProps {
  className?: string;
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Frame({ className = "h-5 w-5", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...strokeProps}>
      {children}
    </svg>
  );
}

export const LinkedInIcon: React.FC<IconProps> = ({ className = "h-4 w-4" }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45c0-.8-.66-1.46-1.46-1.46-.8 0-1.45.66-1.45 1.46 0 .8.65 1.45 1.46 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Frame>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Frame>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <path d="M12 4v15" />
    <path d="m6 13 6 6 6-6" />
  </Frame>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <path d="M6 6 18 18" />
    <path d="M18 6 6 18" />
  </Frame>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Frame>
);

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19a6 6 0 0 1 12 0" />
    <path d="M16 5.4a3.2 3.2 0 0 1 0 5.2" />
    <path d="M17.5 13.6A5.5 5.5 0 0 1 21 19" />
  </Frame>
);

export const TargetIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </Frame>
);

export const TrendingUpIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <path d="m4 16 5-5 3.5 3.5L20 7" />
    <path d="M15 7h5v5" />
  </Frame>
);

export const GitCommitIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <circle cx="12" cy="12" r="3.4" />
    <path d="M3 12h5.6" />
    <path d="M15.4 12H21" />
  </Frame>
);

export const SlidersIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <path d="M5 5v14" />
    <path d="M12 5v14" />
    <path d="M19 5v14" />
    <circle cx="5" cy="9" r="1.8" />
    <circle cx="12" cy="15" r="1.8" />
    <circle cx="19" cy="8" r="1.8" />
  </Frame>
);

export const RefreshIcon: React.FC<IconProps> = ({ className }) => (
  <Frame className={className}>
    <path d="M20 11a8 8 0 0 0-13.7-5.2L4 8" />
    <path d="M4 4v4h4" />
    <path d="M4 13a8 8 0 0 0 13.7 5.2L20 16" />
    <path d="M20 20v-4h-4" />
  </Frame>
);

export const iconRegistry: Record<string, React.FC<IconProps>> = {
  Users: UsersIcon,
  Target: TargetIcon,
  TrendingUp: TrendingUpIcon,
  GitCommit: GitCommitIcon,
  Sliders: SlidersIcon,
  RefreshCw: RefreshIcon,
};
