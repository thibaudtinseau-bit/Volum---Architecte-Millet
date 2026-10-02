const PATHS: Record<string, string> = {
  house: "M4 22V11l10-7 10 7v11M4 22h20M11 22v-7h6v7M18 8V4h3v6",
  extend: "M3 22V10l8-6 8 6v12M19 13h7v9h-7M3 22h23M22 16v3",
  plan: "M3 3h22v22H3zM3 12h9v13M12 3v5M17 12h8M17 12v5",
  office: "M5 3h18v22H5zM9 7h2M13 7h2M17 7h2M9 11h2M13 11h2M17 11h2M9 15h2M13 15h2M17 15h2M12 25v-5h4v5",
  build: "M3 25h22M6 25V9h8v16M14 13h8v12M4 6l16-3M18 3.6V9",
  leaf: "M5 23C5 12 12 5 24 4c0 12-7 19-17 19M5 23l10-10",
  pool: "M3 18c2 0 2-1.5 4.5-1.5S10 18 12.5 18 15 16.5 17.5 16.5 20 18 22.5 18 25 16.5 25 16.5M3 23c2 0 2-1.5 4.5-1.5S10 23 12.5 23 15 21.5 17.5 21.5 20 23 22.5 23 25 21.5 25 21.5M9 14V5a2 2 0 0 1 4 0M17 14V5a2 2 0 0 1 4 0M9 9h8",
  interior: "M3 17h22v5H3zM6 17v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M5 22v3M23 22v3M14 4v4M11 8h6",
  renov: "M4 25V12l10-8 10 8v13zM10 25v-8h8v8M8 4l3 3M20 4l-3 3",
  ear: "M8 12a6 6 0 1 1 12 0c0 4-4 5-4 9a3 3 0 0 1-6 0M12 12a2 2 0 1 1 4 0",
  ruler: "M3 20L20 3l5 5L8 25zM8 15l2 2M11 12l3 3M14 9l2 2M17 6l3 3",
  shield: "M14 3l9 4v6c0 6-4 10-9 12-5-2-9-6-9-12V7zM10 14l3 3 5-6",
};

export function Icon({ name, className = "service-icon" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.3}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}

export const Arrow = () => <span className="arrow" aria-hidden="true">→</span>;

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z" />
    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
    <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
  </svg>
);
