import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const primary = variant === "dark" ? "text-[color:var(--color-navy-900)]" : "text-white";
  const muted = variant === "dark" ? "text-[color:var(--color-muted-text)]" : "text-white/70";
  const markBg = variant === "dark"
    ? "bg-[color:var(--color-navy-900)]"
    : "bg-white/10 border border-white/20";

  return (
    <Link
      href="/"
      aria-label="Deep Multispeciality Hospital — Home"
      className="inline-flex items-center gap-3 focus-ring"
    >
      <span
        aria-hidden="true"
        className={`relative flex h-11 w-11 items-center justify-center rounded-2xl ${markBg} shadow-[0_8px_18px_-10px_rgba(11,59,46,0.55)]`}
      >
        <span className="absolute inline-block h-[18px] w-[3px] rounded-full bg-[color:var(--color-gold-500)]" />
        <span className="absolute inline-block h-[3px] w-[18px] rounded-full bg-[color:var(--color-gold-500)]" />
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-[color:var(--color-teal-500)] border-2 border-white" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-[16px] font-extrabold tracking-tight ${primary}`}>DEEP</span>
        <span className={`-mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${muted} ${compact ? "hidden sm:inline" : ""}`}>
          Multispeciality Hospital
        </span>
      </span>
    </Link>
  );
}
