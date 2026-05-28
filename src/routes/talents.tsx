import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { CtaSection } from "@/components/cta-section";
import { womenModels, menModels } from "@/lib/models";

export const Route = createFileRoute("/talents")({
  head: () => ({
    meta: [
      { title: "Talents — First Cent Models" },
      { name: "description", content: "Meet the women and men of First Cent — a curated roster of editorial, runway, and commercial talent." },
      { property: "og:title", content: "Talents — First Cent Models" },
      { property: "og:description", content: "Meet the women and men of First Cent Management." },
      { property: "og:url", content: "https://cent-model-space.lovable.app/talents" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://cent-model-space.lovable.app/talents" }],
  }),
  component: TalentsHub,
});

function TalentsHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Roster</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95]">Talents</h1>
        <p className="mt-6 max-w-xl text-sm text-muted-foreground">
          A curated selection of First Cent faces — represented globally across editorial, runway, and campaign.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        <Link to="/women" className="group relative block overflow-hidden">
          <img
            src={womenModels[0]?.cover}
            alt="Women"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Division</p>
              <span className="font-display text-5xl text-white">Women →</span>
            </div>
          </div>
        </Link>
        <Link to="/men" className="group relative block overflow-hidden">
          <img
            src={menModels[0]?.cover}
            alt="Men"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Division</p>
              <span className="font-display text-5xl text-white">Men →</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Featured</p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[...womenModels.slice(0, 2), ...menModels.slice(0, 2)].map((m) => (
            <Link key={m.slug} to="/models/$slug" params={{ slug: m.slug }} className="group block">
              <img
                src={m.cover}
                alt={m.name}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
              />
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

      <CtaSection />

      <SiteFooter />
    </div>
  );
}