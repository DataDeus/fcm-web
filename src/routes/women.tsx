import { createFileRoute } from "@tanstack/react-router";
import { TalentPage } from "@/components/talent-grid";
import { womenModels } from "@/lib/models";

export const Route = createFileRoute("/women")({
  head: () => ({
    meta: [
      { title: "Women — First Cent Models" },
      { name: "description", content: "Meet the women of First Cent — bold presence, unmistakable style." },
    ],
  }),
  component: () => (
    <TalentPage
      title="Women"
      subtitle="Bold presence. Unmistakable style. The women shaping the next era of global fashion."
      models={womenModels}
    />
  ),
});