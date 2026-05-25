import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Services", to: "/", hash: "#services" },
  { label: "Women", to: "/women" },
  { label: "Men", to: "/men" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/", hash: "#contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl tracking-tight">
          First Cent
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
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
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border/60 px-6 py-6 md:hidden">
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
          <h3 className="font-display text-3xl">First Cent</h3>
          <p className="mt-3 text-sm opacity-70">Shaping global careers from Africa to the world.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-60">Contact</p>
          <p className="mt-3 text-sm">hello@firstcentmodels.com</p>
          <p className="text-sm">Lagos, Nigeria</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-60">Follow</p>
          <p className="mt-3 text-sm">Instagram · TikTok · LinkedIn</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} First Cent Management
      </div>
    </footer>
  );
}