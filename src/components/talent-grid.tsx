import { SiteNav, SiteFooter } from "@/components/site-nav";
import { Link } from "@tanstack/react-router";
import type { Model } from "@/lib/models";

export function TalentPage({
  title,
  subtitle,
  models,
}: {
  title: string;
  subtitle: string;
  models: Model[];
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Talents</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl">{title}</h1>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">{subtitle}</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {models.map((m) => (
            <Link
              key={m.slug}
              to="/models/$slug"
              params={{ slug: m.slug }}
              className="group block overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={m.cover}
                  alt={m.name}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-display text-lg">{m.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}