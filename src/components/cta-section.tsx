import { CtaButtons } from "@/components/cta-buttons";

export function CtaSection({
  title = "Style. Talent. Strength.",
  body = "Get scouted, or book one of our talents — the First Cent way.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-5xl md:text-6xl">{title}</h2>
        <p className="mt-4 opacity-80">{body}</p>
        <div className="mt-8 flex justify-center">
          <CtaButtons tone="dark" />
        </div>
      </div>
    </section>
  );
}