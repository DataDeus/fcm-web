import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { womenImages, menImages, allImages } from "@/lib/models";
import { CtaButtons } from "@/components/cta-buttons";
import { CtaSection } from "@/components/cta-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
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
    { name: "Runway & Posing", body: "From the way you walk to the way you hold a frame — the fundamentals, refined." },
    { name: "Camera Presence", body: "Editorial, commercial and campaign — learning to communicate with the lens." },
    { name: "Brand Development", body: "Building a long-term personal brand that travels with you globally." },
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
            <div className="mt-10">
              <CtaButtons tone="dark" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={womenImages[0]} alt="Model" className="aspect-[3/4] w-full object-cover" loading="lazy" />
            <img src={menImages[0]} alt="Model" className="mt-12 aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-24">
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
        <div className="mt-12">
          <Link to="/about" className="text-xs uppercase tracking-[0.3em] underline-offset-4 hover:underline">
            Read our story →
          </Link>
        </div>
      </section>

      {/* Talents preview */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Talents</p>
              <h2 className="mt-4 font-display text-5xl">Our roster</h2>
            </div>
            <Link to="/talents" className="hidden text-xs uppercase tracking-[0.3em] underline-offset-4 hover:underline md:inline">
              View all →
            </Link>
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

      {/* Academy preview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Academy</p>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">You don't just learn. You evolve.</h2>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          A rigorous, success-driven training experience led by industry experts — covering runway, camera presence,
          professionalism, and brand development.
        </p>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.name} className="bg-background p-10">
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 font-display text-3xl">{s.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/academy" className="text-xs uppercase tracking-[0.3em] underline-offset-4 hover:underline">
            Discover the Academy →
          </Link>
        </div>
      </section>

      {/* Gallery carousel */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Gallery</p>
              <h2 className="mt-4 font-display text-5xl">From the archive</h2>
            </div>
            <Link
              to="/gallery"
              className="hidden text-xs uppercase tracking-[0.3em] underline-offset-4 hover:underline md:inline"
            >
              See more →
            </Link>
          </div>
          <div className="mt-10">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[autoplay.current]}
            >
              <CarouselContent className="-ml-4">
                {allImages.map((src, i) => (
                  <CarouselItem key={i} className="pl-4 basis-2/3 md:basis-1/3 lg:basis-1/4">
                    <img
                      src={src}
                      alt={`Archive ${i + 1}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              to="/gallery"
              className="rounded-full border border-foreground/20 px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-foreground/5"
            >
              See more →
            </Link>
          </div>
          <div className="mt-10 hidden justify-center md:flex">
            <Link
              to="/gallery"
              className="rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
            >
              See more →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />

      <SiteFooter />
    </div>
  );
}
