import { Link } from "@tanstack/react-router";

export function CtaButtons({ tone = "light" }: { tone?: "light" | "dark" }) {
  const secondary =
    tone === "dark"
      ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
      : "border-foreground/20 text-foreground hover:bg-foreground/5";
  const primary =
    tone === "dark"
      ? "bg-background text-foreground hover:opacity-90"
      : "bg-primary text-primary-foreground hover:opacity-90";
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        data-tally-open="b5vGVE"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        className={`rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em] transition ${primary}`}
      >
        Get Scouted
      </button>
      <Link
        to="/talents"
        className={`rounded-full border px-6 py-3 text-xs uppercase tracking-[0.2em] transition ${secondary}`}
      >
        Book a Model
      </Link>
    </div>
  );
}