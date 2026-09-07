type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M6 38 L24 8 L42 38"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 30 H33" stroke="var(--gold-primary)" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M4 44 H44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function Logo({ variant = "dark", compact = false, className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy-deep";
  return (
    <span className={`flex items-center gap-3 ${text} ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {!compact && (
        <span className="leading-tight">
          <span className="block text-[0.82rem] font-semibold tracking-[0.16em]">
            ANDHRA MINI TRANSPORT
          </span>
          <span className="block text-[0.62rem] font-medium tracking-[0.28em] text-gold">
            PACKERS AND MOVERS
          </span>
        </span>
      )}
    </span>
  );
}
