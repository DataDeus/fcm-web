import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { CtaSection } from "@/components/cta-section";
import { allImages } from "@/lib/models";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Academy — First Cent Models" },
      { name: "description", content: "The First Cent Academy: a rigorous, success-driven training experience led by industry experts. Coming soon — join the waitlist." },
      { property: "og:title", content: "Academy — First Cent Models" },
      { property: "og:description", content: "You don't just learn here — you evolve. Coming soon." },
      { property: "og:url", content: "https://cent-model-space.lovable.app/academy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://cent-model-space.lovable.app/academy" }],
  }),
  component: AcademyPage,
});

function AcademyPage() {
  const pillars = [
    { name: "Runway & Posing", body: "From the way you walk to the way you hold a frame — the fundamentals, refined." },
    { name: "Camera Presence", body: "Editorial, commercial and campaign — learning to communicate with the lens." },
    { name: "Professionalism", body: "Industry standards, etiquette on set, working with clients and crews." },
    { name: "Brand Development", body: "Building a long-term personal brand that travels with you globally." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-70">Academy</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.95] md:text-8xl">
              You don't just learn here. You evolve.
            </h1>
            <p className="mt-6 max-w-md text-sm opacity-80">
              Whether you're just entering the modeling industry or already an established talent ready for your next
              level — First Cent puts your growth first.
            </p>
          </div>
          <img
            src={allImages[1] ?? allImages[0]}
            alt="First Cent Academy"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Programme</p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          At the Academy, we offer a rigorous, success-driven training experience led by industry experts. From runway
          and posing to professionalism and brand development, you'll gain real-world exposure and the tools needed to
          thrive in today's fashion landscape.
        </p>
        <p className="mt-6 font-display text-2xl">Prepare for a future shaped by confidence, skill, and strategy — the First Cent way.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={p.name} className="bg-background p-8">
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Now Enrolling</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">The Academy is open.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Applications are live. Train with industry experts, build your portfolio, and step into a global career —
            the First Cent way.
          </p>
          <dl className="mt-10 grid gap-6 text-left sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tuition</dt>
              <dd className="mt-2 font-display text-2xl">₦50,000</dd>
              <p className="mt-2 text-xs text-muted-foreground">Full programme. One-time fee.</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Format</dt>
              <dd className="mt-2 font-display text-2xl">Online & Offline</dd>
              <p className="mt-2 text-xs text-muted-foreground">
                In-person classes available in Lagos and Port Harcourt only.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Credential</dt>
              <dd className="mt-2 font-display text-2xl">Certificate</dd>
              <p className="mt-2 text-xs text-muted-foreground">
                Earn a First Cent Certificate of Completion at the end of the programme.
              </p>
            </div>
          </dl>
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:academy@firstcentmodels.com?subject=Academy%20Application"
              className="rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      <CtaSection />

      <SiteFooter />
    </div>
  );
}