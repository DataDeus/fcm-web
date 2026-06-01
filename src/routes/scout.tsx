import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scout")({
  head: () => ({
    meta: [
      { title: "Get Scouted — First Cent Models" },
      {
        name: "description",
        content: "Submit your First Cent scouting application.",
      },
    ],
  }),
  component: ScoutPage,
});

function ScoutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <iframe
        src="https://tally.so/r/b5vGVE?transparentBackground=1"
        title="First Cent Models Scouting Form"
        className="absolute inset-0 h-full w-full border-0"
      />
    </main>
  );
}