import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { allImages } from "@/lib/models";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — First Cent Models" },
      { name: "description", content: "An editorial gallery of First Cent's roster — campaigns, tests, and portraits." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const grid = [...allImages, ...allImages];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Archive</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl">Gallery</h1>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          Campaigns, editorials and tests from across the First Cent roster.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {grid.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className="w-full break-inside-avoid object-cover"
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}