import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { womenImages, menImages } from "@/lib/models";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "First Cent Models — Style. Talent. Strength." },
      { name: "description", content: "First Cent Management discovers, develops, and places exceptional African models on the global stage." },
      { property: "og:title", content: "First Cent Models" },
      { property: "og:description", content: "Style. Talent. Strength. The First Cent Way." },
    ],
  }),
  component: Index,
});

function Index() {
  const values = [
    {
      title: "Globally Represented",
      body: "We shape global careers, discovering raw talent and giving it world-class representation.",
    },
    {
      title: "Novelty",
      body: "We redefine what it means to be a model from Africa — building legacies, not trends.",
    },
    {
      title: "Purpose-driven",
      body: "Every decision is guided by our mission, creating sustainable industry and global impact.",
    },
  ];

  const services = [
    { name: "Scouting", body: "We identify and nurture exceptional talent from the earliest stages — discovering presence, passion, and potential." },
    { name: "Development", body: "Catwalk coaching, camera presence, personal branding and professional readiness — tailored to each model." },
    { name: "Placement", body: "Strategic placement with top-tier agencies across global fashion capitals through our network." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-70">First Cent — 2025</p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              Style.<br />Talent.<br />Strength.
            </h1>
            <p className="mt-6 max-w-md text-sm opacity-80">
              The First Cent Way — a global model management home rooted in Africa, building outlasting legacies.
            </p>
            <div className="mt-10 flex gap-4">
              <a href="#contact" className="rounded-full bg-background px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition hover:opacity-90">
                Join Us
              </a>
              <Link to="/gallery" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-primary-foreground/10">
                View Gallery
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={womenImages[0]} alt="Model" className="aspect-[3/4] w-full object-cover" loading="lazy" />
            <img src={menImages[0]} alt="Model" className="mt-12 aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl md:text-6xl">Why choose us?</h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Talents preview */}
      <section id="talents" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Talents</p>
              <h2 className="mt-4 font-display text-5xl">Our roster</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link to="/women" className="group relative block overflow-hidden">
              <img src={womenImages[2]} alt="Women" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                <span className="font-display text-4xl text-white">Women →</span>
              </div>
            </Link>
            <Link to="/men" className="group relative block overflow-hidden">
              <img src={menImages[0]} alt="Men" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                <span className="font-display text-4xl text-white">Men →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">What we do</h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.name} className="bg-background p-10">
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 font-display text-3xl">{s.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl">Get scouted.</h2>
          <p className="mt-4 opacity-80">We are always looking for fresh faces and bold presence.</p>
          <a href="#contact" className="mt-8 inline-block rounded-full bg-background px-8 py-3 text-xs uppercase tracking-[0.2em] text-foreground">
            Apply Now
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
