import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { CtaSection } from "@/components/cta-section";
import { getModel } from "@/lib/models";

export const Route = createFileRoute("/models/$slug")({
  loader: ({ params }) => {
    const model = getModel(params.slug);
    if (!model) throw notFound();
    return { model };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.model.name ?? "Model"} — First Cent Models` },
      { name: "description", content: loaderData?.model.bio ?? "" },
      { property: "og:image", content: loaderData?.model.cover },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-5xl">Model not found</h1>
        <Link to="/" className="mt-6 inline-block text-sm uppercase tracking-[0.2em] underline">
          Back home
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background p-10 text-foreground">
      <p>Something went wrong.</p>
      <button onClick={reset} className="mt-4 underline">Retry</button>
    </div>
  ),
  component: ModelPage,
});

function ModelPage() {
  const { model } = Route.useLoaderData();
  const s = model.stats;
  const statRows: [string, string | undefined][] = [
    ["Height", s.height],
    [model.gender === "women" ? "Bust" : "Chest", s.bust ?? s.chest],
    ["Waist", s.waist],
    ["Hips", s.hips],
    ["Hair", s.hair],
    ["Eyes", s.eyes],
    ["Shoes", s.shoe],
  ];
  const placements = model.placements ?? [
    { city: "Lagos", agency: "First Cent Management" },
  ];
  const bookHref = `mailto:hello@firstcentmodels.com?subject=${encodeURIComponent(
    `Booking request - ${model.name}`,
  )}&body=${encodeURIComponent(`I want to book, ${model.name}`)}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-4">
        <Link
          to={model.gender === "women" ? "/women" : "/men"}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          ← Back to {model.gender === "women" ? "Women" : "Men"}
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
          {model.name} <span className="text-muted-foreground">profile</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-[1fr_1.4fr]">
        {/* Left: Measurement + Placement */}
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-3xl">Measurement</h2>
            <dl className="mt-6 divide-y divide-border border-t border-b border-border">
              {statRows.map(([k, v]) =>
                v ? (
                  <div key={k} className="flex items-center justify-between py-3 text-sm">
                    <dt className="uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ) : null,
              )}
            </dl>
          </div>

          <div>
            <h2 className="font-display text-3xl">Placement</h2>
            <table className="mt-6 w-full border-t border-b border-border text-sm">
              <tbody className="divide-y divide-border">
                {placements.map((p) => (
                  <tr key={p.city + p.agency}>
                    <td className="py-3 pr-4 uppercase tracking-[0.2em] text-muted-foreground">{p.city}</td>
                    <td className="py-3 text-right">{p.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3">
            {model.instagram && (
              <a
                href={model.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-foreground/20 px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-foreground/5"
              >
                Instagram
              </a>
            )}
            <a
              href={bookHref}
              className="rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
            >
              Book this Model →
            </a>
          </div>
        </div>

        {/* Right: Images + bio */}
        <div className="space-y-6">
          {model.images.map((src: string, i: number) => (
            <img
              key={i}
              src={src}
              alt={`${model.name} ${i + 1}`}
              loading="lazy"
              className="w-full object-cover"
            />
          ))}
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{model.bio}</p>
        </div>
      </section>

      <CtaSection />

      <SiteFooter />
    </div>
  );
}