import { createFileRoute } from "@tanstack/react-router";
import { TalentPage } from "@/components/talent-grid";
import { menImages } from "@/lib/models";

export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      { title: "Men — First Cent Models" },
      { name: "description", content: "Meet the men of First Cent — character, presence, and quiet power." },
    ],
  }),
  component: () => (
    <TalentPage
      title="Men"
      subtitle="Character. Presence. Quiet power. The men redefining modern menswear and editorial."
      images={menImages}
    />
  ),
});