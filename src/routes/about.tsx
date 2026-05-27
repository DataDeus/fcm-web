import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { CtaButtons } from "@/components/cta-buttons";
import { allImages } from "@/lib/models";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — First Cent Models" },
      { name: "description", content: "First Cent Management is a next-generation mother agency built on bold ambition and a deep understanding of global fashion." },
      { property: "og:title", content: "About — First Cent Models" },
      { property: "og:description", content: "A next-generation mother agency shaping global careers from Africa." },
      { property: "og:url", content: "https://cent-model-space.lovable.app/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://cent-model-space.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95]">
          This is First Cent Management
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            First Cent Management is a next-generation mother agency, built on years of industry experience, bold ambition,
            and a deep understanding of what it takes to succeed in the ever-evolving world of fashion. With a strong
            foundation in elite scouting and model development, our approach is rooted in intentionality, precision,
            and long-term vision.
          </p>
          <p>
            Born from resilience and a deep commitment to growth, we are shaping the future of modelling — not just in
            Africa, but globally.
          </p>
          <p>
            Founded by Chioma Ruby Onyia and co-managed alongside Tamara Denyefar Merry Clement, First Cent is the
            product of over five years of combined industry experience. With a proven track record of discovering and
            developing top talents for other leading agencies, we bring a wealth of insight, passion, and creative
            direction to the table.
          </p>
        </div>
        <img
          src={allImages[0]}
          alt="First Cent model"
          className="aspect-[3/4] w-full object-cover"
          loading="lazy"
        />
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Vision</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Africa's leading gateway for modelling talent.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              To become Africa's leading gateway for modelling talents, empowering individuals to rise globally,
              redefine beauty, and thrive in a world of limitless opportunities.
            </p>
            <blockquote className="mt-6 border-l-2 border-primary pl-4 font-display text-lg italic text-foreground">
              We envision a future where First Cent models are celebrated on top global stages — not just for their
              looks, but for their excellence, discipline, and growth.
            </blockquote>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Mission</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Discover. Develop. Place.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              To discover, develop, and place modeling talents on global platforms by providing world-class training,
              strategic exposure, and unwavering support that ensures every model reaches their highest potential.
            </p>
            <blockquote className="mt-6 border-l-2 border-primary pl-4 font-display text-lg italic text-foreground">
              We are committed to unlocking opportunities, building confidence, and managing careers that shine
              worldwide — with integrity, passion, and purpose.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {allImages.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt="Model" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl">Join the First Cent story.</h2>
          <p className="mt-4 opacity-80">
            Whether you're a fresh face or a brand looking to book talent — we'd love to hear from you.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons tone="dark" />
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] opacity-60">
            <Link to="/academy">Explore the Academy →</Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}