import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
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
    ["Shoe", s.shoe],
    ["Hair", s.hair],
    ["Eyes", s.eyes],
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <Link
          to={model.gender === "women" ? "/women" : "/men"}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          ← Back to {model.gender === "women" ? "Women" : "Men"}
        </Link>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 md:grid-cols-[1.2fr_1fr]">
        <img
          src={model.cover}
          alt={model.name}
          className="aspect-[3/4] w-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            First Cent · {model.gender === "women" ? "Women" : "Men"}
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">{model.name}</h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{model.bio}</p>

          <dl className="mt-10 grid grid-cols-2 gap-y-3 text-sm">
            {statRows.map(([k, v]) =>
              v ? (
                <div key={k} className="contents">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ) : null,
            )}
          </dl>

          <a
            href={`mailto:hello@firstcentmodels.com?subject=Booking%20request%20-%20${encodeURIComponent(model.name)}`}
            className="mt-10 inline-flex w-fit items-center rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
          >
            Book this Model →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {model.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${model.name} ${i + 1}`}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}