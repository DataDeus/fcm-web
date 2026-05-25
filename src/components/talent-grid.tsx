import { SiteNav, SiteFooter } from "@/components/site-nav";

export function TalentPage({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: string[];
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
          {images.map((src, i) => (
            <figure key={i} className="group overflow-hidden">
              <img
                src={src}
                alt={`${title} model ${i + 1}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Model {String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}