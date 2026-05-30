import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "About", to: "/about" },
  { label: "Talents", to: "/talents" },
  { label: "Academy", to: "/academy" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="First Cent" className="h-6 w-auto invert" />
          <span className="font-display text-2xl tracking-tight">First Cent</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/talents"
            className="rounded-full border border-foreground/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-foreground transition hover:bg-foreground/5"
          >
            Book a Model
          </Link>
          <a
            href="mailto:hello@firstcentmodels.com?subject=Get%20Scouted"
            className="rounded-full bg-primary px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
          >
            Get Scouted
          </a>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border/60 px-6 py-6 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <Link
              to="/talents"
              onClick={() => setOpen(false)}
              className="rounded-full border border-foreground/20 px-4 py-2 text-center text-[10px] uppercase tracking-[0.2em]"
            >
              Book a Model
            </Link>
            <a
              href="mailto:hello@firstcentmodels.com?subject=Get%20Scouted"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-4 py-2 text-center text-[10px] uppercase tracking-[0.2em] text-primary-foreground"
            >
              Get Scouted
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="First Cent" className="h-7 w-auto" />
            <h3 className="font-display text-3xl">First Cent</h3>
          </div>
          <p className="mt-3 text-sm opacity-70">Shaping global careers from Africa to the world.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-60">Contact</p>
          <p className="mt-3 text-sm">hello@firstcentmodels.com</p>
          <p className="text-sm">+234 800 000 0000</p>
          <p className="text-sm">Lagos, Nigeria</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-60">Follow</p>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
            <a
              href="https://instagram.com/firstcentmodels"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Instagram
            </a>
            <span className="opacity-50">·</span>
            <a
              href="https://tiktok.com/@firstcentmodels"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              TikTok
            </a>
            <span className="opacity-50">·</span>
            <a
              href="https://linkedin.com/company/firstcentmodels"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} First Cent Management · Developed by{" "}
        <a
          href="https://wyty.org"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 hover:underline"
        >
          WyTy
        </a>
      </div>
    </footer>
  );
}